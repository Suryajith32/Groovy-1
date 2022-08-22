import { Box } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';

function MusicFeed() {
  return (
    <>
      <Box 
        flex={4}>  
       <Outlet/>
      </Box>
    </>
  )
}
export default MusicFeed
