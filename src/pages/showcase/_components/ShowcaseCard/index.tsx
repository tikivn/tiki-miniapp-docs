/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import FavoriteIcon from "@site/src/components/svgIcons/FavoriteIcon";
import Tooltip from "../ShowcaseTooltip";
import { Tags, TagList, TagType, User, Tag } from "@site/src/data/users";
import { sortBy } from "@site/src/utils/jsUtils";

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

const ShowcaseCard = memo(({ user, id }: { user: User }) => (
  <li key={user.title} className={`card shadow--md ${styles.cardShowCase}`}>
    <div className={clsx("card__image", styles.showcaseCardImage)}>
      <img src={user.preview} alt={user.title} />
    </div>
    <div className="card__body">
      <div className={clsx(styles.showcaseCardHeader)}>
        <h4 className={styles.showcaseCardTitle}>
          <Link href={`/showcase/details#${id}`} className={styles.showcaseCardLink}>
            {user.title}
          </Link>
        </h4>
        {user.tags.includes("favorite") && (
          <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
        )}
        <Link
          href={`/showcase/details#${id}`}
          className={clsx(
            "button button--secondary button--sm",
            styles.showcaseCardSrcBtn
          )}
        >
          details
        </Link>
      </div>
      <p className={styles.showcaseCardBody}>{user.description}</p>
    </div>
    <ul className={clsx("card__footer", styles.cardFooter)}>
      <ShowcaseCardTag tags={user.tags} />
    </ul>
  </li>
));

export default ShowcaseCard;
