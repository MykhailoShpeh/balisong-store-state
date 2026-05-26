import css from './Sorter.module.css'

export function Sorter({
    onHandleChangeInputSearchValue   //? Підняття стану
}) {
    return (
        <div className={css.sorter}>
            <h2 className={css.title}>Пошук ножа за іменем</h2>
            <input
                className={css.input}
                type="text"
                placeholder="Введіть ім'я ножа"
                // onChange={() => { console.log("Робота з input") }}
                // onChange={(event) => { onHandleChangeInputSearchValue(event.target.value) }} //todo var.1 ✅
                // onChange={onHandleChangeInputSearchValue}
            />
        </div>
    )
}
