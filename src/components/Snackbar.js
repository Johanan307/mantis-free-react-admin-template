import React, { useEffect } from 'react'
import { IconButton, Snackbar } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
  },
  success: {
    backgroundColor: '#2e7d32',
    color: 'white',
  },
  error: {
    backgroundColor: '#d32f2f',
    color: 'white',
  },
}))

function CustomSnackbar({ success, error, message }) {
  const [successState, setSuccessState] = React.useState(false)
  const [errorState, setErrorState] = React.useState(false)

  useEffect(() => {
    if (error) {
      setErrorState(true)
      const snackbarTimer = setTimeout(() => {
        setErrorState(false)
      }, 5000)
      return () => clearTimeout(snackbarTimer)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      setSuccessState(true)
      const snackbarTimer = setTimeout(() => {
        setSuccessState(false)
      }, 5000)
      return () => clearTimeout(snackbarTimer)
    }
  }, [success])

  const handleToClose = (event, reason) => {
    if ('clickaway' === reason) return
    setSuccessState(false)
  }

  const closingError = (event, reason) => {
    if ('clickaway' === reason) return
    setErrorState(false)
  }

  const classes = useStyles()

  return (
    <div className={classes.container}>
      {success && (
        <Snackbar
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
          ContentProps={{
            classes: {
              root: classes.success,
            },
          }}
          open={successState}
          autoHideDuration={5000}
          message={message}
          onClose={handleToClose}
          action={
            <React.Fragment>
              <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleToClose}
              >
                {/*<CloseIcon fontSize='small' />*/}
              </IconButton>
            </React.Fragment>
          }
        />
      )}
      {error && (
        <Snackbar
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
          ContentProps={{
            classes: {
              root: classes.error,
            },
          }}
          open={errorState}
          message={message}
          onClose={closingError}
          action={
            <React.Fragment>
              <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={closingError}
              >
                {/*<CloseIcon fontSize='small' />*/}
              </IconButton>
            </React.Fragment>
          }
        />
      )}
    </div>
  )
}

export default CustomSnackbar
