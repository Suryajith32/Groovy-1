
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GetStarted from './pages/Getstarted/GetStarted';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Userhome from './pages/Userhome/Userhome';
import Discover from './pages/Discover/Discover';
import Album from './pages/Albums/Album';
import Artist from './pages/Artists/Artist';
import Recent from './pages/Recent/Recent';
import Favourite from './pages/Favourites/Favourite';
import Local from './pages/Local/Local';
import Playlist from './pages/Playlists/Playlist';
import Explore from './pages/Explore/Explore';
import { useState } from 'react';



function App() {
  const [toggleDark, settoggleDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode: toggleDark ? 'dark' : 'light',
    

    },
  });

  return (
    <>
    <div className="App"
    style={{position: 'absolute',bgcolor: '#121139',
    // background: "linear-gradient(45deg,#201556 0.5% ,#121139 65%,#2B1B6F)",
    background: " linear-gradient(to right, #c33764, #1d2671)",
    maxHeight: '140vh', width: '100%'}}
    >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        
        <Router>
          <Routes>
            <Route exact path='/' element={<GetStarted />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/Signup' element={<Signup />} />
            <Route path='/Home' element={<Userhome/>}>
              <Route path='explore' element={<Explore />} />
              <Route path='discover' element={<Discover />} />
              <Route path='albums' element={<Album />} />
              <Route path='artists' element={<Artist />} />
              <Route path='recent' element={<Recent />} />
              <Route path='favourite' element={<Favourite />} />
              <Route path='local' element={<Local />} />
              <Route path='playlists' element={<Playlist />} />
            </Route>





          </Routes>
        </Router>



      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
