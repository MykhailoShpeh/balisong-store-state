import React from "react";

import css from './Footer.module.css';

export function Footer ({

}) {

    return (
        <div className={css.footerDiv}>
       <a href="#sideMenuTitle"> <h2 className={css.title}>Balisong store</h2> </a>
        <ul className={css.list}>
            
            <li>
                <a className={css.link} href="tel:+380681234567">+380 68 123 45 67</a>
                </li>
            <li>
               <a className={css.link} href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
        </ul>
        </div>
    )     
    
}