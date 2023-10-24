import React from 'react'
import './ButtonComponent.css'

//CSS Modules
import styles from './MisEstilos.module.css'

const ButtonComponent = () => {
    const isRed = false;
    return (
    //CSS Modules
    <button className={isRed ? styles.redColor : styles.blueColor}>ButtonComponent</button>
    // <button className="miboton">ButtonComponent</button> //Estilos css
  )
}

export default ButtonComponent