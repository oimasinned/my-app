import './Order.css';

export default function Order(props) {
    // This component can be expanded to show order details

    return (
        <div className="order">
            <h2 className="order-title">{props.name}</h2>
            <p className="order-description">{props.quantity}</p>
        </div>
    );
}