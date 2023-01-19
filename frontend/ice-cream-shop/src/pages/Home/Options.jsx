import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';

const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/${optionType}`)
			.then((response) => {
				setItems(response.data);
			})
			.catch((err) => console.log(err));
	}, [optionType]);
	const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

	const renderOptions = items.map((item) => (
		<ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
	));

	return <Row>{renderOptions}</Row>;
};

export default Options;
