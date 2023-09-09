'use client'
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

interface sliderProps {
    bg: any;
    img: any;
    para: string;

}

const CaseStudies: React.FC<sliderProps> = ({ bg, img, para }) => {
   ;

    return (
        <>
            <section className={style.caseStudies}>
                <div className="container p-0">
                   
                            <div
                                style={{
                                    background: `url(${bg})`
                                    ,backgroundSize: 'cover'
                                }}
                                className={style.slide}
                            >

                                <Image src={img} alt='logo' width={200} height={120} />
                                <p>{para}</p>
                                <div className='flex gap-5 pt-12'>
                                    <Image src={'/assets/img/crousel/google.webp'} alt='google btn' width={140} height={41} />
                                    <Image src={'/assets/img/crousel/apple.webp'} alt='google btn' width={140} height={41} />
                                </div>
                            </div>

                </div>
            </section>
        </>
    )
}

export default CaseStudies