import React from 'react'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function CreatePost({userId, setPostList}) {
    
    const [values, setValues] = React.useState({
        experience: 0,
        company: '',
        position: '',
        country: '',
        city: '',
        role: '',
        delete_on: '',
        post_description:''
      });

      async function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "experience_required": values.experience,
                    "for_company": values.company,
                    "position": values.position,
                    "job_location_country": values.country,
                    "job_location_city": values.city,
                    "role": values.role,
                    "delete_on": values.delete_on,
                    // user_id is coming from App as props
                    "user_id": userId,
                    "post_description": values.post_description,
                }
            )
        };
        
        // to check request body
        console.log(requestOptions.body)
        await fetch(process.env.REACT_APP_API + "api/Posts/create-post", requestOptions)
        .then((response) => response.json())
        .then((response) => {
            // uncomment this line seeing the message
            console.log(response["status"])

            // Update all the post List with new data
            fetch(process.env.REACT_APP_API + "api/Posts/get-posts")
            .then((response) => response.json())
            .then((data) => {
                setPostList(data)
            }); 
        });
    }

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleDateChange = (newValue) => {
        setValues({ ...values, "delete_on": newValue });
    }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>Create Post</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                        Experience: {values.experience}
                    </Typography>

                    <Slider
                        name="experience"
                        value={values.experience}
                        label="Experience"
                        min={0}
                        step={1}
                        max={10}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />

                    <TextField
                        name="company"
                        label="Company"
                        defaultValue={values.company}
                        onChange={handleChange}
                    />

                    <TextField
                        name="position"
                        label="Position"
                        defaultValue={values.position}
                        onChange={handleChange}
                    />

                    <TextField
                        name="city"
                        label="City"
                        defaultValue={values.city}
                        onChange={handleChange}
                    />

                    <TextField
                        name="country"
                        label="Country"
                        defaultValue={values.country}
                        onChange={handleChange}
                    />

                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>Role</InputLabel>
                        <Select
                        name="role"
                        value={values.role}
                        label="Role"
                        onChange={handleChange}
                        >
                        <MenuItem value={"Intern"}>Intern</MenuItem>
                        <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
                        <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
                        <MenuItem value={""}>All</MenuItem>
                        </Select>
                    </FormControl>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            required
                            name="delete_on"
                            label="Delete On"
                            inputFormat="DD/MM/YYYY"
                            value={values.delete_on}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <TextField
                        name="post_description"
                        label="Description"
                        defaultValue={values.post_description}
                        onChange={handleChange}
                    />
                    
                    <Button variant="contained" onClick={handleClick}>Create</Button>
                </div>
            </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
