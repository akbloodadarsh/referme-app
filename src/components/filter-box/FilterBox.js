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

export default function FilterBox({setFilterCriteria, filterCriteria, handleClick, setPostList}) {
    const [experience, setExperience] = React.useState(0);
    const [company, setCompany] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [city, setCity] = React.useState("");
    const [role, setRole] = React.useState("");
    
    const handleResetClick = (e) => {
        fetch(process.env.REACT_APP_API + "api/Posts/get-posts")
        .then((response) => response.json())
        .then((data) => {
            setPostList(data)
        });
        e.preventDefault();
    };

    const handleExperienceChange = (event, newValue) => {
        setExperience(newValue);
        setFilterCriteria({...filterCriteria, [event.target.name]: event.target.value})
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
        setFilterCriteria({...filterCriteria, [event.target.name]: event.target.value})
      };

    const handleChange = (event, newValue) => {
        if(event.name==="company")
            setCompany(newValue)
        else if(event.name==="position")
            setPosition(newValue)
        else if(event.name==="country")
            setCountry(newValue)
        else if(event.name==="city")
            setCity(newValue)

        setFilterCriteria({...filterCriteria, [event.target.name]: event.target.value})
    };

  return (
    <>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
                <Typography component={'span'} gutterBottom>
                    Experience: {experience}
                </Typography>
                <Slider
                    name="experience"
                    value={experience}
                    label="Experience"
                    min={0}
                    step={1}
                    max={10}
                    onChange={handleExperienceChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                />
                <TextField
                    name="company"
                    label="Company"
                    defaultValue={company}
                    onChange={handleChange}
                />
                <TextField
                    name="position"
                    label="Position"
                    defaultValue={position}
                    onChange={handleChange}
                />
                <TextField
                    name="city"
                    label="City"
                    defaultValue={city}
                    onChange={handleChange}
                />
                <TextField
                    name="country"
                    label="Country"
                    defaultValue={country}
                    onChange={handleChange}
                />
                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Role</InputLabel>
                    <Select
                    name="role"
                    value={role}
                    label="Role"
                    onChange={handleRoleChange}
                    >
                    <MenuItem value={"Intern"}>Intern</MenuItem>
                    <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
                    <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
                    <MenuItem value={""}>All</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={handleClick}>Search</Button>
                <Button variant="contained" onClick={handleResetClick}>Reset</Button>
            </div>
        </Box>
    </>
  )
}
