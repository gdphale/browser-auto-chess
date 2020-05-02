import React from 'react';

export function RerollButton(props) {
  return (
    <div className='reroll-button'>
      <button type='button' onClick={() => props.reroll()}>Reroll</button>
    </div>
  );
}