import React from 'react'
import {
  Box,
  Card,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material'
import Icon from '@mdi/react'
import { mdiArrowRight, mdiDelete } from '@mdi/js'

const SkeletonCard = () => {
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
          <Skeleton variant='circular' width={28.8} height={28.8} />
          <Skeleton
            variant='rectangular'
            width={60}
            height={15}
            sx={{ borderRadius: 5, ml: 2 }}
          />
          <Skeleton
            variant='rectangular'
            width={90}
            height={15}
            sx={{ borderRadius: 5, ml: 'auto' }}
          />
        </Box>
        <CardContentSkeleton />
      </Card>
    </Grid>
  )
}

const CardContentSkeleton = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>
          <Skeleton
            variant='rectangular'
            width={100}
            height={15}
            sx={{ borderRadius: 5, mb: 2 }}
          />
          <Skeleton
            variant='rectangular'
            sx={{ borderRadius: 5, mb: 3 }}
            width={300}
            height={15}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxHeight: 245,
        }}
      >
        <IconButton color='text.primary' sx={{ fontWeight: 'bold' }}>
          <Icon path={mdiArrowRight} size={1} color='#c0c0c0' />
        </IconButton>
        <IconButton>
          <Icon path={mdiDelete} size={1} color='#c0c0c0' />
        </IconButton>
      </Box>
    </React.Fragment>
  )
}

export default SkeletonCard
