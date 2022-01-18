import React from 'react';
import css from './Header.module.css';

export default function Header() {
    return (
       <span className={css.header} onClick={()=>window.scroll(0,0)}> 🎬 Entertainment Hub 🎥</span>
    )
}
