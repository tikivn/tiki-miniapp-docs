import React, {useEffect, useCallback, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import ArrowRightSVG from '@site/static/img/arrow-right.svg';
import DevCenterSVG from '../components/svgIcons/DevCenter';
import ToolSVG from '../components/svgIcons/Tool';
import AppSVG from '../components/svgIcons/App';
import ServiceSVG from '../components/svgIcons/Service';
import DevAssistantSVG from '../components/svgIcons/DevAssistant';
import IdeSVG from '../components/svgIcons/Ide';
import FrameworkSVG from '../components/svgIcons/Framework';
import TiniSVG from '../components/svgIcons/Tini';
import styles from './index.module.scss';

function RowItem({text, url}) {
  return (
    <Link className={styles.rowItem} to={url}>
      <span>{text}</span>
      <ArrowRightSVG />
    </Link>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Xây dựng ứng dụng cùng Tini App</h1>
          <p className={styles.heroText}>
            Phát triển ứng dụng đa nền tảng nhanh chóng và tiện lợi thông qua
            các công cụ được xây dựng sẵn của Tiki Tini App.
          </p>
          <div className={styles.flexButtons}>
            <Link
              to="/downloads"
              className={[styles.secondaryButton]}
              id="btnDownload">
              Tải về Tini Studio
            </Link>
            <Link
              to="docs/introduce/register"
              className={[styles.primaryButton]}>
              Đăng ký nhà phát triển
            </Link>
          </div>
        </div>

        <div className={styles.roundContainer}>
          <div className={[styles.roundLine, styles.roundLineTop].join(' ')}>
            <DevCenterSVG />
            <ToolSVG />
          </div>
          <div className={styles.round} />
          <div className={styles.roundCenter}>
            <AppSVG />
          </div>
          <div className={[styles.roundLine, styles.roundLineBottom].join(' ')}>
            <ServiceSVG />
            <DevAssistantSVG />
          </div>
        </div>
      </div>
      {/* <div className={styles.background}></div> */}
      <div className={styles.ellipse}></div>
    </header>
  );
}

function Banner({images = [], className}) {
  const [viewportRef, embla] = useEmblaCarousel({loop: true}, [Autoplay()]);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollTo = useCallback(
    index => embla && embla.scrollTo(index),
    [embla],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={`${className} ${styles.banner}`}>
      <div className="embla" ref={viewportRef}>
        <div className="embla__container">
          {images.map(item => (
            <div className="embla__slide" key={item.link}>
              <Link to={item.link}>
                <img style={{width: '100%'}} src={item.image} alt="Tini App" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${
              index === selectedIndex ? 'is-selected' : ''
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

function WhatIsTiniAp() {
  return (
    <div className={styles.left50}>
      <h3 className={styles.headText}>Tini App là gì?</h3>
      <p className={styles.tiniText}>
        Tini App là giải pháp hoàn toàn mới và hiện đại giúp cho các đối tác của
        Tiki có thể dễ dàng, nhanh chóng và ít tốn kém phát triển ứng dụng và
        dịch vụ của mình trên nền tảng của Tiki. Nhờ đó các doanh nghiệp có thể
        tập trung vào dịch vụ cốt lõi và mang tới sản phẩm tốt nhất cho khách
        hàng, trong khi vẫn thừa hưởng được tất cả lợi ích của việc chuyển đổi
        số.
        <br />
        <br />
        Công nghệ Tini App của Tiki đi kèm với hệ thống framework đơn giản, hiệu
        quả với đa dạng các thành phần giao diện cũng như APIs cần thiết trong
        việc phát triển ứng dụng cùng trải nghiệm native trên Tiki.
      </p>
    </div>
  );
}

function BecomeDeveloper() {
  return (
    <div className={styles.becomeDeveloper}>
      <div className={styles.left50}>
        <h3 className={styles.headText}>Trở thành Nhà phát triển</h3>
        <p className={styles.gray}>
          Đăng ký trở thành Nhà phát triển để phát triển ứng dụng đa nền tảng và
          đưa sản phẩm của bạn đến hơn 10 triệu người dùng của Tiki.
        </p>
        <Link className={styles.linkBrand} to="/docs/introduce/register">
          Tìm hiểu thêm
        </Link>
      </div>
      <img src={useBaseUrl('/img/register.svg')} alt="Register" />
      {/* <RegisterSVG /> */}
    </div>
  );
}

function Framework() {
  return (
    <div className={styles.framework}>
      <div className={styles.frameworkContent}>
        <div>
          <h3 className={styles.headText}>Tini Framework</h3>
          <p className={styles.gray}>
            Tini Framework được thiết kế để cho phép các nhà phát triển xây dựng
            ứng dụng với trải nghiệm native app trên nền tảng Tiki một cách dễ
            dàng và đa dạng tính năng nhất có thể.
          </p>
          {[
            ['Tìm hiểu về Tini Framework', '/docs/framework/overview'],
            ['Tìm hiểu về hệ thống UI Components', '/docs/component/overview'],
            ['Tìm hiểu về hệ thống JSAPIs', '/docs/api/overview'],
          ].map((item, index) => (
            <RowItem key={index} text={item[0]} url={item[1]} />
          ))}
        </div>
        <span className={styles.frameworkSvg}>
          <FrameworkSVG />
        </span>
      </div>
    </div>
  );
}

function Tini() {
  return (
    <div className={styles.block}>
      <div className="head">Dành cho nhà thiết kế sản phẩm</div>
      <TiniSVG className={styles.svgCenter} />
      <h3 className={styles.headText}>Tini Design System</h3>
      <p className={styles.gray}>
        Đội ngũ thiết kế Tiki đã xây dựng nên hệ thống thiết kế dành riêng cho
        nền tảng Tini App dựa trên hệ thống thiết kế gốc từ Tiki. Hệ thống thiết
        kế Tini sẽ giúp các nhà thiết kế sản phẩm thống nhất về giao diện người
        dùng để tập trung vào trải nghiệm người dùng tốt hơn, cung cấp ý tưởng
        và sản phẩm nhanh hơn.
      </p>
      {[
        ['Tìm hiểu về Tini', '/docs/design/overview'],
        [
          'Tini Figma',
          'https://www.figma.com/community/file/958198956095698455/Tini-design-system',
        ],
      ].map((item, index) => (
        <RowItem key={index} text={item[0]} url={item[1]} />
      ))}
    </div>
  );
}

function Studio() {
  return (
    <div className={styles.block}>
      <div className="head">Dành cho nhà phát triển sản phẩm</div>
      <IdeSVG className={styles.svgCenter} />
      <h3 className={styles.headText}>Tini Studio</h3>
      <p className={styles.gray}>
        Tini Studio là công cụ dùng để phát triển mini app trên nền tảng Tini
        App. Công cụ này cung cấp các tính năng như quản lý, phát triển app, giả
        lập thiết bị, debug, và tải app lên Tiki Developer Center.
      </p>
      {[
        [
          'Tìm hiểu công cụ cho nhà phát triển',
          '/docs/introduce/getting-started',
        ],
        ['Tini Studio', '/docs/development/studio/overview'],
      ].map((item, index) => (
        <RowItem key={index} text={item[0]} url={item[1]} />
      ))}
    </div>
  );
}

function Content() {
  return (
    <>
      <div className={styles.mainContent}>
        <img
          className={styles.illustration}
          src={useBaseUrl('/img/tiniapp-ecosystem.png')}
        />
      </div>

      <div className={styles.mainContent}>
        <WhatIsTiniAp />
      </div>
      <div className={styles.bgGray}>
        <BecomeDeveloper />
        <Framework />

        <div className={styles.blockRow}>
          <Tini />
          <Studio />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Layout title="Tini App" description="Tini App">
      <Banner
        className="banner-desktop"
        images={[
          {
            image:
              'https://salt.tikicdn.com/ts/tiniapp/46/9d/43/beff6daac7df4d6c889f35d1a2f54366.jpeg',
            link: 'https://hackathon.tiki.vn',
          },
          {
            image:
              'https://salt.tikicdn.com/ts/tiniapp/1a/de/6a/7dbe2bab9315f8ac92068d50afc6d473.jpg',
            link: '/docs/introduce/register',
          },
        ]}
      />
      <Banner
        className="banner-mobile"
        images={[
          {
            image:
              'https://salt.tikicdn.com/ts/tiniapp/a7/4c/d4/74439a87ca5e7277c58ccbc86c50130b.jpeg',
            link: 'https://hackathon.tiki.vn',
          },
        ]}
      />
      {/* <Hero /> */}
      <main>
        <Content />
      </main>
    </Layout>
  );
}
