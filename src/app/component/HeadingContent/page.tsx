import React from 'react'
import style from './style.module.css'
interface HeadProps {
    heading: string;
    subHeading: string;
    para:string;

  }
const Heading:React.FC<HeadProps> = ({heading, subHeading , para}) => {
  return (
    <>
    <div className={`my-5 ${style.webHeading}`}>
        <h4>{subHeading}</h4>
        <h2>{heading}</h2>
        <p>{para}</p>
     </div>
    </>
  )
}

export default Heading