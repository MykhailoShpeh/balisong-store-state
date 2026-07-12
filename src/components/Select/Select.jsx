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
        //     ? aircrafts
        //     : aircrafts.filter(aircraft => aircraft.model.scale.some(item =>
        //         item === Number(value)))

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

        console.log("-----------------------------------------------");
        console.log("typeOfBlade: ", typeOfBlade)
       
        console.log("-----------------------------------------------");

        return (
            <div
            ><h3 >Оберіть тип леза ножа:</h3>
            <label>
                    <select
                        name="typeOfBlade"
                        value={typeOfBlade}
                        onChange={this.handleChange}
                        
                    >
                        <option value="all">Всі</option>
                        <option value="trainer">Тренувальне</option>
                        <option value="live blade">Небезпечне</option>
                    </select> 
                </label>
            </div>
        )
    }
}