import React from 'react'
import './BlogList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function BlogList({bloglar}) {
  const {mode} = useTheme();
if (bloglar.length === 0) {
	return <div className="error">Aranan yazı bulunamadı</div>
}
  return (
    <div className='blog-list'>
        {
            bloglar.map(blog=>(
                //<h2 key={blog.id}>{blog.baslik}</h2>
                <div key={blog.id} className={`card ${mode}`}>
                    <h3>{blog.baslik}</h3>
                    <p className='sure'>{blog.okunmaSuresi}</p>
                    <div className='icerik'>{blog.icerik.substring(0,200)}...</div>
                    <Link to={`/blog/${blog.id}`} className="btn">Daha Fazla oku</Link>
                </div>
            ))
        }
    </div>
  )
}
