import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import {BiSearch} from "react-icons/bi"
export default function HomePage(){
   return(
      <div className="HomepageNav">
         <Router>
<li><Link to="#" style={{textDecoration:'none',color:'black'}}>dribble</Link></li>
<li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Inspiration</Link></li>
<li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Find work</Link></li>
<li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Learn Design</Link></li>
<li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Go Pro</Link></li>
<li><Link to="#" style={{textDecoration:'none',color:'black',marginLeft:'2em'}}>Hire Designers</Link></li>
{/* defining routes */}
<Routes>
    <Route path="#" />
</Routes>
</Router>
<div className="leftSide">
<button>{<BiSearch />}</button>
<input name="search" placeholder="Search"/>
</div>
{/* after the end of nav */}
</div>
   )
}