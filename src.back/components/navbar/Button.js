import React from 'react'
import style from './Button.module.css'
import { Link } from 'react-router-dom'
export function Button() {
    return (
        <Link to='sign-up'>
            <button className={style.btn}>Sign Up</button>
        </Link>
    )
}
