import {
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Container maxWidth='xl'>
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent='center'
        alignItems='center'
        spacing={4}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant='subtitle2' color='secondary' component='span'>
          &copy; Created by&nbsp;
          <Typography
            component={Link}
            variant='subtitle2'
            href='https://creditsnaarons.com'
            target='_blank'
            underline='hover'
          >
            Joran, Levi and Johanan
          </Typography>
        </Typography>
        <Typography
          variant='subtitle2'
          color='secondary'
          component={Link}
          href='https://creditsnaarons.com'
          target='_blank'
          underline='hover'
        >
          Privacy Policy
        </Typography>
        <Typography
          variant='subtitle2'
          color='secondary'
          component={Link}
          href='https://creditsnaarons.com'
          target='_blank'
          underline='hover'
        >
          Support
        </Typography>
      </Stack>
    </Container>
  )
}

export default AuthFooter
