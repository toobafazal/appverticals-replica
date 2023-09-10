import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

const TestimonialCard = () => {
  return (
    <>
        <div className={style.box}>
            <div className={style.content}>
            <h4>Works Efficiently</h4>
            <p>Hi, I am Bilal Sabara. I am the owner of Bioshield Cleaning Services. I want to thanks AppVerticals…</p>
            <Link href='#' className={style.ref}> 
                <Image src='/assets/img/enqueue/upcity-logo.webp'  alt='icon' width={30} height={30}/>
                Score 5.0
            </Link>
            <div className={style.details}>
            <Link href='#' className={style.ref}> 
                <Image src='/assets/img/enqueue/dummy.webp'  alt='icon' width={50} height={50}/>
                <h5>Jasmine Sadr</h5>
            </Link>  
            </div>
            </div>
        </div>
    </>
  )
}

export default TestimonialCard