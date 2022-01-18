import React from 'react'
import style from './Button.module.css'
import { Link } from 'react-router-dom'
export function Button() {
    return (
        <Link to='/register'>
            <button className={style.btn}>Sign Up</button>
        </Link>
    )
}
