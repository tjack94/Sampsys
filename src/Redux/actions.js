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
export const getSurveyName = (name) =>{
	return {
		type: "SAVE_SURVEY",
		payload: name
	}
}
export const getSurveyQuestions = (questions) =>{
	return {
		type: "GET_QUESTIONS",
		payload: questions
	}
}