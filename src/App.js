import logo from './logo.svg';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import MainContent from './components/content/MainContent';
import RightSidebar from './components/rightSidebar/RightSidebar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Note from './components/Last-Note/Note';

function App() {
  return (
    <div className="App">
        <LeftSidebar/>
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/note' element={<Note/>}/>
        </Routes>
        <RightSidebar/>
      <div className='background'></div>
    </div>
  );
}

export default App;
