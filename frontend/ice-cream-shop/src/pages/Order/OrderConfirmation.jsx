import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';
import { useOrderDetails } from '../../context/OrderDetails';

const OrderConfirmation = ({ setOrderPhase }) => {
	const { resetOrder } = useOrderDetails();
	const [orderNo, setOrderNo] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		axios
			.post(`${BASE_URL}/order`, { signal: controller.signal })
			.then((res) => {
				setOrderNo(res.data.orderNumber);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err.name !== 'CanceledError') {
					setIsError(true);
					setIsLoading(false);
				}
			});
		return () => controller.abort();
	}, []);

	const newOrderPhase = () => {
		setOrderPhase('inProgress');
		resetOrder();
	};
	if (isLoading) return <p>Loading...</p>;
	return (
		<div className='text-center'>
			<h1>Thank you!</h1>
			<h3>Your order number is {orderNo}</h3>
			<p>ad per our terms and conditions, nothing will happen now.</p>
			<Button variant='primary' onClick={() => newOrderPhase()}>
				Create new order
			</Button>
		</div>
	);
};

export default OrderConfirmation;
