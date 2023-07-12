import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Post from './../pages/Post'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<Post />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router