import {React,useState} from 'react';
import { Button,Card,Typography } from "@material-ui/core";


import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';


const Wrapper = styled.section`
   .counter{
    font-size:50px;
   
   }
   .card{
    text-align:center;
    width:40%;
    background-color:lightpink; 
    margin: 50px auto;
   }
   .bt{
    font-size:50px;
  }
  input{
   margin:0 700px;
   width:300px;
   height:30px;
  }
`;


//using custome theme ,Typography
const Custometheme=()=>{
    const [counter,setCounter]=useState(0);
    const [text,changeText]=useState("");

    const inc=()=>{
        setCounter(counter+1)
    }
    const dec=()=>{
        setCounter(counter-1)
    }
    const fun=(e)=>{
        changeText(e.target.value)
    }
    return(
        <>
        <Wrapper>
        <Typography variant="h2"  color="secondary">This is created using Typograophy.</Typography>
       
        <Card variant="outlined" className="card">
            <div className="counter">{counter}</div>
        <Button onClick={dec}  size="large" ><IndeterminateCheckBoxIcon className="bt" style={{marginBottom:"1.5rem"}}/></Button>
        <Button  onClick={inc} ><AddCircleIcon className="bt" style={{marginBottom:"1.5rem"}}></AddCircleIcon></Button>
        </Card >
        <input type="text" onChange={fun}></input>
        <h2>{text}</h2>
        </Wrapper>
        </>
    )
}
export default Custometheme;