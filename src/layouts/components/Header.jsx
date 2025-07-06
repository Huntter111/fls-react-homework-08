import { NavLink } from 'react-router'
import styles from './Header.module.css'
import frontRoutes from '../../routes/frontRoutes'
const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<nav className="flex flex-wrap gap-x-4">
					<NavLink
						to={frontRoutes.navigate.home}
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						Home
					</NavLink>
					<NavLink
						to={frontRoutes.navigate.teachers.index}
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						Teachers
					</NavLink>
					<NavLink
						to={frontRoutes.navigate.meeting}
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						Meeting
					</NavLink>
					<NavLink
						to={frontRoutes.navigate.aboutApp}
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						About App
					</NavLink>
					<NavLink
						to={frontRoutes.navigate.aboutDev}
						className={({ isActive }) =>
							isActive ? styles.active : styles.link
						}
					>
						About Dev
					</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
