import React from "react";

import css from './UserLogInOrReg.module.css';

export function UserLogInOrReg({
    onClose,
    activeUser,
    onSignOut
}) {
    return (

        <div className={css.buttonBoxRegistrationIdentification}>
            {!activeUser &&
                <>
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
                </>
            }

            {activeUser &&
                <>
                    <h2 className={css.titleRegistrationIdentification}>
                        Вітаю вас,
                        <span className={css.titleUserRegistrationIdentification}>
                            {activeUser.userName}
                        </span>
                    </h2>

                    <button
                        className={`${css.buttonRegistrationIdentification} ${css.buttonSignOut}`}
                        type="button"
                        onClick={onSignOut}
                    >
                        SignOut
                    </button>
                </>
            }
        </div>
    )
}
