import { useState } from 'react';
import { Box, Container, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defObj = {name: "", email: "", password: ""}

function Register() {
    const [formData, setFormData] = useState(defObj)
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/api/users/register`, {
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
    }
    return ( 
        <Container fixed>
            <Box>
                <form onSubmit={(e) =>handleSubmit(e)}>
                <TextField 
                    name='name'
                    label='name'
                    value={formData.name}
                    onChange={(e) =>handleChange(e)}
                    />
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

export default Register;