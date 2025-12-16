export default function updateStudentGradeByCity(students, city, newGrades) {
	return students
		.filter((student) => student.location === city)
		.map((student) => {
			const grd = newGrades.find((grade) => grade.studentId === student.id);
			return {
				...student,
				grade: grd ? grd.grade : 'N/A'
			};
	});
}
