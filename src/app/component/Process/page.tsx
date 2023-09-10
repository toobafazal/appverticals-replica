import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

const Process = () => {
  return (
    <>
    <section className={style.working}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="row">
                <div className="grid grid-cols-1">
                    <div className={style.process}>
                        <ul>
                            <li>
                                <div className={style.box}>
                                    <span>
                                        <Image src='/assets/img/process/ic-1.webp' alt='icon'
                                         width={53} height={53} />
                                    </span>
                                    <div className={style.content}>
                                        <h6>01. App Development Strategy</h6>
                                        <p>What we build is a reflection of the experience and expertise that our app development agency possesses. We have the vision to turn your idea into an app that speaks for itself.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.box}>
                                    <span>
                                        <Image src='/assets/img/process/ic-1.webp' alt='icon'
                                         width={53} height={53} />
                                    </span>
                                    <div className={style.content}>
                                        <h6>01. App Development Strategy</h6>
                                        <p>What we build is a reflection of the experience and expertise that our app development agency possesses. We have the vision to turn your idea into an app that speaks for itself.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.box}>
                                    <span>
                                        <Image src='/assets/img/process/ic-1.webp' alt='icon'
                                         width={53} height={53} />
                                    </span>
                                    <div className={style.content}>
                                        <h6>01. App Development Strategy</h6>
                                        <p>What we build is a reflection of the experience and expertise that our app development agency possesses. We have the vision to turn your idea into an app that speaks for itself.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.box}>
                                    <span>
                                        <Image src='/assets/img/process/ic-1.webp' alt='icon'
                                         width={53} height={53} />
                                    </span>
                                    <div className={style.content}>
                                        <h6>01. App Development Strategy</h6>
                                        <p>What we build is a reflection of the experience and expertise that our app development agency possesses. We have the vision to turn your idea into an app that speaks for itself.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.box}>
                                    <span>
                                        <Image src='/assets/img/process/ic-1.webp' alt='icon'
                                         width={53} height={53} />
                                    </span>
                                    <div className={style.content}>
                                        <h6>01. App Development Strategy</h6>
                                        <p>What we build is a reflection of the experience and expertise that our app development agency possesses. We have the vision to turn your idea into an app that speaks for itself.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.box}>
                                    <span>
                                        <Image src='/assets/img/process/ic-1.webp' alt='icon'
                                         width={53} height={53} />
                                    </span>
                                    <div className={style.content}>
                                        <h6>01. App Development Strategy</h6>
                                        <p>What we build is a reflection of the experience and expertise that our app development agency possesses. We have the vision to turn your idea into an app that speaks for itself.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Process