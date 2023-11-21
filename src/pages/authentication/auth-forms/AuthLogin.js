import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material'
import * as Yup from 'yup'
import { Formik } from 'formik'
import AnimateButton from 'components/@extended/AnimateButton'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import * as loginActions from './logic/actions'

const AuthLogin = () => {
  const [checked, setChecked] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate()

  const user = useSelector((state) => state?.auth?.user)
  const loggedIn = useSelector((state) => state?.auth?.loggedIn)
  const loggingIn = useSelector((state) => state?.auth?.logIn)
  const loggingInError = useSelector((state) => state?.auth?.loggingInError)

  const dispatch = useDispatch()

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (loggedIn && !loggingInError) {
      navigate('/')
      console.log('loggedIn')
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [loggedIn, navigate])

  return (
    <>
      <Formik
        initialValues={{
          email: 'test@spoorbeeck.dev',
          password: 'nigger',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Voer een geldig email adres in')
            .max(255)
            .required('Email adres is verplicht'),
          password: Yup.string().max(255).required('Wachtwoord is verplicht'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const emailAndPassword = {
              email: values.email,
              password: values.password,
            }
            dispatch(loginActions.logIn(emailAndPassword))

            setStatus({ success: false })
            setSubmitting(false)
          } catch (err) {
            setStatus({ success: false })
            setErrors({ submit: err.message })
            setSubmitting(false)
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor='email-login'>Email adres</InputLabel>
                  <OutlinedInput
                    id='email-login'
                    type='email'
                    value={values.email}
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Enter email address'
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id='standard-weight-helper-text-email-login'
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor='password-login'>Wachtwoord</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id='-password-login'
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                          size='large'
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder='Enter password'
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id='standard-weight-helper-text-password-login'
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name='checked'
                        color='primary'
                        size='small'
                      />
                    }
                    label={<Typography variant='h6'>Blijf ingelogd</Typography>}
                  />
                  <Link
                    style={{ fontSize: 13, textDecoration: 'underline' }}
                    variant='h6'
                    component={RouterLink}
                    to='/forgotpassword'
                    color='textSecondary'
                  >
                    Wachtwoord Vergeten
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting || loggingIn}
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'
                    color='primary'
                  >
                    {loggingIn ? (
                      <CircularProgress size={24} color='inherit' />
                    ) : (
                      'Inloggen'
                    )}
                  </Button>
                </AnimateButton>
                {loggingInError && !errors.email && !errors.password && (
                  <Typography
                    color='error'
                    variant='body2'
                    sx={{ mt: 2, textAlign: 'center' }}
                  >
                    Invalid login credentials. Please check and try again.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    marginTop: 24,
                  }}
                >
                  <Divider>
                    <Typography variant='caption' style={{ fontSize: 13 }}>
                      or
                    </Typography>
                  </Divider>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 12,
                  }}
                >
                  <Typography variant='caption' style={{ fontSize: 13 }}>
                    Nog geen account?
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}
                >
                  <Typography
                    component={RouterLink}
                    to='/register'
                    variant='body1'
                    sx={{ textDecoration: 'none' }}
                    color='primary'
                  >
                    Account aanvragen
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  )
}

export default AuthLogin
