import React from 'react';

export default function Open(props) {
  return <textarea 
          className="open-ended-response" 
          value={props.currentQuestion.response} 
          readOnly 
          />;
}
