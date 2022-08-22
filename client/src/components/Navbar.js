import { alpha, AppBar, Avatar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';

//TOOLBAR STYLES//
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

//SEARCH BAR STYLES//
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  return (
    <Box>
    <Box sx={{position:"absolute"}}>
      <AppBar sx={{ bgcolor: "rgba(0, 0, 0,0.31)",background: " linear-gradient(to right, #c33764, #1d2671)", top: 0 }}  top={0}>
        <Box position="sticky">
          <StyledToolbar>
            <Typography variant="h6"
              sx={{ fontWeight: 600, mt: 1, ml: 1, display: { xs: "none", sm: "block" } }}
              color="#FFFFFF"
            > Grooovy
            </Typography>
            <ListIcon sx={{ display: { xs: "block", sm: "none", ml: 3, mt: 2 } }} />
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <Avatar src="/broken-image.jpg" />
          </StyledToolbar>
        </Box>
      </AppBar>
    </Box>
    </Box>
  )
}
export default Navbar