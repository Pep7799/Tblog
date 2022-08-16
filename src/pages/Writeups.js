import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import client from '../client'

export default function Writeups() {
const [posts, setPosts] = useState([])

useEffect(() => {
  client.fetch(
    `*[_type == "post"]{
      title,
      slug,
      body,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
  ).then((data)=> setPosts(data)).catch(console.error)

}, [])

  return (
    <section className='writeups'>
    <div>
        <h3>Writeups page</h3> 
        <h4>You are viewing {posts.length} posts</h4>       
    </div>
    <div className='grid'>
      {posts.map((post)=>(
       
        <article key={post.slug.current}>
          
          <img className='images' width="auto" src={post.mainImage.asset.url} alt={post.title} />
         
          <h5>{post.title}</h5>
          <div className='btn'>
          <Link  to={`/writeups/${post.slug.current}` }> <button> Read All </button></Link>
          </div>
        </article>
      ))}
    </div>
    </section>
  )
}
