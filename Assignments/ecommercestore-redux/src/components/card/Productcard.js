import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './productcard.css';
import { useDispatch } from 'react-redux';
import { deleteProductApiAction } from '../../store/slices/productSlices';

function Productcard(props) {
    const dispatch = useDispatch();

    // Handle Delete Product
    const onClickDeleteProduct = (id) => {
        console.log("delete product id", id);
        dispatch(deleteProductApiAction(id));
    };

    return (
        <Card style={{ width: '16rem' }} className='h-100 text-center p-4' key={props?.product?.id}>
            <Card.Img variant="top" src={props?.product?.image} height={250} />
            <Card.Body>
                <Card.Title className='mb-0'>{props?.product?.title.substring(0, 12)}...</Card.Title>
                <Card.Text className='lead fw-bold'>
                    ${props?.product?.price}
                </Card.Text>
                <Link to={`/products/${props?.product.id}`} className='btn custom-btn'>
                    Buy Now
                </Link>
                <button 
                    className='btn custom-btn mx-2'
                    onClick={() => onClickDeleteProduct(props?.product.id)}>
                    Delete
                </button>
                <Link 
                    to={`/updateproduct/${props?.product?.id}`} 
                    className='btn custom-btn' 
                    state={{ product: props?.product }}>
                    Update 
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Productcard;
