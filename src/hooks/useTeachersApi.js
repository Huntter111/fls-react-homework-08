import { useCallback, useState } from 'react'
import apiRoutes from '../api/apiRoutes'
import axios from 'axios'

const useTeachersApi = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchTeachers = useCallback(async () => {
		setIsLoading(true)
		setError(null)
		try {
			const res = await axios.get(apiRoutes.getAllTeachers)
			setData(res.data)
		} catch (err) {
			setError(err)
		} finally {
			setIsLoading(false)
		}
	}, [])
	const addTeacher = useCallback(
		async (teacherData) => {
			setIsLoading(true)
			setError(null)
			try {
				await axios.post(apiRoutes.addTeacher, teacherData)
				await fetchTeachers()
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false)
			}
		},
		[fetchTeachers],
	)
	const updateTeacher = useCallback(
		async (id, teacherData) => {
			setIsLoading(true)
			setError(null)
			try {
				await axios.put(apiRoutes.updateTeacher(id), teacherData)
				await fetchTeachers()
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false)
			}
		},
		[fetchTeachers],
	)
	const deleteTeacher = useCallback(
		async (id) => {
			setIsLoading(true)
			setError(null)
			try {
				await axios.delete(apiRoutes.deleteTeacher(id))
				await fetchTeachers()
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false)
			}
		},
		[fetchTeachers],
	)
	return {
		data,
		isLoading,
		error,
		fetchTeachers,
		addTeacher,
		updateTeacher,
		deleteTeacher,
	}
}

export default useTeachersApi
