import { Box, Stack } from '@mui/system'
import React from 'react'
import MusicFeed from '../../components/MusicFeed'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'


function Userhome(  ) {
  return (
    <Box>
      {/* <Stack direction="row" spacing={0} justifyContent="space-between">
      <Header/>
      <HeaderFeed/>
      </Stack> */}
      
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <SideBar />
        <MusicFeed/>
      </Stack>
      <Navbar />
    </Box>
  )
}

export default Userhome