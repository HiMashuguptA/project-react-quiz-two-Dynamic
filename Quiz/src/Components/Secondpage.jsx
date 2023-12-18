import React from "react";
import { useState } from "react";
export default function Secondpage(props){
    const[val,setval]=useState(0);
    const add=()=>{
        if(val<props.value.length-1){
            setval(val+1)
            console.log(setval);
        } 
    }
    const quit=()=>{
        alert("Are you sure want to Exit?")
    }
    const dec=()=>{
        if(val>0){
            setval(val-1)
        }
    }


    return(
        <div className="container">
            <div className="head">
                <h2>Question</h2>
                <p className="para">{val +1} of 15</p>
                <h4>{props.value[val].question}</h4>
            </div>
            <div className="buttons">
                <ol className="button-collection">
                    <li><button className="btns">{props.value[val].optionA}</button></li>
                    <li><button className="btns">{props.value[val].optionB}</button></li>
                    <li><button className="btns">{props.value[val].optionC}</button></li>
                    <li><button className="btns">{props.value[val].optionD}</button></li>
                </ol>
            </div>
            <div className="bottom">
                <div className="flex">
                <button className="btn3" onClick={dec} disabled={val === 0}>Previous</button>
                <button className="btn4" onClick={add} disabled={val === 15}>Next</button>
                <button className="btn5" onClick={quit}>Quit</button>
                </div>
            </div>

        </div>
    )
}