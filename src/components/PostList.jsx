import React from 'react'
import PostItem from './PostItem'
import ErrorTitle from './UI/ErrorTitle'

const PostList = ({ posts, removePost }) => {
  return (
    <div className='post-list'>
      { 
        posts && posts.length > 0 
          ? posts.map(post => <PostItem 
              key={post.id} 
              id={post.id} 
              title={post.title} 
              body={post.body} 
              removePost={removePost}
            />)
          : <ErrorTitle>Post list is empty</ErrorTitle>
      }
    </div>
  )
}

export default PostList