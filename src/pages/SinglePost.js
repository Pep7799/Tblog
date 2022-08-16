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
    <div className='pre'>
      {isLoading ? (<h1>Loading...</h1>) : (
        
      <section>
        <h1>{singlePosts.title}</h1>
        {singlePosts.mainImage && singlePosts.mainImage.asset && (
        
        <img src={singlePosts.mainImage.asset.url} alt={singlePosts.title} title = {singlePosts.title}/>
        )}
        <div>
          <BlockContent blocks = {singlePosts.body} projectId = "dse9agn3" dataset = "production"/>
        </div>
        <p>Tosin writes</p>
        <Link to = '/writeups'><button>Other writeups</button></Link>
      </section>
  

      )}
     
    </div>
  )
}
