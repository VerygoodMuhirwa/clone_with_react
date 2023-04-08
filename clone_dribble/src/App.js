import './App.css';
import { BiSearch} from 'react-icons/bi'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {  Link} from 'react-router-dom'
import FirstPage from './firstpage';
import HomePage from './homePage';
// import FirstPage from './firstpage';
function App() {
// This is the function to take the user to the homepage
// const takeToHomepage= (e)=>{
//   e.preventDefault()
// window.location.href= "./homePage.js"
// }

  return (

    <div className="App">
      <div className='nav'>
      <Router>
                <li className='dribble' >dribbble</li>
<li><Link to="/homepage" style={{textDecoration:"none",color:"black"}}>Home</Link></li>
             <li ><Link to="#" style={{textDecoration:'none', color:'black'}}>Inspiration</Link></li>
        <li ><Link to="#" style={{textDecoration:'none', color:'black'}}>Find work</Link></li>
        <li ><Link to="#" style={{textDecoration:'none', color:'black'}}>Learn Design</Link></li>
        <li ><Link to="#" style={{textDecoration:'none', color:'black'}}>Go Pro</Link></li>
        <li className='links'><Link to="#" style={{textDecoration:'none', color:'black'}}>Hire Designers</Link></li>
<BiSearch  className='searchNavIcon'/>
<p id='signin'>Sign in </p>
<button className='signup'>Sign up</button>
<Routes >
<Route  path='/homepage' element={<HomePage />}   />
</Routes>
</Router>

      </div>
       
 
  
     
    {/* This is another div about the buttons linking to different pages */}
    <div className='buttons'>
   <Router>
   <button className='discover'><Link to="/firstPage"  style={{textDecoration:'none', color:"black"}}>Discover</Link></button>
   <button>Animation</button>
   <button>Branding</button>
   <button className='illustration'>Illustration</button>
   <button>Mobile</button>
   <button>Print</button>
   <button>Product Design</button>
   <button>Typography</button>
   <button>Web Design</button>
   <Routes>
    <Route path='/firstPage' element={<FirstPage />} />
   </Routes>
   </Router>
    </div>


     
    </div>


  );
}

export default App;
