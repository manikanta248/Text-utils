/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Textspace(props){
    const ConverttoUp=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const ConverttoLow=()=>{
        let newtext1=text.toLowerCase();
        setText(newtext1)
    }
    const Capitalize=()=>{
        let newtext3 = text;

        // Capitalize the first letter of the string
        if (newtext3[0]!=newtext3[0].toUpperCase()) {
            newtext3 = newtext3[0].toUpperCase() + newtext3.slice(1);
        }
        

        let result = "";

        for (let i = 0; i < newtext3.length; i++) {
            if (newtext3[i] === '.' && i + 1 < newtext3.length && newtext3[i + 1] !== newtext3[i + 1].toUpperCase()) {
                result += newtext3[i]; // Add the period as is
                result += newtext3[i + 1].toUpperCase(); // Capitalize the next character
                i++; // Increment i to skip the character we just capitalized
            } 
            else {
                result += newtext3[i];
            }
        }
        
        setText(result)
    }
    const Clear=()=>{
        setText("")
    }
    const convertonChange=()=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("");

    return(
        <div className="container">
        <div className=" mb-5" style={{color:props.mode=='dark'?'white':'black'}}>
            <div className="my-2">{props.heading}</div>
            <div className="container">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode=='dark'?'gray':'white'}} onChange={convertonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-2" onClick={ConverttoUp}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={ConverttoLow}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={Capitalize}>Capitalier</button>
            <button className="btn btn-primary my-2 mx-2" onClick={Clear}>Clear</button>
        </div>
        <div className="container my-2" style={{color:props.mode=='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
            <p>Average time required to read your text : {(text.split(" ").length-1)*0.8} Minutes</p>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>

        </div>
    )
}
export default Textspace;