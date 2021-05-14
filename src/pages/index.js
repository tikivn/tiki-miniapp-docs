import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DevCenterSVG from '@site/static/img/dev-center.svg';
import ToolSVG from '@site/static/img/tool.svg';
import AppSVG from '@site/static/img/app.svg';
import ServiceSVG from '@site/static/img/service.svg';
import DevAssistantSVG from '@site/static/img/dev-assistant.svg';
import RegisterSVG from '@site/static/img/register.svg';
import ArrowRightSVG from '@site/static/img/arrow-right.svg';
import FrameworkSVG from '@site/static/img/framework.svg';
import TinySVG from '@site/static/img/tiny.svg';
import IdeSVG from '@site/static/img/ide.svg';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
          <h1 className={styles.title}>Xây dựng ứng dụng cùng Tini Apps</h1>
          <p className={styles.heroText}>
            Phát triển ứng dụng đa nền tảng nhanh chóng và tiện lợi thông qua
            các công cụ được xây dựng sẵn của Tiki MiniApp.
          </p>
          <div className={styles.flexButtons}>
            <Link to="#" className={[styles.secondaryButton]}>
              Tải về Tini Studio
            </Link>
            <Link
              to="docs/developer/introduce/register"
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

function WhatIsTinyAp() {
  return (
    <div className={styles.left50}>
      <h3 className={styles.headText}>Tini Apps là gì?</h3>
      <p className={styles.tinyText}>
        Tini Apps là giải pháp hoàn toàn mới và hiện đại giúp cho các đối tác
        của Tiki có thể dễ dàng, nhanh chóng và ít tốn kém phát triển ứng dụng
        và dịch vụ của mình trên nền tảng của Tiki. Nhờ đó các doanh nghiệp có
        thể tập trung vào dịch vụ cốt lõi và mang tới sản phẩm tốt nhất cho
        khách hàng, trong khi vẫn thừa hưởng được tất cả lợi ích của việc chuyển
        đổi số.
        <br />
        <br />
        Chương trình MiniApp của Tiki đi kèm với hệ thống framework đơn giản,
        hiệu quả với đa dạng các thành phần giao diện cũng như APIs cần thiết
        trong việc phát triển đa dạng ứng dụng cùng trải nghiệm native trên
        Tiki.
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
        <Link className={styles.linkBrand} to="/docs/developer/getting-started">
          Tìm hiểu thêm
        </Link>
      </div>
      <RegisterSVG />
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
            ứng dụng với trải nghiệm native app trên nền tàng Tiki một cách dễ
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

function Tiny() {
  return (
    <div className={styles.block}>
      <div className="head">Dành cho nhà thiết kế sản phẩm</div>
      <TinySVG className={styles.svgCenter} />
      <h3 className={styles.headText}>Tiny Design System</h3>
      <p className={styles.gray}>
        Nhóm thiết kế Tini đã xây dựng nên hệ thống thiết kế dành riêng cho nền
        tảng Tini Apps dựa trên hệ thống thiết kế gốc từ Tiki với tên gọi là
        Tiny. Hệ thống thiết kế Tiny sẽ giúp các nhà thiết kế sản phẩm thống
        nhất về giao diện người dùng để tập trung vào trải nghiệm người dùng tốt
        hơn, cung cấp ý tưởng và sản phẩm nhanh hơn.
      </p>
      {[
        ['Tìm hiểu về Tiny', '/docs/design/overview'],
        ['Tiny Figma', '/docs/design/figma/download'],
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
        Apps. Công cụ này cung cấp các tính năng như quản lý mini app, phát
        triển, trình giả lập, debug, và upload app lên Tini Developer Center.
      </p>
      {[
        ['Tìm hiểu công cụ cho nhà phát triển', '/docs/studio/overview'],
        ['Tini Studio', '/docs/studio/overview'],
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
          src={useBaseUrl('/img/illustration.png')}
        />
      </div>

      <div className={styles.mainContent}>
        <WhatIsTinyAp />
      </div>
      <div className={styles.bgGray}>
        <BecomeDeveloper />
        <Framework />

        <div className={styles.blockRow}>
          <Tiny />
          <Studio />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Layout title="Tini App" description="Tini App">
      <Hero />
      <main>
        <Content />
      </main>
    </Layout>
  );
}
