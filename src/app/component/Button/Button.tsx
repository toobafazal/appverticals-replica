import React from 'react';
import style from './style.module.css'

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={style.home_btn}>{label}</button>;
};

export default Button;
