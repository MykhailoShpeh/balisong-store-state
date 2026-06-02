import css from './Sorter.module.css'

export function Sorter({
    onHandleChangeInputSearchValue,   //? Підняття стану
    searchInputValue
}) {
    return (
        <div className={css.sorter}>
            <h2 className={css.title}>Пошук ножа за іменем</h2>
            <input
                className={css.input}
                type="text"
                placeholder="Введіть ім'я ножа"
                onChange={onHandleChangeInputSearchValue}
            />
        </div>
    )
}
