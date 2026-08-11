import React, { useState } from "react";

import css from './Sidemenu.module.css';

export function Sidemenu({
    
}) {

 const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className={css.OpenButton}
                onClick={() => setIsMenuOpen(true)}
            >
                Open
            </button>
            <aside
                className={`${css.sideMenu} ${isMenuOpen ? css.isOpen : ""}`}
            >
                <button onClick={() => setIsMenuOpen(false)}>
                    ✕
                </button>
                <p>
                    side menu
                </p>
            </aside>
        </>
    )
};