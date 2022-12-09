import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Blog.css"
import imgBlog from "./Screenshot_1.png"

const Blog = () => {
  return (
    <div className='Blog'>
        <Navbar />
        <div className='blog-header'>
            <div className='blog-head-left'>
                <h1>Блог</h1>
                <div className='blog-info'>
                <div className='blog-card'>
                        <h2>Банкоматот на Халк Банка на Ул. Непозната бр.112 е вратен во функција.</h2>
                        <h4>Објавено на: 09.12.2022</h4>
                    </div>
                    <div className='blog-card'>
                        <h2>Банкоматот на Охридска банка на Ул. Непозната бр.5 веќе подолго време не работи!</h2>
                        <h4>Објавено на: 08.24.2022</h4>
                    </div>
                    <div className='blog-card'>
                        <h2>Банкоматот на Халк Банка на Ул. Непозната бр.112 вечерва се запали и нема да биде во функција некое време.</h2>
                        <h4>Објавено на: 08.11.2022</h4>
                    </div>
                </div>
            </div>
            <div className='blog-head-right'>
                <img src={imgBlog} />
            </div>
        </div>
    </div>
  )
}

export default Blog