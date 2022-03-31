import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import BlogList from '../../components/BlogList'
import './Search.css'

 const Search =() => {
  
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  console.log(query);
  const url = 'http://localhost:3000/bloglar?q=' + query
  const { hata, yukleniyor, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Aranan Kelime "{query}"</h2>
      {hata && <p className="error">{hata}</p>}
      {yukleniyor && <p className="loading">Yükleniyor...</p>}
      {data && <BlogList bloglar={data} />}
    </div>
  )
}


export default Search