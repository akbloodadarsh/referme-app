import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Cookies from 'universal-cookie';

export default function Login({setUserId}) {
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
            //uncomment to check the response
            //console.log(data)
            //uncomment to check the value of user_id
            //console.log(data['user_id'])
            // uncomment to check token value
            //console.log(data['token'])
            
            cookies.set('token', data['token'], { path: '/' });
            setUserId(data['user_id'])
            console.log('from login data'+ data['user_id'])
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
