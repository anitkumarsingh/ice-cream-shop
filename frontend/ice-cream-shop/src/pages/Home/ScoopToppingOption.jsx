import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';
import { useOrderDetails } from '../../context/OrderDetails';

const ScoopToppingOption = ({ name, imagePath, optionType }) => {
	console.log(optionType);
	const { updateOptionCount } = useOrderDetails();
	const handleChange = (e) =>
		updateOptionCount(name, parseInt(e.target.value), optionType);

	return (
		<Col xs={12} sm={6} lg={4} xl={3} className='text-center'>
			<img width='75%' src={`${BASE_URL}/${imagePath}`} alt={`${name} ${optionType}`} />
			<Form.Group controlId={`${name}-count`} as={Row} className='mt-5'>
				<Form.Label column xs='6' className='text-right'>
					{name}
				</Form.Label>
				<Col xs='5' className='text-left'>
					<Form.Control type='number' defaultValue={0} onChange={handleChange} />
				</Col>
			</Form.Group>
		</Col>
	);
};

export default ScoopToppingOption;
