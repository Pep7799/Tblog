import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import client from '../client' 
import BlockContent from '@sanity/block-content-to-react'

export default function SinglePost() {
  const [singlePosts, setSinglePosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {slug} = useParams()

  useEffect(() => {
    client
    .fetch(
      `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
       
      }`
    ).then ((data)=> setSinglePosts(data[0]))
    setIsLoading(false)
  }, [slug])


  
  return (
    <div className='singlepost'>
      {isLoading ? (<h1 title='loading'>Loading...</h1>) : (
        
      <section className='full'>
        <h1 className='title'>{singlePosts.title}</h1>
        {singlePosts.mainImage && singlePosts.mainImage.asset && (
         
        
        <img className='singleimage' src={singlePosts.mainImage.asset.url} alt={singlePosts.title} title = {singlePosts.title}/>
        )}
        <div>
          <BlockContent className="body" blocks = {singlePosts.body} projectId = "dse9agn3" dataset = "production"/>
        </div>
        <p className='author'>Tosin writes</p>
        <div className='singlebtn'>
         <Link to = '/writeups'><button className='btnbtnbtn'>Other writeups</button></Link>
        </div>
       
      </section>
  

      )}
     
    </div>
  )
}
