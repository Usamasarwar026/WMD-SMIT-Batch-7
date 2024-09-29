import React from 'react';
import './home.css';
import Tableitem from '../../components/table_item/Tableitem';
import { Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Box, Typography } from '@mui/material';
import Studentinput from '../../components/stu_input/Studentinput';
import { useSelector } from 'react-redux';

function Home() {
    const students = useSelector((state) => state.students.students); 

    return (
        <Container maxWidth="lg" className='homecontent'>
            <h1>Student Record App</h1>
            <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
                <Studentinput />
            </Grid>

            <Box sx={{ overflowX: 'auto' }}>
                <Table className='tablebox' aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#7c1a50e6', color: 'white' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>Roll #</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>Age</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>Edit</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '17px', color: 'white' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ color: 'gray' }}>
                                        No records found.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            students.map((item) => (
                                <Tableitem key={item.id} item={item} />
                            ))
                        )}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
}

export default Home;
