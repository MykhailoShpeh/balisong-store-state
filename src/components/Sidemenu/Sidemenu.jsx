import React, { Children, useState } from "react";

import css from './Sidemenu.module.css';

export function Sidemenu({
    children
}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={css.sideMenuDiv}>
         {/* <> */}
            <h2 className={css.title} id="sideMenuTitle">Фільтри для пошуку ножів</h2>
            <button
                type="button"
                className={css.toggleButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? "Закрити" : "Відкрити"}
            </button>
            <aside
                className={`${css.sideMenu} ${isMenuOpen ? css.isOpen : ""}`}
            >
                <button
                    className={css.toggleButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ✕
                </button>
                {children}
            </aside>
        </div> 
        //  </> 
    )
};