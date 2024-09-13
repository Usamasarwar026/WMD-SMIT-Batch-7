import React from 'react'
import {tagdata} from '../../constant/Tagsdata'

function Tags() {
  return (
    <>
      <div className="tags">

        <h2 className="h2">Tags</h2>

        <div className="wrapper">

          {tagdata.map((item, index) => {
            return <button className="hashtag">{item}</button>
          })}



        </div>

      </div>
    </>
  )
}

export default Tags
