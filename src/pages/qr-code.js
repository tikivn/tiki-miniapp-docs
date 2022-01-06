import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';

import {QRCode} from '../components/QRCode';
import styles from './index.module.scss';

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

  useEffect(() => {
    const id = localStorage.getItem(APP_ID_KEY);
    if (id) {
      setAppId(id);
    }

    const image = localStorage.getItem(APP_IMAGE_KEY);
    if (image) {
      setImage(image);
    }
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
  const changeAppId = async value => {
    if (hasValue(value)) {
      setAppId(value);
      try {
        const query = `  
          query {
            get_app(app_identifier: "${value}")  {
              id
              name
              identifier
              image_url
            }
          }
      `;
        const response = await fetch(
          'https://api.tiki.vn/tiniapp/api/graphql/query',
          {
            body: JSON.stringify({query}),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const appInfo = await response.json();
        const image = appInfo.data.get_app.image_url;
        if (image) {
          setImage(image);
          localStorage.setItem(APP_IMAGE_KEY, image);
          localStorage.setItem(APP_ID_KEY, value);
        }
      } catch {
        alert('App Id không hợp lệ');
      }
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
              <button className={styles.qrButton} onClick={onAddInput}>
                Thêm mới
              </button>
            )}
          </React.Fragment>
        ))}

        {!!appId && !!appImage && (
          <div style={{marginTop: 40}}>
            <QRCode
              params={params}
              showImport={false}
              appId={appId}
              logoImage={appImage}
            />
          </div>
        )}
      </main>
    </Layout>
  );
}
