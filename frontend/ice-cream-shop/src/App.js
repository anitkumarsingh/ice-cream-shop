import { Container } from 'react-bootstrap';
import { OrderDetailsProvider } from './context/OrderDetails';
import Order from './pages/Home/Order';

const App = () => {
	return (
		<Container>
			<OrderDetailsProvider>
				<Order />
			</OrderDetailsProvider>
		</Container>
	);
};

export default App;
