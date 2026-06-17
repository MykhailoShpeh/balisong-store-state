import css from './Filter.module.css'

export function Filter({
    onAll,
    onSafeBlade,
    onLiveBlade,
    onCart,
    selectedLength,
    activeButton }) {
return (
    <div
        className={css.filterBox}
    >
        <button
            className={activeButton === "allButton" ? `${css.buttonFiltration} ${css.active}` : css.buttonFiltration}
            type="button"
            onClick={onAll}
        >
            ВСІ
        </button>

        <button
            className={activeButton === "safeBladeButton" ? `${css.buttonFiltration} ${css.active}` : css.buttonFiltration}
            type="button"
            onClick={onSafeBlade}
        >
            з тренувальним лезом
        </button>

        <button
            className={activeButton === "liveBladeButton" ? `${css.buttonFiltration} ${css.active}` : css.buttonFiltration}
            type="button"
            onClick={onLiveBlade}
        >
            з небезпечним лезом
        </button>

        <button
            className={activeButton === "cartButton" ? `${css.buttonFiltration} ${css.active}` : css.buttonFiltration}
            type="button"
            onClick={onCart}
        >
            кошик
            &nbsp;
            <span
                // className={css.cartSpan}
            >{null ? 0 : selectedLength}</span>
        </button>
    </div>
)
}