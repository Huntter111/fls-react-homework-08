import { useLocation, useNavigate } from 'react-router'
import TeacherCard from './teachers/components/TeacherCard'
import frontRoutes from '../routes/frontRoutes'

const Meeting = () => {
	const { state } = useLocation()
	const navigate = useNavigate()
	function goToTeachersList() {
		navigate(frontRoutes.navigate.teachers.index)
	}
	console.log(
		' goToTeachersList ~ frontRoutes.navigate.teachers:',
		frontRoutes.navigate.teachers.index,
	)
	const numbersOfTeachers = state?.teachers.length

	let content
	if (state?.teachers)
		content = (
			<div className="flex flex-col gap-4">
				{state.teachers.map((teacher) => (
					<TeacherCard key={teacher.id} teacher={teacher} />
				))}
			</div>
		)
	else
		content = (
			<div className="">
				<h2 className="w-full p-4 my-4 rounded-[8px] bg-blue-300/50 text-start font-bold text-blue-950">
					Список вчителів для зборів порожній
				</h2>
			</div>
		)
	return (
		<div className="container">
			<div className="p-4 my-4 rounded-md box-shadow">
				<h1 className="my-10 text-4xl font-bold text-green-700">
					Учасники зборів
				</h1>
				{!!numbersOfTeachers && (
					<h2 className=" w-full p-4 my-4 rounded-[8px] bg-blue-300/50 text-start font-bold text-blue-950">
						Список вчителів ({numbersOfTeachers}) для виклику на збори:{' '}
					</h2>
				)}
				<div className="mb-8">{content}</div>
				<div className="flex ">
					<button className="button" onClick={goToTeachersList}>
						Повернутися до списку вчителів
					</button>
				</div>
			</div>
		</div>
	)
}

export default Meeting
