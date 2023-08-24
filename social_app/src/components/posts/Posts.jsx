import React from 'react'
import "./Posts.css"
import { PostsData } from '../../Data/PostData'
import Post from '../post/Post'

const Posts = () => {
  return (
    <>
      <div className="Posts">
          {PostsData.map((post , id ,indx) => {
             return <Post data={post} id={id} key={indx}/>
          })}
      </div>
    </>
  )
}

export default Posts