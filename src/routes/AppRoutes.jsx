import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import SimpleLayout from '../layouts/SimpleLayout'
import frontRoutes from './frontRoutes'
import Home from '../pages/Home'
import TeachersList from '../pages/teachers/TeachersList'
import TeachersForm from '../pages/teachers/TeachersForm'
import TeachersDetail from '../pages/teachers/TeachersDetail'
import Meeting from '../pages/Meeting'
import AboutApp from '../pages/AboutApp'
import AboutDev from '../pages/AboutDev'
import Page404 from '../pages/Page404'

const AppRoutes = () => {
	return (
		<Routes>
			{/* Main Layout */}
			<Route element={<MainLayout />}>
				<Route path={frontRoutes.pages.home} element={<Home />} />
				<Route path={frontRoutes.pages.teachers.index}>
					<Route index element={<TeachersList />} />
					<Route
						path={frontRoutes.pages.teachers.add}
						element={<TeachersForm />}
					/>
					<Route
						path={frontRoutes.pages.teachers.edit}
						element={<TeachersForm />}
					/>
					<Route
						path={frontRoutes.pages.teachers.detail}
						element={<TeachersDetail />}
					/>
				</Route>
				<Route path={frontRoutes.pages.meeting} element={<Meeting />} />
			</Route>
			{/* Simple Layout */}
			<Route element={<SimpleLayout />}>
				<Route path={frontRoutes.pages.aboutApp} element={<AboutApp />} />
				<Route path={frontRoutes.pages.aboutDev} element={<AboutDev />} />
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes
