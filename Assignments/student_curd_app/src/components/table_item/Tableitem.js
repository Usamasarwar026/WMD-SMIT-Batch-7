import { Button, TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Tableitem(props) {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, mb: 1 }}>
            <TableCell>{props.item?.id}</TableCell>
            <TableCell>{props.item?.name}</TableCell>
            <TableCell>{props.item?.rollno}</TableCell>
            <TableCell>{props.item?.age}</TableCell>
            <TableCell>{props.item?.email}</TableCell>
            <TableCell>
                <Button 
                    variant='contained' 
                    color='warning' 
                    startIcon={<EditIcon />} 
                    onClick={() => props.ClickUpdateHandler(props.item)}
                >
                    Edit
                </Button>
            </TableCell>
            <TableCell>
                <Button 
                    variant='contained' 
                    color='error' 
                    startIcon={<DeleteIcon />} 
                    onClick={() => props.deleteHandler(props.item?.id)}
                >
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default Tableitem;
