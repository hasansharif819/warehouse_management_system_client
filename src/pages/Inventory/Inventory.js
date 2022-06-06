import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { img, name, _id, price, supplier } = inventory;
    const navigate = useNavigate()

    const navigateToDetail = _id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mobile'>
            <img height={300} width={300} src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Supplier: {supplier}</p>
                <Link to={`/inventory/${_id}`}><button onClick={() => navigateToDetail(_id)}>Details</button></Link>
            </div>
        </div>
    );
};

export default Inventory;