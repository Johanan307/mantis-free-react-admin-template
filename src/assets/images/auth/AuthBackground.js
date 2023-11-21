import {Box} from '@mui/material'
// import trainTrack from '../../../img/traintrack.png'

const AuthBackground = () => {
  const backgroundStyles = {
    position: 'absolute',
    filter: 'blur(18px)',
    zIndex: -1,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundImage: `url(${trainTrack})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return <Box sx={backgroundStyles}></Box>
}

export default AuthBackground
