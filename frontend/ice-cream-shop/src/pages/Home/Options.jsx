import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';
import ToppingOption from './ToopingOption';
import AlertBanner from '../../components/Alert';

const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/${optionType}`)
			.then((response) => {
				setItems(response.data);
			})
			.catch((err) => setIsError(true));
	}, [optionType]);
	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

	const renderOptions = items.map((item) => (
		<ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
	));

	if (isError) return <AlertBanner />;
	return <Row>{renderOptions}</Row>;
};

export default Options;
