import React, { Component } from "react";

import css from './PriceFilter.module.css'

export class PriceFilter extends Component {
    state = {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className={css.priceFilterDiv}>
                <h3 className={css.priceTitle}>Ціна</h3>
                <form>
                    <input
                        type="number"
                        className={css.priceInput}
                        min={0}
                        placeholder="0$"
                    />
                    <span className={css.priceSpan}>-</span>
                    <input
                        type="number"
                        className={css.priceInput}
                        min={0}
                        placeholder="1000$"
                    />
                </form>
                <span className={`${css.priceSpan} ${css.line}`}></span>
            </div>
        )
    }
}