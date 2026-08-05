import React, { Component } from "react";

import balisongs from '@/json/balisongs.json';

import css from './Select.module.css';

export class Select extends Component {

    state = {
        typeOfBrand: "all"
    }

    handleChange = event => {
        //! Деструктуризуємо:
        const { name, value } = event.currentTarget;

        console.log("Значення name:", name);
        console.log("Значення value:", value);

        //! Деструктуризуємо props:
        const {
            onGetmanufactor
        } = this.props;

        //!! const modelsSelectedScale = value == "all"

        const manufactor = value === "all"
            ? balisongs
            : balisongs.filter(item => item.brand === value)

        console.log("Тут створюється масив manufactor:", manufactor);

        // //! Зберігаємо значення інпутів в state
        this.setState({
            //! Використовуємо властивості об'єкта, що обчислюються
            [name]: value,
        });

        onGetmanufactor(manufactor);
    }

    render() {

        const {
            typeOfBrand,
        } = this.state

        const brands = [...new Set(balisongs.map(item => item.brand))];

        console.log("-----------------------------------------------");
        console.log("typeOfBrand: ", typeOfBrand)
        // console.log("📗brands: ", brands)

        console.log("-----------------------------------------------");

        return (
            <div>
                <h3 className={css.title}>Оберіть компанію виробника ножа:</h3>
                <label>
                    <select
                        name="typeOfBrand"
                        className={css.select}
                        value={typeOfBrand}
                        onChange={this.handleChange}

                    >
                        <option value="all">Всі</option>
                        {/* <option value="trainer">Тренувальне</option>
                        <option value="live blade">Небезпечне</option> */}
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        )
    }
}