import { Button, TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteStudent, setCurrentStudent} from '../../redux/studentSlice/studentSlice';

function Tableitem({item}) {
    const dispatch = useDispatch();

    const UpdateHandler = ()=>{
        dispatch(setCurrentStudent(item));
    }

    const deleteHandler = ()=>{
        dispatch(deleteStudent(item.id))
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, mb: 1 }}>
            <TableCell>{item?.id}</TableCell>
            <TableCell>{item?.name}</TableCell>
            <TableCell>{item?.rollno}</TableCell>
            <TableCell>{item?.age}</TableCell>
            <TableCell>{item?.email}</TableCell>
            <TableCell>
                <Button
                    variant='contained'
                    color='info'
                    startIcon={<EditIcon />}
                    onClick={UpdateHandler}
                >
                    Edit
                </Button>
            </TableCell>
            <TableCell>
                <Button
                    variant='contained'
                    color='error'
                    startIcon={<DeleteIcon />}
                    onClick={deleteHandler}
                >
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default Tableitem;
