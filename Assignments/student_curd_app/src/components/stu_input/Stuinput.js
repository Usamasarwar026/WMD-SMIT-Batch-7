import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import * as yup from "yup";
import UpgradeIcon from '@mui/icons-material/Upgrade';

function Stuinput(props) {
    const [name, setName] = useState('');
    const [rollno, setRollno] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (props.currentStudent) {
            setName(props.currentStudent.name);
            setRollno(props.currentStudent.rollno);
            setAge(props.currentStudent.age);
            setEmail(props.currentStudent.email);
        }
    }, [props.currentStudent]);

   
    let userSchema = yup.object().shape({
        name: yup.string().max(20, 'Name can be at most 20 characters').required('Name is required'),
        rollno: yup.string().max(10, 'Maximum 10 characters allowed').required('Roll no is required'),
        age: yup.number().typeError('Age must be a number').positive('Age must be positive').integer('Age must be an integer').required('Age is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
    });

    const onClickHandler = async () => {
        let studentData = {
            name: name,
            rollno: rollno,
            age: Number(age), 
            email: email,
        };

        try {
            await userSchema.validate(studentData, { abortEarly: false });
            setErrors({});

            // Check if it's an update or add operation
            if (props.currentStudent) {
                props.UpdateHandler(studentData, props.currentStudent.id);
            } else {
                props.addHandler(studentData);
            }

            setName('');
            setRollno('');
            setAge('');
            setEmail('');
        } catch (validationErrors) {
            let errorMessages = {};
            if (validationErrors.inner && validationErrors.inner.length > 0) {
                validationErrors.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
            }
            setErrors(errorMessages);
        }
    };

    return (
        <div>
            <Container className='stucontent' style={{
                boxShadow: '1px 1px 5px black',
                padding: '10px'
            }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                        width: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                style={{ width: '90%' }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="rollno"
                                label="Roll no"
                                variant="outlined"
                                style={{ width: '90%' }}
                                value={rollno}
                                onChange={(e) => setRollno(e.target.value)}
                                error={!!errors.rollno}
                                helperText={errors.rollno}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="age"
                                label="Age"
                                variant="outlined"
                                style={{ width: '90%' }}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                error={!!errors.age}
                                helperText={errors.age}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                style={{ width: '90%' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ ml: 1,textTransform: 'none', fontSize: '17px' }}
                                onClick={onClickHandler}
                                endIcon={props.currentStudent ? <UpgradeIcon/> : <AddIcon />} // Adjusting button icon
                            >
                                {props.currentStudent ? "Update" : "Add"} student
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default Stuinput;
