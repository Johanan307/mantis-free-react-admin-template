import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import Icon from '@mdi/react'
import {
  mdiArrowRight,
  mdiClockTimeFourOutline,
  mdiDelete,
  mdiFolderEditOutline,
} from '@mdi/js'

const CustomCard = ({ title, updatedAt, description }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: '100%' }}>
      <Card sx={{ borderRadius: 4, p: 3 }}>
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon path={mdiFolderEditOutline} size={1.2} color='#222' />
            <Typography variant='h5' sx={{ ml: 1, fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon path={mdiClockTimeFourOutline} size={0.7} color='#00000099' />
            <Typography variant='body1' color='text.secondary' sx={{ ml: 1 }}>
              {updatedAt}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: 0, mb: 0 }}>
          <Typography variant='body1' color='text.secondary' sx={{ mb: 1 }}>
            Beschrijving
          </Typography>
          <Typography variant='body1' sx={{ mb: 3 }}>
            {description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            href='#'
            aria-label=''
            color='text.primary'
            sx={{ fontWeight: 'bold' }}
          >
            <Icon path={mdiArrowRight} size={1} color='#222' />
          </IconButton>
          <IconButton aria-label='delete'>
            <Icon path={mdiDelete} size={1} color='#222' />
          </IconButton>
        </Box>
      </Card>
    </Grid>
  )
}

export default CustomCard
