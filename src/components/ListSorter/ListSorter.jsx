import React, { Component } from "react";

import balisongs from '@/json/balisongs.json';

import css from './ListSorter.module.css';

export class ListSorter extends Component {

    state = {
        sortType: "default"
    }

    handleChange = event => {
        const { value } = event.currentTarget;

        this.setState({
            sortType: value
        })

        // const balisongsArray = balisongs

        const knifes = value === "default"
            ? balisongs
            : value === "expensive"
                ? [...balisongs].sort((a, b) => b.price - a.price)
                : value === "cheap"
                    ? [...balisongs].sort((a, b) => a.price - b.price)
                    : 

                    console.log("knifes: ", knifes)

        const {
            handleSort
        } = this.props;

        handleSort(knifes)
    }


    render() {

        const {
            sortType
        } = this.state

        return (
            <div className={css.optionsDiv}>
                <select name="sortType" className={css.optionsSelect} onChange={this.handleChange} value={sortType}>
                    <option value="default">За популярністю</option>
                    <option value="cheap">Від дешевших до дорожчих</option>
                    <option value="expensive">Від дорожчих до дешевших</option>
                </select>
            </div>
        )
    }
}