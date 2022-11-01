import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Login() {
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        gender: 'Male'
      });

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleDateChange = (newValue) => {
        setValues({ ...values, ["date_of_birth"]: newValue });
    }

    async function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "user_name": values.username,
                    "password": values.password,
                    "first_name": values.first_name,
                    "middle_name": values.middle_name,
                    "last_name": values.last_name,
                    "date_of_birth": values.date_of_birth,
                    "gender": values.gender,
                }
            )
        };
        
        console.log(requestOptions.body)
        await fetch(process.env.REACT_APP_API + "api/Users/create-user", requestOptions)
        .then((response) => response.json())
        .then((response) => {
            // uncomment this line seeing the message of user created
            // console.log(response.data)
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
                    required
                    name="username"
                    label="Username"
                    defaultValue={values.username}
                    onChange={handleChange}
                />
                <TextField
                    required
                    name="password"
                    label="Password"
                    defaultValue={values.password}
                    onChange={handleChange}
                />
                <TextField
                    required
                    name="first_name"
                    label="First Name"
                    defaultValue={values.first_name}
                    onChange={handleChange}
                />
                <TextField
                    name="middle_name"
                    label="Middle Name"
                    defaultValue={values.middle_name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    name="last_name"
                    label="Last Name"
                    defaultValue={values.last_name}
                    onChange={handleChange}
                />

                <Select sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                name="gender"
                required
                value={values.gender}
                label="Gender"
                onChange={handleChange}
                >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        required
                        name="date_of_birth"
                        label="Date Of Birth"
                        inputFormat="DD/MM/YYYY"
                        value={values.date_of_birth}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <Button variant="contained" onClick={handleClick}>SignUp</Button>
        </Box>
    </div>
  )
}
