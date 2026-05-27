import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ isOn = true, title, children, selectedKnifesObjects, isCartButton,  totalTypes }) {
    return (
        selectedKnifesObjects.length == 0 && isCartButton ? <h1 className={css.nullTitle}>Додайте товар до кошику</h1> :
        <>
        { isOn && <section>
            {/* <h2>{title}</h2> */}
            {/* //! Рендер за умовою: */}
                    {title && <h2 className={css.title}>{title}</h2>}
                    <h3 className={css.titleTotalTypes}>Кількість типів ножів: <span>{totalTypes}</span></h3>
            {children}
            </section>}
        </>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};