export function Filter({ onAll, onSafeBlade, onLiveBlade }) {
return (
    <div
        // className={css.filterBox}
    >
        <button
            // className={css.buttonAllFiltration}
            type="button"
            onClick={onAll}
        >
            ВСІ
        </button>

        <button
            // className={css.buttonFiltration}
            type="button"
            onClick={onSafeBlade}
        >
            з тренувальним лезом
        </button>

        <button
            // className={css.buttonFiltration}
            type="button"
            onClick={onLiveBlade}
        >
            з небезпечним лезом
        </button>
    </div>
)
}