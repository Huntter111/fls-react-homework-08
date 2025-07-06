import { useLocation, useNavigate } from 'react-router'
import frontRoutes from '../../../routes/frontRoutes'

const TeacherCard = ({
	teacher,
	onSelect,
	isSelected,
	deleteTeacher,
	isDeleting,
}) => {
	const navigate = useNavigate()
	const location = useLocation()

	const editAndDelete =
		location.pathname === frontRoutes.navigate.teachers.index

	function handleEdit(id) {
		navigate(frontRoutes.navigate.teachers.edit(id), {
			state: {
				teacher,
			},
		})
	}

	return (
		<div>
			<div className="flex gap-4 flex-wrap flex-col items-center border border-green-700 p-4 rounded-[16px] shadow-2xl md:flex-row md:gap-2">
				<div className="flex flex-wrap items-center justify-center flex-grow gap-4 sm:justify-start">
					<div className="overflow-hidden w-28 h-28">
						<img
							src={teacher.photo}
							alt={`photo ${teacher.name}`}
							className="object-cover rounded-full aspect-square"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-medium text-green-700">
							{teacher.name}
						</h3>
						<h5 className="font-medium">
							Предмет:{' '}
							<span className="font-normal text-gray-500">
								{teacher.subject}
							</span>
						</h5>
					</div>
				</div>
				<div>
					{onSelect && (
						<button
							className={isSelected ? 'button' : 'button button--blue'}
							onClick={() => onSelect(teacher.id)}
						>
							{isSelected ? 'Вибрано' : 'Вибрати на збори'}
						</button>
					)}
				</div>
			</div>
			{editAndDelete && (
				<div className="grid gap-4 mt-4 mb-8 sm:grid-cols-2">
					<button
						className="button button--edit"
						onClick={() => handleEdit(teacher.id)}
					>
						Редагувати
					</button>
					<button
						className="button button--remove"
						onClick={() => deleteTeacher(teacher.id)}
					>
						{isDeleting ? 'Видалення...' : 'Видалити'}
					</button>
				</div>
			)}
		</div>
	)
}

export default TeacherCard
