import React from "react";
import { Button } from "@material-ui/core";

export const Contact=(props)=>{

    const submitt=()=> alert("email sent successfully!1");
    return(
        <>
        <h1>CONTACT PAGE</h1>
        <p>IF YOU HAVE ANY QUERY YOU CAN MAIL ON {props.mail}</p>
        <button class="btn btn-primary" onClick={submitt} type="submit">Submit form</button>
        <Button variant="contained" color="info">click me</Button>

        </>
    );
}