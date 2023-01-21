import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';
import { useOrderDetails } from '../../context/OrderDetails';

const ToopingOption = ({ name, imagePath }) => {
	const { updateOptionCount } = useOrderDetails();

	const onCheckHandler = (e) => {
		updateOptionCount(name, e.target.checked ? 1 : 0, 'toppings');
	};

	return (
		<Col xs={12} sm={6} lg={4} xl={3} className='text-center'>
			<img width='75%' src={`${BASE_URL}/${imagePath}`} alt={`${name} toppings`} />
			<Form.Group controlId={`${name}-count`} as={Row} className='mt-5'>
				<Col xs='5' className='text-left'>
					<Form.Check type='checkbox' label={name} onChange={onCheckHandler} />
				</Col>
			</Form.Group>
		</Col>
	);
};

export default ToopingOption;
