import React from 'react';
import Likert from './QuestionTypes/Likert';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import Open from './QuestionTypes/Open';
import Rating from './QuestionTypes/Rating';
import TrueFalse from './QuestionTypes/TrueFalse';
import YesNo from './QuestionTypes/YesNo';

export default function ResultsMap(props) {
	return props.questions.map((question, index) => {
		switch (question.question_type) {
			case 'open':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b>
								{index + 1}. {question.question}
							</b>
						</div>
						<Open currentQuestion={question} />
					</div>
				);

			case 'multiple_choice':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b>
								{index + 1}. {question.question}
							</b>
						</div>
						<div className="multiple-choice">
							<MultipleChoice currentQuestion={question} />
						</div>
					</div>
				);
			case 'yes_no':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b>
								{index + 1}. {question.question}
							</b>
						</div>
						<YesNo currentQuestion={question} />
					</div>
				);
			case 'true_false':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b>
								{index + 1}. {question.question}
							</b>
						</div>

						<TrueFalse currentQuestion={question} />
					</div>
				);

			case 'rating':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b>
								{index + 1}. {question.question}
							</b>
						</div>
						<Rating currentQuestion={question} />
					</div>
				);

			case 'likert':
				return (
					<div key={index} className="survey-display-question">
						<div>
							<b>
								{index + 1}. {question.question}
							</b>
						</div>
						<Likert currentQuestion={question} />
					</div>
				);
			default:
				return null;
		}
	});
}
