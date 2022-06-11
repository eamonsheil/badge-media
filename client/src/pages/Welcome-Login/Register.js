import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'


function Register() {
    return ( 
        <Container fixed>
            <Box sx={{border: '1px dashed black'}}>
            <Stack spacing={2}>
                <form>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' placeholder='Email'/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' placeholder='Password'/>
                    </div>
                    {/* <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' placeholder='Password'/>
                    </div> */}
                    <button type='submit'>Submit</button>
                </form>
                Already have an account? <Link to='/login'>Login</Link>
            </Stack>
                

            </Box>
                

        </Container>
     );
}

export default Register;