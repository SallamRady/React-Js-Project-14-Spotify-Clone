import logo from './logo.svg';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import MainContent from './components/content/MainContent';
import RightSidebar from './components/rightSidebar/RightSidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <LeftSidebar/>
      <MainContent/>
      <RightSidebar/>
      <div className='background'></div>
    </div>
  );
}

export default App;
