import { useState } from 'react'
import { Footer, Header } from '../../widgets'
import { Title, UserForm } from '../../components'
import { BtnBorder } from '../../ui'
import { emailValidation, passwordValidation } from '../../app/validation'
import { useAuthHandlers } from '../../hooks'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
	const navigate = useNavigate()
	const [isRegistration, setIsRegistration] = useState(false)
	const [validateMessage, setValidateMessage] = useState({ text: '', fieldName: '' })
	const [authError, setAuthError] = useState('')

	const { createUserEmailPassword, loginEmailPassword, signInWithGoogle } = useAuthHandlers()

	const handleBlur = ({ field, value }) => {
		let message

		switch (field) {
			case 'email': {
				message = emailValidation(value)
				break
			}
			case 'password': {
				message = passwordValidation(value)
				break
			}
		}

		setValidateMessage({
			fieldName: message ? field : '',
			text: message,
		})
	}

	const handleSubmit = async (evt, email, password) => {
		evt.preventDefault()

		if (!emailValidation(email) && !passwordValidation(password)) {
			try {
				const user = isRegistration
					? await createUserEmailPassword(email, password)
					: await loginEmailPassword(email, password)
				navigate(-1)
			} catch (error) {
				const errorCode = error.code

				setAuthError(errorCode)
				console.log(errorCode)
			}
		}
	}

	return (
		<>
			<Header >
				<BtnBorder
					small
					title={!isRegistration ? 'Sign up' : 'Sign in'}
					handleClick={() => setIsRegistration((prev) => !prev)}
				/>
				<Title >{isRegistration ? 'Sign up' : 'Sign in'}</Title>
			</Header>
			<UserForm authError={authError} title={isRegistration ? 'Sign up' : 'Sign in'} handleSubmit={handleSubmit} handleBlur={handleBlur} validateMessage={validateMessage} >
				<BtnBorder
					title={'Sign in with GOOGLE'}
					handleClick={signInWithGoogle} />
			</UserForm>
			<Footer />
		</>
	)
}

export default SignIn