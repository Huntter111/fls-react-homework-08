import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import useTeachersApi from '../../hooks/useTeachersApi'

const TeachersForm = () => {
	const { state } = useLocation()
	const { id } = useParams()
	const navigate = useNavigate()
	const { updateTeacher, addTeacher } = useTeachersApi()
	const [teacher, setTeacher] = useState(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	useEffect(() => {
		if (id && state) {
			setTeacher(state.teacher)
		} else {
			navigate(frontRoutes.navigate.teachers.add)
		}
	}, [id, state, navigate])

	function cancelChanges() {
		navigate(frontRoutes.navigate.teachers.index)
	}
	const handleSubmit = async (e) => {
		setIsSubmitting(true)
		e.preventDefault()
		const formData = {
			name: e.target.name.value,
			subject: e.target.subject.value,
			photo: e.target.photo.value,
		}
		try {
			if (id) {
				await updateTeacher(id, formData)
				console.log('Вчителя оновлено')
			} else {
				await addTeacher(formData)
			}
			navigate(frontRoutes.navigate.teachers.index)
		} finally {
			setIsSubmitting(false)
		}
	}
	const getButtonLabel = () => {
		if (isSubmitting) {
			return state?.teacher ? 'Оновлюється...' : 'Додається...'
		}
		return state?.teacher ? 'Оновити вчителя' : 'Додати вчителя'
	}

	return (
		<div className="container">
			<div className="p-4 my-10 box-shadow rounded-[8px] max-w-4xl m-auto">
				<div className="mb-8">
					<h1 className="text-xl font-bold text-green-700 md:text-6xl ">
						{!state?.teacher ? 'Додати вчителя' : 'Редагувати вчителя'}
					</h1>
				</div>
				<form onSubmit={handleSubmit} className="grid gap-4">
					<label className="label">
						Ім'я:
						<input
							type="text"
							defaultValue={teacher?.name}
							name="name"
							placeholder="Введіть ім'я вчителя"
							className="input"
							required
						/>
					</label>
					<label className="label">
						Предмет:
						<input
							type="text"
							defaultValue={teacher?.subject}
							name="subject"
							placeholder="Введіть предмет викладання"
							className="input"
							required
						/>
					</label>
					<label className="label">
						Фото URL (не обов'язково):
						<input
							type="text"
							defaultValue={teacher?.photo}
							className="input"
							name="photo"
							placeholder="Введіть URL фотографії"
						/>
					</label>
					<div className="flex flex-wrap gap-4 mt-8">
						<button className="button" type="submit" disabled={isSubmitting}>
							{getButtonLabel()}
						</button>

						<button
							className="button button--cancel"
							onClick={cancelChanges}
							disabled={isSubmitting}
						>
							Скасувати
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default TeachersForm
