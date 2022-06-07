import React, {useRef, useState, useEffect} from 'react';
import Layout from '@theme/Layout';

import {QRCode} from '../components/QRCode';
import styles from './index.module.scss';
import {graphql} from '../utils/request';

const hasValue = val =>
  val !== null && val !== undefined && `${val}`.trim().length > 0;

const APP_ID_KEY = 'tiniapp-appId';
const APP_IMAGE_KEY = 'tiniapp-appImage';

const InputGroup = ({readOnly, label, value, index, onChange}) => {
  return (
    <div className={styles.flexRowCenter}>
      <input
        className={styles.qrInput}
        defaultValue={label}
        readOnly={readOnly}
        spellCheck="false"
        placeholder="Tên thuộc tính"
        onChange={event => onChange({label: event.target.value, value, index})}
      />
      <input
        className={styles.qrInput}
        defaultValue={value}
        spellCheck="false"
        placeholder="Giá trị thuộc tính"
        onChange={event => onChange({value: event.target.value, label, index})}
      />
    </div>
  );
};

export default function QRCodePage() {
  const [appId, setAppId] = useState('');
  const [appImage, setImage] = useState('');
  const [inputs, setInputs] = useState([
    {
      label: 'utm_source',
      value: '',
    },
    {
      label: 'utm_medium',
      value: '',
    },
    {
      label: 'utm_campaign',
      value: '',
    },
  ]);
  const [params, setParams] = useState(null);
  const [qrValue, setQrValue] = useState();
  const [url, setUrl] = useState();
  const timeout = useRef(null);

  useEffect(() => {
    const id = localStorage.getItem(APP_ID_KEY);
    const image = localStorage.getItem(APP_IMAGE_KEY);
    if (id && image) {
      setAppId(id);
      setImage(image);
      getAppinfo(id);
    }

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const onChangeInput = ({label, value, index}) => {
    const newInputs = inputs.map((item, i) =>
      i === index ? {label, value} : item,
    );
    setInputs(newInputs);

    const newParams = newInputs.reduce((rs, item) => {
      if (hasValue(item.label) && hasValue(item.value)) {
        rs[item.label] = item.value;
      }
      return rs;
    }, {});
    setParams(Object.keys(newParams).length > 0 ? newParams : null);
  };

  const onAddInput = () => {
    setInputs([...inputs, {label: '', value: ''}]);
  };

  const getAppinfo = async id => {
    try {
      const query = `  
          query {
            get_app(app_identifier: "${id}")  {
              id
              name
              identifier
              image_url
            }
          }
      `;

      const data = await graphql({query});
      const image = data.get_app.image_url;
      if (image) {
        setImage(image);
        localStorage.setItem(APP_IMAGE_KEY, image);
        localStorage.setItem(APP_ID_KEY, id);
      }
    } catch {
      setImage(null);
    }
  };

  const changeAppId = async value => {
    if (hasValue(value)) {
      setAppId(value);
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
      timeout.current = setTimeout(() => {
        getAppinfo(value);
      }, 300);
    } else if (appImage) {
      setImage(null);
    }
  };

  const onGetQrCode = async () => {
    const url = `https://tiki.vn/apps/${appId}${
      params ? '?' : ''
    }${new URLSearchParams(params || {})}`;
    try {
      const query = `  
         mutation shorten_link_create {
          shorten_link_create(input: {
            app_identifier: "${appId}"
            original_link: "${url}"
          })
        }
      `;

      const data = await graphql({query});
      const shortLink = data.shorten_link_create;
      setQrValue(shortLink || url);
    } catch (error) {
      setQrValue(url);
    } finally {
      setUrl(url);
    }
  };

  return (
    <Layout title="QR Code Generator" description="Tini App QR Code Generator">
      <main className={styles.allCenter}>
        <h1>Tini App QR Code Generator</h1>
        <InputGroup
          onChange={({value}) => changeAppId(value)}
          label="App Id"
          readOnly
          value={appId}
        />

        {inputs.map((input, index) => (
          <React.Fragment key={index}>
            <InputGroup
              onChange={({label, value}) =>
                onChangeInput({label, value, index})
              }
              label={input.label}
              value={input.value}
            />
            {index === inputs.length - 1 && (
              <div className="flex">
                <button className={styles.qrButtonWhite} onClick={onAddInput}>
                  Thêm mới
                </button>
                <button
                  className={styles.qrButton}
                  onClick={onGetQrCode}
                  disabled={!appId || !appImage}>
                  Lấy QR Code
                </button>
              </div>
            )}
          </React.Fragment>
        ))}

        {qrValue && (
          <div style={{marginTop: 40}}>
            <QRCode
              qrValue={qrValue}
              showImport={false}
              logoImage={appImage}
              subLink={url}
            />
          </div>
        )}
      </main>
    </Layout>
  );
}
