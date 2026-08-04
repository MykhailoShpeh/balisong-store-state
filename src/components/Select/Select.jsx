import React, { Component } from "react";

import balisongs from '@/json/balisongs.json';

import css from './Select.module.css';

export class Select extends Component {

    state = {
        typeOfBlade: "all"
    }

    handleChange = event => {
        //! Деструктуризуємо:
        const { name, value } = event.currentTarget;

        console.log("Значення name:", name);
        console.log("Значення value:", value);

        //! Деструктуризуємо props:
        const {
            onGetBladeType
        } = this.props;

        //!! const modelsSelectedScale = value == "all"

        const bladeType = value === "all"
            ? balisongs
            : balisongs.filter(item => item.typeOfKnife === value)

        console.log("Тут створюється масив bladeType:", bladeType);

        // //! Зберігаємо значення інпутів в state
        this.setState({
            //! Використовуємо властивості об'єкта, що обчислюються
            [name]: value,
        });

        onGetBladeType(bladeType);
    }

    render() {

        const {
            typeOfBlade,
        } = this.state

        const brands = [...new Set(balisongs.map(item => item.brand))];

        console.log("-----------------------------------------------");
        console.log("typeOfBlade: ", typeOfBlade)
        console.log("📗brands: ", brands)

        console.log("-----------------------------------------------");

        return (
            <div>
                <h3 className={css.title}>Оберіть компанію виробника ножа:</h3>
                <label>
                    <select
                        name="typeOfBlade"
                        className={css.select}
                        value={typeOfBlade}
                        onChange={this.handleChange}

                    >
                        <option value="all">Всі</option>
                        {/* <option value="trainer">Тренувальне</option>
                        <option value="live blade">Небезпечне</option> */}
                        {brands.map((brand) => (
                            <option value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        )
    }
}