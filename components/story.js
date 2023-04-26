import Link from 'next/link'
import React from 'react'

const Story = ({
    id,title,date,url=null,user,score,commentCount=0
}) => {
  return (
    <div className="story">
      <div className="title">
        {url ? (
          <a href={url}>{title}</a>
        ) : (
          <Link href={`/item/${id}`} legacyBehavior>
            <a>{title}</a>
          </Link>
        )}
        {
            url && (
                <span className="source">
                   <a href={`http://${host}`}>{host.name.replace(/^www\./, "")}</a> 
                </span>
            )
        }
      </div>
      <div className="meta">
        <span className="point">
          {score} points
        </span>
        <Link legacyBehavior href={`/user?id=${id}`}>
          <a>
            User :{user}
          </a>
        </Link>
        <Link legacyBehavior href={`/items/${id}`}>
          <a>
            {date && timeAgo(new Date(date))} ago
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Story