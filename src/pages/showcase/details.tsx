import React from 'react';
import ReactMarkdown from 'react-markdown'
import GitUrlParse from 'parse-git-url';
import Layout from '@theme/Layout';
import NotFound from '@theme/NotFound';
import GithubIcon from '@site/src/components/svgIcons/GithubIcon';
import NpmIcon from '@site/src/components/svgIcons/NpmIcon';
import Tooltip from "./_components/ShowcaseTooltip";
import {sortedUsers, Tags, TagList, TagType, Tag} from '@site/src/data/users';
import { sortBy } from "@site/src/utils/jsUtils";
import styles from './details.module.css';
import rehypeRaw from 'rehype-raw'
import {useLocation} from '@docusaurus/router';

const TITLE = 'Code Market';
const DESCRIPTION = 'List of open source apps and components people are building with TiniApp';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({ label, color, description }, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  )
);

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}
          >
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function ShowcaseDetails({ readme, gitBaseUrl, details }) {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container">
        <nav aria-label="breadcrumbs--sm">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="/showcase">
                Showcases
              </a>
            </li>
            <li className="breadcrumbs__item breadcrumbs__item--active">
              <a className="breadcrumbs__link" href="#">
                Details
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.baseContainer}>
          <h1 className={styles.baseTitle}>{details.title}</h1>
          <ShowcaseCardTag tags={details.tags} />
          <div className={styles.baseDesc}>
            {details.description}
          </div>
          {/* <div className={styles.baseStatus}>
            <span>
              Updated date: 2021-11-11
            </span>
            <span>
              Current version: 1.0.0
            </span>
          </div> */}
          {details.npm && (
            <div className={styles.baseLink}>
              <NpmIcon />
              <a href={details.npm} target="_blank" rel="noopener noreferrer">{details.npm}</a>
            </div>
          )}
          <div className={styles.baseLink}>
            <GithubIcon />
            <a href={details.source} target="_blank" rel="noopener noreferrer">{details.source}</a>
          </div>
          {details.app && (
            <div className={styles.baseBtns}>
              <a className="button button--primary" href={details.app} target="_blank">Mở ứng dụng</a>
              <div><span>(Hoặc scan mã QR)</span></div>
            </div>
          )}
        </div>
        <div className={`margin-top--md ${styles.contentContainer}`}>
          <div className={`row ${styles.markdownBody}`} id="markdownBody">
            <div className="col col--9">
              <ReactMarkdown children={readme} components={{
                  img: ({ node, ...props }) => {
                    const { src, alt } = props;
                    if (src === details.preview) {
                      return null;
                    }

                    if (src.startsWith('http')) {
                      return <img src={src} alt={alt} />
                    }
                    return <img src={`${gitBaseUrl}/${src}`} alt={alt} />
                  },
                  a: ({ node, ...props }) => {
                    const { href, children } = props;
                    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
                  }
                }}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
            <div className={`col col--3 ${styles.cover}`}>
              <img src={details.preview} alt="cover picture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase(): JSX.Element {
  const location = useLocation();
  const id = location.hash.slice(1);
  const details = sortedUsers[id];

  const [readme, setReadme] = React.useState(null);
  const [gitBaseUrl, setGitBaseUrl] = React.useState('');

  React.useEffect(() => {
    if (details) {
      const { source } = details;
      const gitInfo = GitUrlParse(source);
      const { name, owner, subdir } = gitInfo;
      const gitBaseAPI = `https://api.github.com/repos/${owner}/${name}/contents${subdir.length ? `/${subdir}` : ''}`;
      const gitBaseRaw = localStorage.getItem(gitBaseAPI);
      // git api has limit, so we prefer raw content
      if (gitBaseRaw) {
        setGitBaseUrl(gitBaseRaw);
        fetch(`${gitBaseRaw}/README.md`).then(async (res) => {
          setReadme(await res.text());
        });
      } else {
        fetch(`${gitBaseAPI}/README.md`)
          .then(async (res) => {
            const { content, encoding, download_url } = await res.json();
            const gitBaseRaw = download_url.replace('/README.md', '')
            setGitBaseUrl(gitBaseRaw);
            localStorage.setItem(gitBaseAPI, gitBaseRaw);
            if (encoding === 'base64') {
              const encodedContent = atob(content);
              const bytes = Uint8Array.from(encodedContent, c => c.charCodeAt(0));
              const decoder = new TextDecoder();
              setReadme(decoder.decode(bytes));
            }
          });
      }
    }
  }, []);

  if (!details) {
    return <NotFound />
  }

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseDetails readme={readme} gitBaseUrl={gitBaseUrl} details={details} />
      </main>
    </Layout>
  );
}

export default Showcase;
