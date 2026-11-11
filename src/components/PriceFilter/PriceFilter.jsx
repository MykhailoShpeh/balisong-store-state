import { useState } from "react";
import css from './PriceFilter.module.css'

export function PriceFilter(
   { balisongs,
    onFilteredProducts}
) {

    // console.log("👻balisongs: ", balisongs)
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    //todo додати обробник фільтрації за ціною,
    //todo потрібно відфільтрувати масив balisongs за найменшою та найбільшою ціною

    const handleFilter = () => {
        const filtered = balisongs.filter((product) => {
            const aboveMin = minPrice === "" || product.price >= Number(minPrice);
            const belowMax = maxPrice === "" || product.price <= Number(maxPrice);

            return aboveMin && belowMax;
        });

        onFilteredProducts(filtered);
    };


    return (
        <div className={css.priceFilterDiv}>
            <h3 className={css.priceTitle}>Ціна</h3>
            <form>
                <input
                    type="number"
                    className={css.priceInput}
                    min={0}
                    max={1000}
                    placeholder="0$"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className={css.priceSpan}>-</span>
                <input
                    type="number"
                    className={css.priceInput}
                    min={0}
                    max={1000}
                    placeholder="1000$"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </form>

            <button onClick={handleFilter}>Застосувати</button>
            {/* <span className={`${css.priceSpan} ${css.line}`}></span> */}
        </div>
    )

}