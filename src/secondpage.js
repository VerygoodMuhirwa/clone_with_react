import React from "react"
import image1 from "./images/dribble6.jpg"
import  image2 from "./images/dribble1.jpg"
import  image3 from "./images/dribble2.jpg"
import  image4 from "./images/dribble3.jpg"
import  image5 from "./images/dribble4.jpg"
import  image6 from "./images/dribble5.jpg"
import image7 from "./images/2dImage.jpg"
import image8 from "./images/3dImage.jpg"
import image9 from "./images/4dImage.jpg"
import image10 from "./images/5dImage.jpg"
import image12 from "./images/6dImage.jpg"

import image11 from "./images/firstDribbleImage.jpg"

 function SecondPage(){
    return(
        <div className='secondPageImages' style={{display:'grid',gridTemplateColumns:'20em 20em 20em 20em',gridTemplateRows:"16em 16em"}}>
                      <img src={image1} alt='myImage' style={{height:"15em", width:"19em"}} />

            <img src={image2} alt='myImage' style={{height:"15em", width:"19em"}} />
            <img src={image3} alt='myImage' style={{height:"15em",width:"19em"}} />
            <img src={image4} alt='myImage' style={{height:"15em", width:"19em"}} />
            <img src={image5} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image6} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image7} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image8} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image9} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image10} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image11} alt='myImage' style={{height:"15em" ,width:"19em"}} />
            <img src={image12} alt='myImage' style={{height:"15em" ,width:"19em"}} />

        </div>

    )
}

export default SecondPage