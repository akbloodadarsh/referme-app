import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Cookies from 'universal-cookie';

export default function Login() {
    const [values, setValues] = React.useState({
        username: '',
        password: ''
      });
    
    const cookies = new Cookies();

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    async function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "user_name": values.username,
                    "password": values.password,
                }
            )
        };
        
        await fetch(process.env.REACT_APP_API + "api/Users/authenticate-user", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            cookies.set('token', data.token, { path: '/' });
            console.log(cookies.get('token'))
        });
    }

  return (
    <div>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
                <TextField
                    name="username"
                    label="Username"
                    defaultValue={values.username}
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    label="Password"
                    defaultValue={values.password}
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={handleClick}>Login</Button>
        </Box>
    </div>
  )
}
