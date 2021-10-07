import './index.scss';
import React from 'react';
import Head from '@docusaurus/Head';

import Layout from '@theme/Layout';
import LogoLabel from '@site/static/tini-studio-label.svg';
import Logo from '@site/static/tini-studio-logo.svg';
import Win from '@site/static/microsoft.svg';
import Apple from '@site/static/apple.svg';

import Code from '@site/static/IDE-code.svg';
import Simulator from '@site/static/IDE-simulation.svg';
import Manage from '@site/static/IDE-manage.svg';

const getVersion = updateUrl => {
  return new Promise(resolve => {
    fetch(updateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-agent': 'Tini Miniapp Docs',
      },
      body: JSON.stringify({
        query: `query get_parameter($name:String!){
              get_parameter(name:$name){
                value
              }
          }
          `,
        variables: {
          name: 'tini_studio_config',
        },
      }),
    })
      .then(resp => resp.json())
      .then(res => {
        if (res && res.latest) {
          const latest = res.latest;
          window.localStorage.setItem('latest', JSON.stringify(latest));
          return resolve({
            stable: latest.version,
            mac: latest.macosx,
            win: latest.windows,
          });
        }
        throw new Error('Fetch config fail');
      })
      .catch(() => {
        const latest = localStorage.getItem('latest');
        if (latest) {
          const {version, macosx, windows} = JSON.parse(latest);
          resolve({
            stable: version,
            mac: macosx,
            win: windows,
          });
        }
      });
  });
};
const getParameter = () => {
  return new Promise(resolve => {
    fetch('https://api.tiki.vn/tiniapp/api/graphql/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-agent': 'Tini Miniapp Docs',
      },
      body: JSON.stringify({
        query: `query get_parameter($name:String!){
              get_parameter(name:$name){
                value
              }
          }
          `,
        variables: {
          name: 'tini_studio_config',
        },
      }),
    })
      .then(resp => resp.json())
      .then(res => {
        if (res && res.data) {
          return resolve(JSON.parse(res.data.get_parameter.value).update_url);
        }
        resolve(
          'https://gist.githubusercontent.com/kiennguyentiki/ac21ae53a151a45a4bbc1f6fe59b74b1/raw',
        );
      })
      .catch(() => {
        resolve(
          'https://gist.githubusercontent.com/kiennguyentiki/ac21ae53a151a45a4bbc1f6fe59b74b1/raw',
        );
      });
  });
};

const DownloadSEO = () => {
  return (
    <Head>
      <title>Download the latest version of Tini Studio</title>
      <meta
        property="og:description"
        content="Tini Studio, còn có tên khác là Tiki IDE, là bộ phần mềm phát triển ứng dụng trên nền tảng Tini App. Nó sở hữu tập hợp các công cụ: quản lý dự án, code editor (trình viết code), debug (gỡ lỗi), trình giả lập và tải mã nguồn của dự án lên Tiki Dev Center."
      />
      <meta property="og:title" content="Downloads Tini Studio" />
    </Head>
  );
};
const Download = () => {
  const [version, setVersion] = React.useState({
    stable: '',
    mac: '',
    win: '',
  });
  const features = React.useMemo(
    () => [
      {
        thumbnail: <Code />,
        description:
          'Tích hợp bộ xử lý ngôn ngữ để highlight cú pháp và hỗ trợ các ngôn ngữ và API của Tini Framework như TXML, SJS, JS API. Đồng thời, tính năng autocomplete giúp việc tiếp cận với Tini Framework trở nên dễ dàng hơn.',
        header: 'Trình soạn thảo',
        link: 'https://developers.tiki.vn/docs/studio/overview',
      },
      {
        thumbnail: <Simulator />,
        description:
          'Tích hợp bộ xử lý ngôn ngữ để highlight cú pháp và hỗ trợ các ngôn ngữ và API của Tini Framework như TXML, SJS, JS API. Đồng thời, tính năng autocomplete giúp việc tiếp cận với Tini Framework trở nên dễ dàng hơn.',
        header: 'Trình giả lập',
        link: 'https://developers.tiki.vn/docs/studio/simulator',
      },
      {
        thumbnail: <Manage />,
        description:
          'Bản thân Tini Studio đã tích hợp sẵn với các công cụ khác như NPM và Git giúp bạn quản lý các thư viện và code tốt hơn.',
        header: 'Quản lý dự án',
        link: 'https://developers.tiki.vn/docs/studio/development',
      },
    ],
    [],
  );

  React.useEffect(() => {
    getParameter()
      .then(updateUrl => {
        console.log('updateUrl', updateUrl);
        return getVersion(updateUrl);
      })
      .then(version => {
        setVersion(version);
      });
  }, []);

  return (
    <>
      <DownloadSEO />
      <Layout>
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(245, 245, 250, 0) 0%, #F5F5FA 100%)',
            marginBottom: 40,
          }}>
          <div style={{marginTop: 40}}>
            <Banner version={version.stable} />
          </div>
          <div
            className="flex fr jc-center"
            style={{padding: 8, paddingBottom: 40, marginTop: 24}}>
            <DownloadLinks style={{marginRight: 32}} link={version.win}>
              <Win style={{marginRight: 16}} />
              <span className="download-label">Windows</span>
            </DownloadLinks>
            <DownloadLinks link={version.mac}>
              <Apple style={{marginRight: 16}} />
              <span className="download-label">MacOS</span>
            </DownloadLinks>
          </div>
        </div>
        <div
          style={{backgroundColor: '#fff', width: '100%'}}
          className="flex fc ai-center">
          {features.map((props, idx) => (
            <div style={{marginBottom: 40}}>
              <Feature {...props} key={`feature-${idx}`} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};
const Feature = ({description, link, thumbnail, header}) => {
  return (
    <div className="flex fr feature-layout">
      <div
        className="feature-thumbail"
        style={{maxWidth: 328, marginRight: 32}}>
        {React.cloneElement(thumbnail, {width: 328})}
      </div>
      <div className="flex fc" style={{maxWidth: 328}}>
        <h3>{header}</h3>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          className="flex fcc"
          style={{
            border: '1px solid #1A94FF',
            color: '#1A94FF',
            width: 120,
            height: 32,
            borderRadius: 16,
            textDecoration: 'none',
          }}>
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  );
};

const Banner = ({version}) => {
  return (
    <div className="flex fc fcc">
      <Logo />
      <LogoLabel />
      <span style={{fontSize: '14px', color: '#808089'}}>
        version {version}
      </span>
    </div>
  );
};

const DownloadLinks = ({link, children, style = {}}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex fr fcc download-button"
      style={{
        textDecoration: 'none',
        ...style,
      }}>
      {children}
    </a>
  );
};

export default Download;
