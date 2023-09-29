import {Routes, Route} from 'react-router-dom';

import Connect from './components/MainBarTags/Connect';
import CBnews from './components/MainBarTags/CBnews';
import About from './components/MainBarTags/About';
import MainPage from './components/Main/MainPage';
import MainBar from './components/Main/MainBar';
import "bootstrap/dist/css/bootstrap.min.css";
import BotBar from './components/Main/BotBar';
import Details from './components/Details';
import Create from './components/Create';
import './components/Main/MainBar.css'
import View from './components/View';
import Edit from './components/Edit';
import './App.css';
import SecondPract from './components/Main/SecondPract';
import Pract from './components/Main/Pract';
import ThirdPract from './components/Main/ThirdPract';
import FourthPract from './components/Main/FourthPract';
import Spotify from './components/MainBarTags/Spotify';
import UCBPepisodes from './components/UCBPepisodes';
import MainBar2 from './components/Main/MainBar2';
import BotBar2 from './components/Main/BotBar2';
import MainPage2 from './components/Main/MainPage2';




function App() {


  return (
    <div className="App">
      <MainBar2></MainBar2>
      <Routes>
        <Route path='/pract' element={<Pract/>} />
        <Route path='/secondPract' element={<SecondPract/>} />
        <Route path='/thirdPract' element={<ThirdPract/>} />
        <Route path='/fourthPract' element={<FourthPract/>} />
        <Route path="/" element={<MainPage2/>}/>
        <Route path="/view" element={<View />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/news' element={<CBnews/>} />
        <Route path='/episodes' element={<Spotify/>} />
        <Route path='/UCBP' element={<UCBPepisodes/>} />
      </Routes>
    </div>
  );
}

export default App;
