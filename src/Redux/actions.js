export const getUser = (user) => {
	return {
		type: 'GET_USER',
		payload: user
	};
};
export const logUserOut = () => {
    return{
        type: "LOG_OUT",
    }
}
export const setQuestionType = (questionType) => {
	return {
		type: "SET_TYPE",
		payload: questionType
	}
}