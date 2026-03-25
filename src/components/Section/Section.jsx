import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ isOn = true, title, children }) {
    return (
    <>
        { isOn && <section>
            {/* <h2>{title}</h2> */}
            {/* //! Рендер за умовою: */}
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
            </section>}
        </>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};