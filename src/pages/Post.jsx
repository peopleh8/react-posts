import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Title from './../components/UI/Title'
import ErrorTitle from '../components/UI/ErrorTitle'

const Post = () => {
  const params = useParams()

  const [ post, setPost ] = useState({})
  const [ isPostFetching, setPostFetching ] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      setPostFetching(true)
      
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

        setPost(data)
      } catch (e) {
        console.error(e.message)
      } finally {
        setPostFetching(false)
      }
    }

    fetchPost()
  }, [])

  return (
    <div>
      <Title>Post with id - {params.id}</Title>
      {
        !isPostFetching
          ? <>
              <strong>Title: </strong> {post.title}
              <br />
              <strong>Body: </strong> {post.body}   
            </>
          : <ErrorTitle>Loading...</ErrorTitle>
      }
    </div>
  )
}

export default Post