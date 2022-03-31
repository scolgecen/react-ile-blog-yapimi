import React from 'react'
import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import BlogList from '../../components/BlogList';
export default function Home() {

    const {data,yukleniyor,hata} = useFetch('http://localhost:3000/bloglar');
    console.log(data);

    return (
        <div>
            {hata && <p className='error'>{hata}</p>}
            {yukleniyor && <p className='loading'>Yükleniyor</p>}
            {data && <BlogList bloglar={data}/>}
        </div>
    )


}
