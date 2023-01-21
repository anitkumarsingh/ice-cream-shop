import { Container } from 'react-bootstrap';
import { OrderDetailsProvider } from './context/OrderDetails';
import Order from './pages/Home/Order';
import SummaryForm from './pages/summary/SummaryForm';

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
