import React from "react";

import css from './FormChoiceRegOrInd.module.css';

export function FormChoiceRegOrInd({
onClose
}) {
    return (
        <div className={css.box}>
            <h2 className={css.title}>Будь ласка, увійдіть у аккаунт, або створіть його</h2>
            <div className={css.registrationIdentificationButtonBox}>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonRegistration}`}
                    // onClick={(event) => onClose(event.currentTarget.textContent)}
                    onClick={onClose}
                >
                    Registration
                </button>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonLogin}`}
                    // onClick={(event) => onClose(event.currentTarget.textContent)}
                    onClick={onClose}

                >
                    Login
                </button>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonCancel}`}
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
      </div>
    )
}