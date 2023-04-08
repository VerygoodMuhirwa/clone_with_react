import { BiSearch } from "react-icons/bi"
// import {myImage} from '/verygood.jpg'
export default function HomePage (){
    return (
        <div className="homLinks">
            <nav>
            <a>dribble</a>
            <a>Inspiration</a>
            <a>Find Work</a>
            <a>Learn Design</a>
            <a>Go Pro</a>
            <a>Hire Designers</a>
{/* button for search */}
<button>{<BiSearch />}</button>
<input name="search" placeholder="Search" />
{/* < img src={<myImage />} /> */}
<button >Upload</button>
<h2>Hello worldd</h2>
</nav>
        </div>
    )
}