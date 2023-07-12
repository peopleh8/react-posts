import React, { useEffect, useState, useCallback, useMemo } from 'react'
import axios from 'axios'
import Title from '../components/UI/Title'
import PostList from '../components/PostList'
import ErrorTitle from '../components/UI/ErrorTitle'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import Dialog from '../components/UI/Dialog'
import Form from '../components/UI/Form'
import Select from './../components/UI/Select'
import Pagination from '../components/UI/Pagination'
import '../styles/Post.css'

const Posts = () => {
  const [ posts, setPosts ] = useState()
  const [ post, setPost ] = useState({
    title: '',
    body: '',
  })
  const [ pagination, setPagination ] = useState({
    limit: 10,
    page: 1,
    totalPages: 0,
  })
  const [ options, setOptions ] = useState({
    list: [
      {
        value: 'id',
        name: 'By id',
      },
      {
        value: 'title',
        name: 'By title',
      },
      {
        value: 'body',
        name: 'By body',
      },
    ],
    selected: ''
  })
  const [ isPostFetching, setPostFetching ] = useState(false)
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ isDialogShow, setDialogShow ] = useState(false)

  const fetchPosts = async () => {
    setPostFetching(true)
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: pagination.limit,
          _page: pagination.page,
        }
      })

      setPagination({...pagination, totalPages: Math.ceil(parseInt(response.headers['x-total-count']) / pagination.limit)})
      setPosts(response.data)
    } catch (e) {
      console.error(e.message)
    } finally {
      setPostFetching(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [pagination.page])

  const removePost = useCallback(id => {
    setPosts(prev => prev?.filter(post => post.id !== id))
  }, [posts])

  const searchedPosts = useMemo(() => {
    return posts?.filter(post => post.title?.toLowerCase().includes(searchQuery?.toLowerCase()))
  }, [posts, searchQuery])

  const searchedAndSortedPosts = useMemo(() => {
    return searchedPosts?.sort((a, b) => {
      if (typeof a[options.selected] === 'string') {
        return a[options.selected]?.localeCompare(b[options.selected])
      }
      
      return a[options.selected] - b[options.selected]
    })
  }, [posts, options.selected, searchQuery])


  const createPost = e => {
    e.preventDefault()

    if (post.title.trim() === '' || post.body.trim() === '') return

    setPosts(prev => [...prev, {...post, id: Date.now()}])
    setDialogShow(false)
    setPost({
      ...post,
      title: '',
      body: '',
    })
  }
  
  return (
    <div>
      <Title>Posts</Title>
      <Input 
        type="text" 
        placeholder='Search...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {
        isDialogShow && 
          <Dialog
            setDialogShow={setDialogShow}
          >
            <Form
              state={post}
              setSate={setPost}
              handler={createPost}
            />
          </Dialog>
      }
        
      <div className='post-controls'>
        <Select
          name='sort'
          options={options}
          setOptions={setOptions}
        />
        <Button 
          type='button'
          onClick={() => setDialogShow(true)}
        >
          Create post
        </Button>
      </div>
      {
        !isPostFetching
          ? <PostList 
              posts={searchedAndSortedPosts}
              removePost={removePost}
            />
          : <ErrorTitle>Loading...</ErrorTitle>
      }
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  )
}

export default Posts