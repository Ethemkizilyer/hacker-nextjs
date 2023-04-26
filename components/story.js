import timeAgo from '@/lib/time-ago';
import Link from 'next/link'
import React from 'react'
import parse from "url-parse"
import styles from "../styles/story.module.scss"
const Story = ({
    id,title,date,url=null,user,score,commentsCount=0
}) => {
  const pluralCommentCount=(count,s)=>s+ (count === 0 || count > 1 ? "s" : "")

  const {host}= parse(url)

  return (
    <div className={styles.story}>
      <div className={styles.title}>
        {url ? (
          <a href={url}>{title}</a>
        ) : (
          <Link href={`/item/${id}`} legacyBehavior>
            <a>{title}</a>
          </Link>
        )}
        {url && (
          <span className={styles.source}>
            <a href={`http://${host}`}>{host.name.replace(/^www\./, "")}</a>
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <span className={styles.point}>{score} points</span>
        <Link legacyBehavior href={`/user?id=${id}`}>
          <a>User :{user}</a>
        </Link>
        <Link legacyBehavior href={`/items/${id}`} className={styles.timeAgo}>
          <a>{date && timeAgo(new Date(date))} ago</a>
        </Link>
        {!!commentsCount && (
          <Link href={`/items/${id}`} className={styles.commentsCount} legacyBehavior>
            <a>
              {commentsCount} {pluralCommentCount(commentsCount, "comment")}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Story