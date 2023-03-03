import { useState } from 'react'
import styles from './User-form.module.css'

export const UserForm = ({ authError, handleSubmit, handleBlur, title, validateMessage, children }) => {
    const [email, setEmail] = useState({ value: '', touched: false, field: 'email' })
    const [password, setPassword] = useState({ value: '', touched: false, field: 'password' })

    const handleEmailChange = (evt) => {
        setEmail((prev) => ({
            ...prev,
            value: evt.target.value,
            touched: true,
        }))
    }
    const handlePasswordChange = (evt) => {
        setPassword((prev) => ({
            ...prev,
            value: evt.target.value,
            touched: true,
        }))
    }

    return (
        <section className={`${styles.signIn} ${styles.content}`}>
            <form
                onSubmit={(evt) => handleSubmit(evt, email.value, password.value)}
                className={styles.form}
            >
                {validateMessage.text &&
                    <div className={`${styles.message} ${styles.errorMessage}`}>
                        <p>{validateMessage.text}</p>
                    </div>
                }
                {authError &&
                    <div className={`${styles.message}`}>
                        <p>{authError}</p>
                    </div>
                }

                <div className={styles.fields}>
                    <div className={`${styles.field} ${validateMessage.fieldName === 'email' && styles.error}`}>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Email address"
                            id="user-email"
                            value={email.value}
                            onBlur={() => handleBlur(email)}
                            onChange={(evt) => handleEmailChange(evt)}
                        />
                        <label className={`${styles.label} visually-hidden`} htmlFor="user-email">Email address</label>
                    </div>
                    <div className={`${styles.field} ${validateMessage.fieldName === 'password' && styles.error}`}>
                        <input
                            className={styles.input}
                            type="password"
                            placeholder="Password"
                            id="user-password"
                            value={password.value}
                            onBlur={() => handleBlur(password)}
                            onChange={(evt) => handlePasswordChange(evt)}
                        />
                        <label className={`${styles.label} visually-hidden`} htmlFor="user-password">Password</label>
                    </div>
                </div>
                <div className={styles.submit}>
                    <button
                        className={styles.btn}
                        type="submit"
                        disabled={!email.value || !password.value}
                    >{title}
                    </button>
                </div>
            </form>
            {children}
        </section>
    )
}