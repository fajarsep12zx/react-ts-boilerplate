import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username must contain at least 4 character')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Password must contain at least 4 characters')
    .required('Required'),
})

export default loginSchema
