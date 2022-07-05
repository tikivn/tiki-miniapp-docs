import React, {memo, useState, useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import styles from './index.module.css';
import Thumb from '../svgIcons/Thumb';

const FEEDBACK_STATUS = {
  NONE: 'NONE',
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE',
};

export const Feedback = ({className, ...rest}) => {
  const [feedbackStatus, setFeedbackStatus] = useState(FEEDBACK_STATUS.NONE);
  const {pathname} = useLocation();

  const sendFeedback = useCallback(value => {
    if (typeof ga !== 'function') return;

    const args = {
      command: 'send',
      hitType: 'event',
      category: 'feedback',
      action: 'click',
      label: pathname,
      value: value,
    };

    ga(
      args.command,
      args.hitType,
      args.category,
      args.action,
      args.label,
      args.value,
    );
  }, []);

  const handleLike = useCallback(() => {
    setFeedbackStatus(FEEDBACK_STATUS.LIKE);
    sendFeedback(1);
  }, []);

  const handleDislike = useCallback(() => {
    setFeedbackStatus(FEEDBACK_STATUS.DISLIKE);
    sendFeedback(0);
  }, []);

  return (
    <div className={`${styles.feedback} ${className}`} {...rest}>
      {feedbackStatus === FEEDBACK_STATUS.NONE && (
        <>
          <span className={styles.question}>
            Bài viết này có hữu ích với bạn?
          </span>
          <div className={styles.thumbs}>
            <Thumb className={styles.like} onClick={handleLike} />
            <Thumb className={styles.dislike} onClick={handleDislike} />
          </div>
        </>
      )}

      {feedbackStatus === FEEDBACK_STATUS.LIKE && (
        <span className={styles.reply}>Cám ơn bạn đã đánh giá.</span>
      )}

      {feedbackStatus === FEEDBACK_STATUS.DISLIKE && (
        <span className={styles.reply}>
          <div>Xin lỗi vì chất lượng bài viết không như mong đợi.</div>
          <div>
            {`Bạn có thể giành chút thời gian gửi ý kiến đóng trên trang `}
            <a target="_blank" href="https://community.tiki.vn/c/site-feedback">
              Cộng đồng của Tini App
            </a>
            {` không ?`}
          </div>
        </span>
      )}
    </div>
  );
};

export default memo(Feedback);