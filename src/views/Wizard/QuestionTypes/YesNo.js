import React from 'react'

export default function YesNo(props){
    return(
        <div className='multiple-choice'>
						<div>
							<input
								type="radio"
								value={'yes'}
								readOnly
							/>Yes
						</div>
						<div>
							<input
								type="radio"
								value={'no'}
								readOnly
							/>No
						</div>
					</div>
    )
}