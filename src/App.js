import logo from './components/fitclub.png';
import './App.css';
import SearchBar from './components/Searchbar';
import {Link} from "react-router-dom";
import icon from "./components/man.png";
import firstSlide from './components/frontslide';

function getWindowDimensions(){
  const {innerWidth:width,innerHeight:height} = window;
  return {width,height};
}
function Header(){
  return(
      <div className='App-header'>
          <img className = "logo"src = {logo} alt= "logo"></img>
          <SearchBar></SearchBar>
          <div className='user-container'><img src = {icon} alt = "profile"></img><span>Username</span></div>
      </div>
  )
}
const Footer = ()=>{
  return(
    <div className='Footer'>
      <img src = {logo} alt = "logo"></img>
      <div className='footer-items'>
        <ul>
          <li>
            About
          </li>
          <li>
            Terms and conditions
          </li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  
  return (<>
    <Header/>
    <firstSlide/>
    <Footer/>
    </>
  );
}

export default App;
