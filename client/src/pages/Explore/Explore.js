import React from 'react'
import {  Box, Button, Card,  CardContent,  CardMedia,  Typography } from '@mui/material'
import { Stack } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddIcon from '@mui/icons-material/Add';

//BANNER STYLES//
const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    card: {
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
    }
}
const CardArr = ["1", "2", "3", "4", "5", "6", "7"]
function Explore() {
    return (
        <Box  sx={{mt:8}} >
            {/* BANNER */}
            <Card style={styles.card} position="sticky" >
                <CardMedia
                    component="img"
                    height="225"
                    image="https://c4.wallpaperflare.com/wallpaper/907/874/364/music-marshmello-marshmello-music-hd-wallpaper-preview.jpg"
                    alt="Paella dish"
                />
                <Typography style={styles.overlay} sx={{
                    top: '10px',
                    left: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    opacity: 0.5
                }}>Trending New Hits</Typography>
                <Typography variant="h3" style={styles.overlay} sx={{
                    top: '50px',
                    left: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                }}>Be Kind (with Halsey)</Typography>
                <Typography style={styles.overlay} sx={{
                    top: '110px',
                    left: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    ml: 1
                }}>Marshmello, Halsey</Typography>
                <Button style={styles.overlay} sx={{
                    top: '150px',
                    left: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    ml: 1
                }} variant="outlined">Listen Now</Button>
                <FavoriteIcon style={styles.overlay} sx={{
                    top: '155px',
                    left: '160px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    ml: 1
                }} />
            </Card>
            <Card sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", overflow: 'auto',background:"rgba(0, 0, 0,0.31)" } }} >
                <CardContent height="725"
                    bgcolor="rgba(0, 0, 0,0.31)"
                >
                    <Typography justifyContent="space-between" style={{ fontWeight: 600, }} color="#FFFFFF"sx={{
                        ml: 1, mb: 2
                    }} > Top Artists </Typography>
                    <Stack direction="row" spacing={2} >
                        {CardArr.map(() => (
                            <Card sx={{ maxWidth: 150 ,background:"rgba(0, 0, 0,0.31)"}}>
                                <CardMedia
                                    component="img"
                                    height="75"
                                    image="https://c4.wallpaperflare.com/wallpaper/907/874/364/music-marshmello-marshmello-music-hd-wallpaper-preview.jpg"
                                    alt="Artists"
                                />
                                <CardContent sx={{ background:"rgba(0, 0, 0,0.31)"}}   >
                                    <Typography variant="body2" color="#FFFFFF">
                                        Marshmello
                                    </Typography>
                                </CardContent>
                                {/* <CardActions disableSpacing>
                                </CardActions> */}
                            </Card>
                        ))}
                    </Stack>
                </CardContent>
            </Card>

            {/* TOP CHART */}
            <Card sx={{background:"rgba(0, 0, 0,0.31)"}}>
                <CardContent style={{ overflow: 'auto',background:"rgba(0, 0, 0,0.31)" }}>
                    <Box sx={{ height: '50vh', left: 0 }} >
                        {CardArr.map(() => (
                            <Box sx={{ mt: 4 }}>
                                <Stack direction="row" spacing={0} justifyContent="space-between" >
                                    <Box>
                                        <Stack direction="row" spacing={0} justifyContent="space-between" >
                                            <Typography color="#FFFFFF" sx={{ fontSize: 13, mt: 2 }}>0</Typography>
                                            <Box sx={{ height: 20, width: 80, bgcolor: "#FFFFFF", borderRadius: 2, ml: 2 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="60"
                                                    image="https://c4.wallpaperflare.com/wallpaper/907/874/364/music-marshmello-marshmello-music-hd-wallpaper-preview.jpg"
                                                    alt="Artists"
                                                />
                                            </Box>
                                            <Box>
                                                <Typography style={{ fontSize: 14, fontWeight: 400, }} color="#FFFFFF" sx={{
                                                    ml: 1, mt: 1
                                                }} > Song Name</Typography>
                                                <Typography style={{ fontSize: 12, fontWeight: 400, }} color="#FFFFFF" sx={{
                                                    ml: 1,
                                                }} > Artist Name</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box >
                                        <Typography style={{ fontSize: 14, fontWeight: 400, }} color="#FFFFFF" sx={{
                                            ml: 1, mt: 1
                                        }} > Album Name</Typography>
                                    </Box>
                                    <Box >
                                        <Typography style={{ fontSize: 14, fontWeight: 400, }} color="#FFFFFF" sx={{
                                            ml: 1, mt: 1
                                        }} >3:04</Typography>
                                    </Box>
                                    <Box >
                                        <Box sx={{ mt: 1 }}>
                                            <PlayCircleFilledIcon sx={{ mr: 8,color:"#FFFFFF" }} />
                                            <AddIcon sx={{color:"#FFFFFF"}} />
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
export default Explore