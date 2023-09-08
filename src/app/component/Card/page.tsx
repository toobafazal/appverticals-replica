import React from 'react'
import style from './style.module.css'

interface CardProps {
  label: string;
  paragraph: string;
  img: any;
  icon: any;
  overlayCard: string;
}

const Card: React.FC<CardProps> = ({ label, paragraph, img, icon, overlayCard }) => {
  return (
    <>
      <div className={style.homeCard}>
        <div className={style.cardProduct}>
          <h1>{label}</h1>
          <p>{paragraph}</p>
          <img src={img} className={style.homeImg} alt="icon" />
        </div>
        <div className={style.cardOverlay}>
          <img src={icon} alt="" />
          <p>{overlayCard}</p>
        </div>
      </div>

    </>
  )
}

export default Card