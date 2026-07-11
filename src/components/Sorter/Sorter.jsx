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
            <form className={css.form}>
                <label className={radioButtonValue === "name" ? css.active : null}>
                    <input
                        type="radio"
                        name="sort"
                        value="name"
                        checked={radioButtonValue === "name"}
                        onChange={onHandleChangeRadioButtonValue}
                    />
                    Назва
                </label>
                <label className={radioButtonValue === "price" ? css.active : null}>
                    <input
                        type="radio"
                        name="sort"
                        value="price"
                        checked={radioButtonValue === "price"}
                        onChange={onHandleChangeRadioButtonValue}
                    />
                    Ціна
                </label>
                {/* <label className={radioButtonValue === "typeOfBlade" ? css.active : null}>
                    <select
                        name="sort"
                        value="{typeOfBlade}"
                        id=""
                        onChange={onHandleChangeRadioButtonValue}
                        
                    >
                        <option value="trainer">Тренувальне</option>
                        <option value="live blade">Небезпечне</option>
                    </select> */}
                    {/* <input
                        type="radio"
                        name="sort"
                        

                    /> */}
                    {/* Тип леза
                </label> */}
                <label className={radioButtonValue === "weight" ? css.active : null}>
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
                value={searchInputValue}
            />
        </div>
    )
}
