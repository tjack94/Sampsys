import React from 'react';
import Likert from './QuestionTypes/Likert';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import Open from './QuestionTypes/Open';
import Rating from './QuestionTypes/Rating';
import TrueFalse from './QuestionTypes/TrueFalse';
import YesNo from './QuestionTypes/YesNo';

export default function QuestionTypeSwitch(props) {
	return props.questions.map((question, index) => {
		switch (question.question_type) {
			case 'open':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b className='question-title'>
								{index + 1}. {question.question}
							</b>
						</div>
						<Open currentQuestion={question} handleChange={props.handleChange} />
					</div>
				);

			case 'multiple_choice':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b className='question-title'>
								{index + 1}. {question.question}
							</b>
						</div>
						<div className="multiple-choice">
							<MultipleChoice currentQuestion={question} handleChange={props.handleChange} />
						</div>
					</div>
				);

			case 'yes_no':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b className='question-title'>
								{index + 1}. {question.question}
							</b>
						</div>
						<YesNo currentQuestion={question} handleChange={props.handleChange} />
					</div>
				);

			case 'true_false':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b className='question-title'>
								{index + 1}. {question.question}
							</b>
						</div>

						<TrueFalse currentQuestion={question} handleChange={props.handleChange} />
					</div>
				);

			case 'rating':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b className='question-title'>
								{index + 1}. {question.question}
							</b>
						</div>
						<Rating currentQuestion={question} handleChange={props.handleChange} />
					</div>
				);

			case 'likert':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b className='question-title'>
								{index + 1}. {question.question}
							</b>
						</div>
						<Likert currentQuestion={question} handleChange={props.handleChange} />
					</div>
				);
				default: return null
		}
	});
}
