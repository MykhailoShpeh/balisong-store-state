import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({
    isOn = true,
    title,
    children,
    selectedKnifesObjects,
    isCartButton,
    totalTypes,
    totalModels,
    searchInputValue,
    select,
    sorter
}) {
    return (
        selectedKnifesObjects.length == 0 && searchInputValue === "" && isCartButton ? <h1 className={css.nullTitle}>Додайте товар до кошику</h1> :
            <>
                {isOn &&
                    <section>
                        {/* //! Рендер за умовою: */}
                        <div className={css.infoDiv}>
                            {title && <h2 className={css.title}>{title}</h2>}
                            <h3 className={css.titleTotalTypes}>
                                Кількість типів ножів: <span>{totalTypes}</span>
                            </h3>
                            <h3 className={css.titleTotalModels}>
                                Кількість моделей ножів: <span>{totalModels}</span>
                            </h3>
                        </div>
                        <div className={css.content}>
                            <aside className={css.aside}>
                                {select}
                                {sorter}
                            </aside>
                        </div>
                        <div className={css.list}>
                            {children}
                        </div>
                    </section>}
            </>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};