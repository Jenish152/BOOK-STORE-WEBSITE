import React from 'react';
import { TextField, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom"

//DAY-3 : IMPLEMENT UI USING MATERIAL-UI
export const Register=()=>{

    const registerd=()=> alert("your form submitted successfully!!");
    return(
        <React.Fragment>
            <h2>Register Form</h2>
            <form onSubmit={registerd}>
                <Box spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        fullWidth
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        fullWidth
                    />
                </Box>
                <TextField
                    type="email"
                    variant='outlined'
                    color='primary'
                    label="Email"
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
    );
}