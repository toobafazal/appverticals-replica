import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

const Enqueue = () => {
  return (
    <>
      <section className={style.enqueue}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={style.industry}>
            <div>
              <Image src='/assets/img/enqueue/enqueue.webp' alt="mobile"
                width={1000} height={1000} />
            </div>
            <div>
              <ul>
                <li className=''>
                  <div className={style.box}>
                    <Image src='/assets/img/enqueue/education.webp' alt="mobile"
                      width={100} height={100} />
                  </div>
                  <div className={style.content}>
                    <h4>Education</h4>
                    <p>As a USA's leading app Development Company we provide the best digital solutions for schools, colleges, and universities.</p>
                  </div>
                </li>
                <li className=''>
                  <div className={style.box}>
                    <Image src='/assets/img/enqueue/education.webp' alt="mobile"
                      width={100} height={100} />
                  </div>
                  <div className={style.content}>
                    <h4>Education</h4>
                    <p>As a USA's leading app Development Company we provide the best digital solutions for schools, colleges, and universities.</p>
                  </div>
                </li>
                <li className=''>
                  <div className={style.box}>
                    <Image src='/assets/img/enqueue/education.webp' alt="mobile"
                      width={100} height={100} />
                  </div>
                  <div className={style.content}>
                    <h4>Education</h4>
                    <p>As a USA's leading app Development Company we provide the best digital solutions for schools, colleges, and universities.</p>
                  </div>
                </li>
                <li className=''>
                  <div className={style.box}>
                    <Image src='/assets/img/enqueue/education.webp' alt="mobile"
                      width={100} height={100} />
                  </div>
                  <div className={style.content}>
                    <h4>Education</h4>
                    <p>As a USA's leading app Development Company we provide the best digital solutions for schools, colleges, and universities.</p>
                  </div>
                </li>
                <li className=''>
                  <div className={style.box}>
                    <Image src='/assets/img/enqueue/education.webp' alt="mobile"
                      width={100} height={100} />
                  </div>
                  <div className={style.content}>
                    <h4>Education</h4>
                    <p>As a USA's leading app Development Company we provide the best digital solutions for schools, colleges, and universities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Enqueue