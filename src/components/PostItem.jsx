import React from 'react'
import '../styles/PostItem.css'
import Button from './UI/Button'

const PostItem = ({ id, title, body, removePost }) => {
  return (
    <div className='post-item'>
      <div className="post-info">
        <strong>Title:</strong> {title}
        <br />
        <strong>Body:</strong> {body}
      </div>
      <div className="post-btns">
        <Button
          to={`/posts/${id}`}
        >
          Open
        </Button>
        <Button 
          type='button'
          onClick={() => removePost(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

export default PostItem