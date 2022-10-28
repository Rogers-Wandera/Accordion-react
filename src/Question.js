import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
  const [expand, setExpand] = useState(false);
  const Info = info;
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() =>setExpand(!expand)}>
          {
            expand? <AiOutlinePlus /> : <AiOutlineMinus />
          }
        </button>
      </header>
      {
        expand && <p className='info'>{Info}</p>
      }
    </article>
  ); 
};

export default Question;
