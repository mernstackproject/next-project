import React from 'react'
import PostList from './PostList'
const Page =  async () => {
  let  post = []
  try{
    const data =   await fetch("https://jsonplaceholder.typicode.com/posts")
    const postData  =  await data.json()
  post = postData
  }catch(e){
  throw e
  }
  return (
    
   
    <PostList post={post} />

  )
}
export default Page
