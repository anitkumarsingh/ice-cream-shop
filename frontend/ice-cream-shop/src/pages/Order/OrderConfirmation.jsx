import React from 'react';
import { useOrderDetails } from '../../context/OrderDetails';

const OrderConfirmation = ({ setOrderPhase }) => {
	const { resetOrder } = useOrderDetails();

	const newOrderPhase = () => {
		setOrderPhase('inProgress');
		resetOrder();
	};

	return (
		<div className='text-center'>
			<h1>Thank you!</h1>
			<h3>Your order number is {}</h3>
			<p>ad per our terms and conditions, nothing will happen now.</p>
			<button onClick={() => newOrderPhase()}>Create new order</button>
		</div>
	);
};

export default OrderConfirmation;
