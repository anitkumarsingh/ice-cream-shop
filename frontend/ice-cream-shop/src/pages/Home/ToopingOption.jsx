import React from 'react';
import { Col } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api';

const ToopingOption = ({ name, imagePath }) => {
	return (
		<Col xs={12} sm={6} lg={4} xl={3} className='text-center'>
			<img width='75%' src={`${BASE_URL}/${imagePath}`} alt={`${name} tooping`} />
		</Col>
	);
};

export default ToopingOption;
