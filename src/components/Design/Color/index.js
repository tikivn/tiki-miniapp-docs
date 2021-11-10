import React, {useState, useEffect, useRef} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import styles from './index.module.scss';

const Cat = ({value}) => <span>{value}</span>;
const ColorItem = ({locale, value, text}) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef(null);
  const copyText = locale === 'vi-VN' ? 'Đã sao chép' : 'Copied';

  useEffect(() => {
    if (copied) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
      <button className={styles.button} place="top" data-tip={value}>
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: value,
            marginRight: 4,
          }}></span>
        {copied ? copyText : text}
      </button>
    </CopyToClipboard>
  );
};

const Color = ({en, vi, locale = 'vi-VN'}) => {
  const localeData = locale === 'vi-VN' ? vi : en;

  if (!localeData) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          {localeData.headers.map(item => (
            <td key={item}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {localeData.contents.map((item, index) => (
          <tr key={index}>
            {localeData.headers.map((_, colIndex) => {
              let component = <></>;
              const colValue = item[colIndex];
              if (!colValue) {
                return <td></td>;
              }

              if (colValue.type === 'cat') {
                component = <Cat value={colValue.value} />;
              } else if (colValue.type === 'color') {
                component = <ColorItem locale={locale} {...colValue} />;
              } else {
                component = <span>{colValue.value}</span>;
              }

              return <td key={colIndex}>{component}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Color;
