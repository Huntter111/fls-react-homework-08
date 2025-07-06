import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'

const GoHomeButton = ({ children }) => {
	const navigate = useNavigate()
	function goHome() {
		navigate(frontRoutes.navigate.home)
	}
	return (
		<button onClick={goHome} className="button">
			{children}
		</button>
	)
}

export default GoHomeButton
