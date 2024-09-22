import React, { useEffect, useState } from 'react';
import './home.css';
import Tableitem from '../../components/table_item/Tableitem';
import { Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Box, Typography } from '@mui/material';
import Stuinput from '../../components/stu_input/Stuinput';

function Home() {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('studentData');
        return savedData ? JSON.parse(savedData) : [];
    });
    const [currentStudent, setCurrentStudent] = useState(null);

    useEffect(() => {
        localStorage.setItem('studentData', JSON.stringify(data));
    }, [data]);

    const ClickUpdateHandler = (student) => {
        setCurrentStudent(student);
    };

    const deleteHandler = (id) => {
        const newData = data.filter(item => item.id !== id);
        
        const updatedData = newData.map((item, index) => ({
            ...item,
            id: index + 1 
        }));
        
        setData(updatedData);
    };

    const UpdateHandler = (student, id) => {
        const newData = data.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: student.name,
                    email: student.email,
                    rollno: student.rollno,
                    age: student.age
                };
            }
            return item;
        });
        setData(newData);
        setCurrentStudent(null);
    };
    
    const addHandler = (student) => {
        setData([...data, {
            id: data.length + 1,
            name: student.name,
            rollno: student.rollno,
            age: student.age,
            email: student.email
        }]);
    };
    

    return (
        <Container maxWidth="lg" className='homecontent'>
            <h1>Student Record App</h1>
            <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
                <Stuinput
                    addHandler={addHandler}
                    UpdateHandler={UpdateHandler}
                    currentStudent={currentStudent}
                />
            </Grid>

            <Box sx={{ overflowX: 'auto' }}>
                <Table className='tablebox' aria-label="simple table"  >
                    <TableHead sx={{ backgroundColor: '#838383', color: 'white' }}>
                        <TableRow >
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>Roll #</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>Age</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>Edit</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px',color: 'white' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ color: 'gray' }}>
                                        No records found.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((item) => (
                                <Tableitem key={item.id} item={item} ClickUpdateHandler={ClickUpdateHandler} deleteHandler={deleteHandler} />
                            ))
                        )}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
}

export default Home;
