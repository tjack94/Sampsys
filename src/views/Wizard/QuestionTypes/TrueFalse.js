import React from 'react'

export default function TrueFalse(props){
    return(
        <div className='multiple-choice'>
						<div>
							<input
								type="radio"
								value={'true'}
								readOnly
							/>
							True
						</div>
						<div>
							<input
								type="radio"
								value={'false'}
								readOnly
							/>
							False
						</div>
					</div>
    )
}