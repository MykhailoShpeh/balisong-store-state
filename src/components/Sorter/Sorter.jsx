import css from './Sorter.module.css'

export function Sorter({
    onHandleChangeInputSearchValue,   //? Підняття стану
    searchInputValue,
     onHandleChangeRadioButtonValue,
    radioButtonValue,
    inputSearchPlaceholder
}) {
    return (
        <div className={css.sorter}>
            <h2 className={css.title}>Пошук ножа за фільтрами</h2>
            <form>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="name"
                        checked={radioButtonValue === "name"}
                        onChange={onHandleChangeRadioButtonValue}

                    />
                    Назва
                </label>
                <label >
                    <input
                        type="radio"
                        name="sort"
                        value="price"
                        checked={radioButtonValue === "price"}
                        onChange={onHandleChangeRadioButtonValue}

                    />
                    Ціна
                </label>
                <label >
                    <input
                        type="radio"
                        name="sort"
                        value="typeOfBlade"
                        checked={radioButtonValue === "typeOfBlade"}
                        onChange={onHandleChangeRadioButtonValue}

                    />
                    Тип леза
                </label>
                <label >
                    <input
                        type="radio"
                        name="sort"
                        value="weight"
                        checked={radioButtonValue === "weight"}
                        onChange={onHandleChangeRadioButtonValue}

                    />
                    Вага
                </label >
            </form>
            <input
                className={css.input}
                type="text"
                placeholder={inputSearchPlaceholder}
                onChange={onHandleChangeInputSearchValue}
            />
        </div>
    )
}
