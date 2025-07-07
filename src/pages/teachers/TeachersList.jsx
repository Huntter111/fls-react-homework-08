import { useNavigate } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import useTeachersApi from '../../hooks/useTeachersApi'
import { useEffect, useState } from 'react'
import TeacherCard from './components/TeacherCard'
import Modal from '../../components/Modal/Modal'
import Loader from '../../components/Loader/Loader'
const TeachersList = () => {
	const navigate = useNavigate()
	const {
		data: teachersList,
		isLoading,
		error,
		fetchTeachers,
		deleteTeacher,
	} = useTeachersApi()
	const [modal, setModal] = useState(false)
	const [selectedTeachersId, setSelectedTeachersId] = useState([])
	const [teacherIdToDelete, setTeacherIdToDelete] = useState(null)

	useEffect(() => {
		fetchTeachers()
	}, [fetchTeachers])

	function goToMeeting() {
		navigate(frontRoutes.navigate.meeting, {
			state: {
				teachers: teachersList.filter((teacher) =>
					selectedTeachersId.includes(teacher.id),
				),
			},
		})
	}
	function addTeacher() {
		navigate(frontRoutes.pages.teachers.add)
	}
	const handleDeleteTeacher = async (id) => {
		setTeacherIdToDelete(id)
		setModal(true)
	}

	const confirmDelete = async () => {
		setModal(false)
		try {
			await deleteTeacher(teacherIdToDelete)
			await fetchTeachers()
		} finally {
			setTeacherIdToDelete(null)
		}
	}
	const cancelDelete = () => {
		setModal(false)
		setTeacherIdToDelete(null)
	}
	function onSelect(id) {
		setSelectedTeachersId((prev) =>
			prev.includes(id) ? prev.filter((tId) => tId !== id) : [...prev, id],
		)
	}

	let content
	if (isLoading)
		content = (
			<div className="flex items-center justify-center h-[60vh]">
				<div className="flex flex-col items-center gap-4">
					<Loader /> Завантаження даних...
				</div>
			</div>
		)
	else if (error)
		content = (
			<div className="flex items-center justify-center h-[30vh]">
				<h2 className="text-2xl text-red-600">{error.message}</h2>
			</div>
		)
	else
		content = teachersList.map((teacher) => (
			<TeacherCard
				key={teacher.id}
				teacher={teacher}
				deleteTeacher={handleDeleteTeacher}
				onSelect={onSelect}
				isSelected={selectedTeachersId.includes(teacher.id)}
			/>
		))

	return (
		<div className="container">
			<Modal visible={modal} setVisible={setModal}>
				<div className="flex flex-col items-center gap-4 ">
					<h2 className="mb-4 text-xl">Ви дійсно хочете видали вчителя?</h2>
					<div className="flex flex-wrap gap-4">
						<button className="w-full button md:w-max" onClick={confirmDelete}>
							Так, видалити
						</button>
						<button className="w-full button md:w-max" onClick={cancelDelete}>
							Ні, скасувати
						</button>
					</div>
				</div>
			</Modal>
			<div className="max-w-4xl m-auto my-0 ">
				<h1 className="my-10 text-4xl font-bold text-green-700 md:text-6xl">
					Список вчителів
				</h1>
				{!isLoading && !error && (
					<div className="grid gap-2 mb-4 md:grid-cols-2 justify-items-center">
						<button className="w-full md:w-max button" onClick={addTeacher}>
							Додати нового вчителя
						</button>
						{selectedTeachersId.length ? (
							<button
								className="w-full md:w-max button button--blue"
								onClick={goToMeeting}
							>
								Викликати {selectedTeachersId.length}{' '}
								{selectedTeachersId.length === 1 ? 'вчителя' : 'вчителів'} на
								збори
							</button>
						) : (
							<div className="min-w-[200px] min-h-[44px]"></div>
						)}
					</div>
				)}
				<div className="flex flex-col gap-6 ">{content}</div>
				{!isLoading && !error && (
					<div className="mt-2 mb-4">
						<button
							disabled={!selectedTeachersId.length}
							className="button"
							onClick={goToMeeting}
						>
							Викликати на збори
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default TeachersList
