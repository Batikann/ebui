import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

//Buton elementimizin 2 değer alıcağını belirttik.
export const Button = ({ type, text }) => {
  //Burada bir buton elementi oluşturduk ve style tanımlamasının gelen type değerine göre olacağını belirttik default olarak da btn classını ekledik.
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}
