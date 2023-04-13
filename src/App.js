import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import SecondPage from './secondpage';
import SignUp from './signUp';
import SignIn from './signin';
export default function App() {
  return (
    <Router>
      <div className='App'>
      <nav >
        <ul style={{display:'flex'}}>
          <li>
            <Link to="/buttons" style={{textDecoration:'none',color:'black',fontWeight:'bolder'}}>
              dribble
            </Link>
          </li>
          <li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Inspiration</Link></li>
          <li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Find work</Link></li>
          <li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Learn Design</Link></li>
          <li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Go Pro</Link></li>
          <li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Hire Designers</Link></li>
        </ul>

        <div className="leftSide" style={{marginLeft:'23em', marginTop:'1em'}}>
          <button style={{marginLeft:"2em"}}>{<BiSearch />}</button>
          <button style={{marginLeft:"2em"}}><Link to="/signIn" style={{textDecoration:'none',color:"black"}}>Sign In</Link></button>
          <button style={{marginLeft:"2em"}}><Link to="/signUp" style={{textDecoration:'none' ,color:"black"}}>Sign Up</Link></button>
        </div>
      </nav>

      <Routes>
        <Route path='/buttons' element={<Buttons />} />
        <Route path='/firstPageCont' element={< FirstPageContent />} />
        <Route path='/secondPage' element={< SecondPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route  path='/signIn' element={<SignIn />} />
      </Routes>
      </div>
    </Router>
  );
}

function Buttons(){
  return(
    <div className='buttons'>
      <button ><Link to="/firstPageCont" style={{textDecoration:'none',color:"black"}}>Discover</Link></button>
      <button ><Link to="/secondPage" style={{textDecoration:'none',color:"black"}}>Second Page</Link></button>

      <button  style={{backgroundColor:'black',color:'white'}}>Animation</button>
      <button style={{backgroundColor:'black',color:'white'}}>Branding</button>
      <button style={{backgroundColor:'white',color:'black'}}>Illustration</button>
      <button style={{backgroundColor:'black',color:'white'}}>Mobile</button>
      <button style={{backgroundColor:'black',color:'white'}}>Print</button>
      <button style={{backgroundColor:'black',color:'white'}}>Product Design</button>
      <button style={{backgroundColor:'black',color:'white'}}>Typography</button>
      <button style={{backgroundColor:'black',color:'white'}}>Web Design</button>

      <Routes>
        <Route path="/firstPageCont" element={<FirstPageContent />} />
      </Routes>
    </div>
   
  );
}

function FirstPageContent(){
  return(
    <div className='container'>
      <h1>Explore the world's leading <br />design portfolios</h1>
      <h3>Millions of designers and agencies around the world showcase their portfolio work<br />on Dribbble - the home to the world's best design and creative professionals</h3>
      <button className='searchIcon'>{<BiSearch />}</button>
      <input name='search' placeholder='Search' style={{height:'2.7em',paddingTop:'0.2em',borderRight:'none',outline:"none",border:"none",borderTopRightRadius:'25px',borderBottomRightRadius:"25px",width:'30em'}} />

      <div className='lastDiv'>
        <h4 className='lasthead'>Trending searches</h4>
        <button>Landing page</button>
        <button>Los</button>
        <button>food</button>
        <button>landingpage</button>
        <button>Uxdesign</button>
        <button>app design</button>
      </div>
    </div>
  );
}


