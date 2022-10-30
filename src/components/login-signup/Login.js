import React from 'react'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Login() {
    const [values, setValues] = React.useState({
        username: '',
        password: ''
      });

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    async function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "user_id": "",
                    "user_name": values.username,
                    "first_name": "",
                    "middle_name": "",
                    "last_name": "",
                    "password": values.password,
                    "date_of_birth": "",
                    "gender": "",
                    "skill": [],
                    "profile_pic": "",
                    "gmail": "",
                    "resume": ""
                }
            )
        };
        
        await fetch(process.env.REACT_APP_API + "api/Users/authenticate-user", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.token)
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
