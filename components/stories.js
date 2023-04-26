import Link from 'next/link'
import React from 'react'

const Stories = ({
    page=1,
    stories,
    offset=null,
    morePath = "news",
    showMoreButton
}) => {
  return (
    <div>
        {stories && stories.map((story,i)=>{
            return (
                <div className="item" key={story.id}>
                    {
                        offset !== null ? (
                            <>
                            <span className='count'>
                                {offset + i + 1}
                            </span>
                            </>
                        ):null
                    }
                    {/* <Story/> */}
                </div>
            )
        })}
        <footer>
            {showMoreButton && (
                <Link href={`/${morePath}/${page+1}`}>
                    <a>More</a>
                </Link>
            )}
        </footer>
    </div>
  )
}

export default Stories