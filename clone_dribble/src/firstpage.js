import { BiSearch } from 'react-icons/bi'
// import { BrowserRouter } from 'react-router-dom'
export default function FirstPage(){

    return (
    <div className='container'>
  
 <h1>Explore the world's leading <br />      design portifolios</h1>
   <h3>Millions of designers and agencies around the world showcase their portifolio work <br /> on Dribble - the home to the world's best design and creative professionals </h3>
  <button className='searchIcon'> {<BiSearch />}</button>
  <input  name='search' placeholder='Search' />
   
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
)

}