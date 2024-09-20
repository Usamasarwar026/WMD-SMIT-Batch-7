import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Cityname } from '../constant/Cityname';
import { Container, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Form() {
    const [formvalue, setformvalue] = useState({
        userid: "",
        name: "",
        email: "",
        password: "",
        description: "",
        city: "",
        zipcode: "",
        address: "",
        gender: ""
    })

    const [Error, setErrors] = useState({
        userid: "",
        name: "",
        email: "",
        password: "",
        description: "",
        city: "",
        zipcode: "",
        address: "",
        gender: ""
    })

    const validate = () => {
        let isValid = true;
        let newError = {};
        let regax = /\S+@\S+\.\S+/;
        let alphabetRegex = /^[A-Za-z]+$/;
        let numericRegex = /^\d+$/;

        if (!formvalue.userid) {
            newError.userid = 'userID is required';
            isValid = false;
        }
        else if (formvalue.userid.length < 5 || formvalue.userid.length > 12) {
            newError.userid = "Length of userID should be between 5 to 12";
            isValid = false;
        }

        if (!formvalue.name) {
            newError.name = 'name is required';
            isValid = false;
        }
        else if (!alphabetRegex.test(formvalue.name)) {
            newError.name = "Name should contain only alphabets";
            isValid = false;
        }

        if (!formvalue.email) {
            newError.email = 'Email is required';
            isValid = false;
        }
        else if (!regax.test(formvalue.email)) {
            newError.email = 'Email is not valid';
            isValid = false;
        }

        if (!formvalue.password) {
            newError.password = 'Password is required';
            isValid = false;
        }
        else if (formvalue.password.length < 7 || formvalue.password.length > 10) {
            newError.password = 'Password should be between 7 to 10 characters';
            isValid = false;
        }

        if (!formvalue.description) {
            newError.description = "Please provide feedback or a message";
            isValid = false;
        }

        if (!formvalue.city) {
            newError.city = "City is required";
            isValid = false;
        }

        if (!formvalue.zipcode) {
            newError.zipcode = "Zipcode is required";
            isValid = false;
        }
        else if (!numericRegex.test(formvalue.zipcode)) {
            newError.zipcode = "Zipcode should be numeric";
            isValid = false;
        }

        if (!formvalue.gender) {
            newError.gender = "Gender is required";
            isValid = false;
        }

        setErrors(newError);
        return isValid;
    }

    const onfocus = (focus) => {
        setErrors({ ...Error, [focus]: '' });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformvalue({ ...formvalue, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            // alert('Form submitted successfully!');
             toast.success("Form submitted successfully!");
            console.log("Form submitted:", formvalue);
            setformvalue({
                userid: "",
                name: "",
                email: "",
                password: "",
                description: "",
                city: "",
                zipcode: "",
                address: "",
                gender: ""
            });
            setErrors({});
        }
    }

    return (
        <Container className='form'>
            <div style={{ textAlign: 'center', fontSize: 40, borderRadius: 10, marginTop: 10, padding: 5, color: 'white', backgroundColor: '#1976d2' }}>Registration Form</div>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                sx={{ flexGrow: 1, my: 4 }}
            >
                <Grid container spacing={2} justifyContent="center">
                    {/* User ID and Name */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='userid'
                            value={formvalue.userid}
                            onChange={handleInputChange}
                            error={!!Error.userid}
                            helperText={Error.userid}
                            onFocus={() => { onfocus('userid') }}
                            fullWidth
                            label="User ID"
                            placeholder='Enter your user ID'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='name'
                            value={formvalue.name}
                            onChange={handleInputChange}
                            error={!!Error.name}
                            helperText={Error.name}
                            onFocus={() => { onfocus('name') }}
                            fullWidth
                            label="Name"
                            placeholder='Enter your name'
                            variant="outlined"
                        />
                    </Grid>

                    {/* Email and Password */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='email'
                            value={formvalue.email}
                            onChange={handleInputChange}
                            error={!!Error.email}
                            helperText={Error.email}
                            onFocus={() => { onfocus('email') }}
                            fullWidth
                            label="Email"
                            placeholder='Enter your Email'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='password'
                            value={formvalue.password}
                            onChange={handleInputChange}
                            error={!!Error.password}
                            helperText={Error.password}
                            onFocus={() => { onfocus('password') }}
                            fullWidth
                            label="Password"
                            placeholder='Enter your Password'
                            variant="outlined"
                        />
                    </Grid>

                    {/* Address and Zip Code */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='Address'
                            value={formvalue.address}
                            onChange={handleInputChange}
                            error={!!Error.address}
                            helperText={Error.address}
                            onFocus={() => { onfocus('Address') }}
                            fullWidth
                            multiline
                            label="Address"
                            placeholder='Optional'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='zipcode'
                            value={formvalue.zipcode}
                            onChange={handleInputChange}
                            error={!!Error.zipcode}
                            helperText={Error.zipcode}
                            onFocus={() => { onfocus('zipcode') }}
                            fullWidth
                            label="Zip Code"
                            placeholder='Enter Zipcode'
                            variant="outlined"
                        />
                    </Grid>

                    {/* City Selection */}
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth error={!!Error.city}>
                            <InputLabel id="city-label">Select city</InputLabel>
                            <Select
                                name='city'
                                labelId="city-label"
                                value={formvalue.city}
                                onChange={handleInputChange}
                                onFocus={() => { onfocus('city') }}
                                label="Select city"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {Cityname.map((item, index) => {
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })}
                            </Select>
                            <FormHelperText>{Error.city}</FormHelperText>
                        </FormControl>
                    </Grid>
                    {/* Description */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            name='description'
                            value={formvalue.description}
                            onChange={handleInputChange}
                            error={!!Error.description}
                            helperText={Error.description}
                            onFocus={() => { onfocus('description') }}
                            fullWidth
                            multiline
                            label="Description"
                            placeholder='Type your message'
                            variant="outlined"
                        />
                    </Grid>


                    {/* Gender */}
                    <Grid item>
                        <FormControl fullWidth error={!!Error.gender}>
                            <FormLabel id="gender-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="gender-radio-buttons-group-label"
                                name="gender"  
                                value={formvalue.gender}
                                onChange={handleInputChange}
                                onFocus={() => { onfocus('gender') }}  
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormHelperText>{Error.gender}</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button style={{ width: '50%' }} type='submit' variant="contained">Submit</Button>
                    </Grid>
                    <ToastContainer/>
                </Grid>
            </Box>
        </Container>
    )
}

export default Form;
