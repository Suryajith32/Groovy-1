import AlbumIcon from '@mui/icons-material/Album';
import ExploreIcon from '@mui/icons-material/Explore';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';


export const SidebarData=[
    {
        title:"Explore",
        path:"explore",
        icon: <ExploreIcon/>,
    },
    {
        title:"Discover",
        path:"discover",
        icon: <FindInPageIcon/>,
    },
    {
        title:"Albums",
        path:"albums",
        icon: <AlbumIcon/>,
    },
    {
        title:"Artists",
        path:"artists",
        icon: <RecordVoiceOverIcon/>,
    },
]
export const SidebarDatab=[
    {
        title:"Recent",
        path:"recent",
        icon: <RestartAltIcon/>,
    },
    {
        title:"Favourite",
        path:"favourite",
        icon: <BookmarkAddedIcon/>,
    },
    {
        title:"Local",
        path:"local",
        icon: <LaptopChromebookIcon/>,
    },
    {
        title:"Playlists",
        path:"playlists",
        icon: <FeaturedPlayListIcon/>,
    },
]