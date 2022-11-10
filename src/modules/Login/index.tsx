import React from 'react'
import { Box } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'

import CustomField from '~/components/CustomField'

import useStyle from './style'

import useCustom from './hooks'
import loginSchema from './schema'

const Login = () => {
  const { error, handleSubmit } = useCustom()
  const classes = useStyle({ error })

  return (
    <Box className={`${classes.container} ${classes.background}`}>
      <Box className={classes.formContainer}>
        <Box minWidth="40%">
          <Box mb={10}>
            <img className={classes.logo} src="/public/images/login-logo.png" alt="landing" />
          </Box>
          <Box className={classes.title}>
            Welcome to Insight
          </Box>
          <Box className={classes.subTitle}>
            Login to your account
          </Box>
          <Box className={classes.errorMessage}>
            <span className={classes.errorTitle}>
              Login failed:
            </span>
            <span>
              Invalid username or password.
            </span>
          </Box>
          <Formik
            initialValues={{
              username: '',
              password: '',
              keepSignIn: false,
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, isSubmitting, touched }) => (
              <Form>
                <Box className={classes.formSection}>
                  <Field
                    name="username"
                    type="text"
                    placeholder="Username"
                    as={CustomField}
                    error={errors.username}
                    touch={touched.username}
                  />
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    as={CustomField}
                    error={errors.password}
                    touch={touched.password}
                  />
                  <button
                    className={classes.submitButton}
                    disabled={isSubmitting}
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Box position="absolute" bottom={2} right={4} fontSize="xxs">
        {process.env.VERSION}
      </Box>
    </Box>
  )
}

export default Login
