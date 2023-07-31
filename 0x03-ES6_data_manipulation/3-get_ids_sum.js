const getStudentIdsSum = (students) => students.reduce((iniVal, curVal) => iniVal + curVal.id, 0);

export default getStudentIdsSum;
