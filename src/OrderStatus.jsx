import { render } from '@testing-library/react';
import './OrderStatus.css';

export default function OrderStatus() {

    const renderColumn = (
    <div className="column">
      
        <div className='card'>
            <p>Order status will be displayed here.</p>
        </div>
    
    </div>
  );

    return (
        <>
        <h1 className="order-title"> Order Status </h1>
        <div className="order-status-container">
            <div className="columns">
            {renderColumn}
            {renderColumn}
            </div>
        </div>
        </>
    );
}