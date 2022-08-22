import { Box, Container, CssBaseline } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Signup() {
  return (
    <Box>
        <CssBaseline />
      <Container maxWidth={false}>
        <Box sx={{ bgcolor: "rgba(0, 0, 0,0.31)", height: '100vh' }} >
        <Stack direction="row" spacing={1} justifyContent="space-between">
         <Box bgcolor='#FFFFFF'>Sign in</Box>
          <Box bgcolor='#FFFFFF'>image</Box> 
        </Stack>

        </Box>
      </Container>
    </Box>
  )
}

export default Signup