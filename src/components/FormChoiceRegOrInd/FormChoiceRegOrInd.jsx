import React from "react";

import css from './FormChoiceRegOrInd.module.css';

export function FormChoiceRegOrInd({
    onClose
}) {
    return (
        <div className={css.box}>
            <h2 className={css.title}>Будь ласка, увійдіть у аккаунт, або зареєструйтесь</h2>
            <p className={css.text}>
                Щоб додавати товари до кошика та зберігати свої налаштування,
                зареєструйтесь або увійдіть у свій акаунт.
            </p>
            <div className={css.registrationIdentificationButtonBox}>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonRegistration}`}
                    onClick={onClose}
                >
                    Registration
                </button>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonLogin}`}
                    onClick={onClose}
                >
                    Login
                </button>
            </div>
            <button
                type="button"
                className={`${css.buttonRegistrationIdentification} ${css.buttonCancel}`}
                onClick={onClose}
            >
                ✕
            </button>
        </div>
    )
}