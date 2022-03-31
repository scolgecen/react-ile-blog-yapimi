import React ,  { useState,useRef,useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
import './Create.css'

export default function Create() {

    const { postData, data, error } = useFetch('http://localhost:3000/bloglar', 'POST')

    const [baslik,setBaslik]                    = useState('');
    const [icerik,setIcerik]                    = useState('');
    const [okunmaSuresi,setOkunmasuresi]        = useState('');
    const [yeniKategori,setYeniKategori]        = useState('');
    const [kategoriler,setkategoriler]          =useState([]);
    const kategoriInput = useRef(null);

    const history = useHistory();

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(baslik,kategoriler,icerik,okunmaSuresi);
        //alert("tamam hacı abi");
        postData({ baslik, kategoriler, icerik, okunmaSuresi: okunmaSuresi + ' dakika' })
    }
    const handleAdd = (e) =>{
        e.preventDefault();
        const yKat=yeniKategori.trim();
        if(yKat && !kategoriler.includes(yKat)){
            setkategoriler(oKat=>[...oKat,yeniKategori])
        }
        setYeniKategori('')
        kategoriInput.current.focus()
    }
    useEffect(()=>{
        if(data){
            history.push('/')
        }
    },[data])

    return (
     <div className='create'>
         <h2 className='page-title'>Yeni Yazı Oluştur</h2>
         <form onSubmit={handleSubmit}> 
            <label>
                <span>Yazı Başlık : </span>
                <input type="text" onChange={(e)=>setBaslik(e.target.value)} value={baslik} required/>
            </label>
            <label>
                <span>Yazı Kategorileri</span>
                <div className='categories'>
                <input 
                    type="text" 
                    onChange={(e) => setYeniKategori(e.target.value)}
                    value={yeniKategori}
                    ref={kategoriInput}
                    />
                    <button className='btnAdd btn' onClick={handleAdd}>Ekle</button>
                </div>
            </label>

            <p>kategoriler : <span>{kategoriler.map(i=><em key={i}>{i},</em>)}</span></p>

            <label>
                <span>Yazı İçerik : </span>
                <textarea rows={5} onChange={(e)=>setIcerik(e.target.value)} value={icerik} required></textarea>
            </label>

            <label>
                <span>Okunma süresi : </span>
                <input min={0} type="number" onChange={(e)=>setOkunmasuresi(e.target.value) } required value={okunmaSuresi} />
            </label>
            <button  className='btn'>Oluştur</button>
         </form>
     </div>
     )
}
