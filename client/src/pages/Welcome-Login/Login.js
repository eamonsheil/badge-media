import {useState} from 'react';


import { TextField, Box, Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const defObj = {email: "", password: ""}
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(defObj)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
       fetch(`/api/users/login`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(formData)
       })
       .then( res => res.json())
       .then( data => console.log(data))
       .catch( error => console.log(error.message));
       setFormData(defObj)
       navigate('/home')
    }
    return ( 
        <Container fixed>
        <Box> 
            <h1>login</h1>
            <form onSubmit={(e) =>handleSubmit(e)}>
                <TextField 
                    name='email'
                    label='email'
                    value={formData.email}
                    onChange={(e) =>handleChange(e)}
                    />
                <TextField 
                    name='password' 
                    label='password' 
                    type='password'
                    value={formData.password}
                    onChange={(e) =>handleChange(e)}
                    />
                    <Button 
                    type='submit'
                    variant='contained'
                    color='secondary'
                    >submit</Button>
            </form>
        </Box>
        </Container>
     );
}

export default Login;