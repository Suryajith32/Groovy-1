import { Box, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarData, SidebarDatab } from './SidebarData'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <> 
      <Box bgcolor="transparent"
        flex={0.8}
        sx={{ display: { xs: "none", sm: "block", zIndex: 'tooltip', } }}
      >
        <Box position="fixed" bgcolor="rgba(0, 0, 0,0.62)"flex={0.8} sx={{width:"16.5%",height:"100vh",mt:8}} >
          <nav aria-label="main mailbox folders">
            {/* <Typography variant="h6" style={{ fontWeight: 600, color: "#FFFFFF" }} sx={{ ml: 5, pt: 1 }} > Groovy </Typography> */}
            <Typography style={{ fontWeight: 600, color: "#FFFFFF", opacity: 0.5 }} sx={{
              ml: 1, mt: 5
            }} >
              Menu
            </Typography>
            <List sx={{ color: "#FFFFFF", pt: 2 }}>
              {SidebarData.map((item, index) => (
                <NavLink style={{ textDecoration: 'none', fontWeight: 600, color: "#FFFFFF", }} to={item.path}>
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{color:"#FFFFFF"}}>
                        {item.icon}
                      </ListItemIcon >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </nav>
          <nav aria-label="main mailbox folders">
            <Typography style={{ fontWeight: 600, color: "#FFFFFF", opacity: 0.5 }} sx={{ ml: 1, pt: 2, }} > Library </Typography>
            <List sx={{ color: "#FFFFFF", pt: 2 }}>
              {SidebarDatab.map((item, index) => (
                <NavLink style={{ textDecoration: 'none', fontWeight: 600, color: "#FFFFFF", }} to={item.path}>
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{color:"#FFFFFF"}}>
                        {item.icon}
                      </ListItemIcon >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
              <ListItem>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                </FormGroup>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Box>
    </>
  )
}
export default SideBar