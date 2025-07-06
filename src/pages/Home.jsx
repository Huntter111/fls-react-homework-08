import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'

const Home = () => {
	const navigate = useNavigate()
	const goToMeeting = () => {
		navigate(frontRoutes.navigate.meeting)
	}
	const goToTeachers = () => {
		navigate(frontRoutes.navigate.teachers.index)
	}
	return (
		<div className="py-8">
			<div className="container">
				<div className="flex flex-col items-start w-full gap-2 p-4 box-shadow rounded-2xl">
					<h1 className="text-4xl font-semibold text-green-700 ">
						Ласкова просимо до Додатку "Вчителі"
					</h1>
					<div className="mb-8">
						<p>
							Цей додаток допоможе керувати інформацією про вчителів, викликати
							їх на збори та дізнаватись про розробника
						</p>
					</div>
					<div className="flex flex-wrap w-full gap-4 sm:w-max">
						<button className="button" onClick={goToTeachers}>
							Переглянути вчителів
						</button>
						<button className="button" onClick={goToMeeting}>
							Переглянути список для зборів
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
