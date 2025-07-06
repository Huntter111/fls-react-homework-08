import { Outlet } from 'react-router'
import GoHomeButton from '../components/GoHomeButton'
import Header from './components/Header'

const SimpleLayout = () => {
	return (
		<div>
			<Outlet />

			<GoHomeButton>На головну</GoHomeButton>
		</div>
	)
}

export default SimpleLayout
