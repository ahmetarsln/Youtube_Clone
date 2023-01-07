import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed}  from './components';
import {Box} from '@mui/material';


const App = () => {
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
         <Navbar />
         <Routes>
            <Route path="/" exact element={<Feed></Feed>}/>
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/video/:id" element={<ChannelDetail/>}/>
            <Route path="/video/:id" element={<SearchFeed/>}/>
         </Routes>
        </Box>
    </BrowserRouter>
}
//25.56
export default App