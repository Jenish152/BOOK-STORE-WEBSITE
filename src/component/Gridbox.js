import React from 'react'
import { Button,Grid,Paper } from "@material-ui/core";

const fun2=()=>{
    let no=prompt("enter number : 1 2 3 4")
    if(no=="1")
    {
        document.getElementById("1").style.backgroundColor="red";
        document.getElementById("2").style.backgroundColor="lightgreen";
        document.getElementById("3").style.backgroundColor="lightgreen";
        document.getElementById("4").style.backgroundColor="lightgreen";
    }
    if(no=="2")
    {
        document.getElementById("1").style.backgroundColor="lightgreen";
        document.getElementById("2").style.backgroundColor="red";
        document.getElementById("3").style.backgroundColor="lightgreen";
        document.getElementById("4").style.backgroundColor="lightgreen";
    }
    if(no=="3")
    {
        document.getElementById("1").style.backgroundColor="lightgreen";
        document.getElementById("2").style.backgroundColor="lightgreen";
        document.getElementById("3").style.backgroundColor="red";
        document.getElementById("4").style.backgroundColor="lightgreen";
    }
    if(no=="4")
    {
        document.getElementById("1").style.backgroundColor="lightgreen";
        document.getElementById("2").style.backgroundColor="lightgreen";
        document.getElementById("3").style.backgroundColor="lightgreen";
        document.getElementById("4").style.backgroundColor="red";
    }
   
   
 }
const Gridbox = () => {
  return (
    <>
    <h1>MaterialUi</h1>
    <Button variant="contained" onClick={fun2}>Change Color of Grid</Button>

  <div className="container" style={{marginTop:"5rem",height:"300px"}}>
    <Grid container spacing={2}>
  <Grid item xs={8}>
  <Paper elevation = {24} id="1" variant="outlined" style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=8 </h2> </Paper>
  </Grid>
  <Grid item xs={4}>
  <Paper elevation = {24} id="2" variant="outlined"  style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=4</h2> </Paper>
  </Grid>
  <Grid item xs={4}>
  <Paper elevation = {24} id="3" variant="outlined"  style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=4</h2> </Paper>
  </Grid>
  <Grid item xs={8}>
  <Paper elevation = {24} id="4" variant="outlined"  style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=8</h2></Paper>
  </Grid>
</Grid>
</div>
    </>
  )
}

export default Gridbox