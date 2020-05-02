import React from 'react';
import {RerollButton} from './RerollButton';

export function Shop(props) {
  const {shop} = props;
  return (
    <div className="shop">
      This is where you can buy things
      <RerollButton reroll={shop.reroll}/>
    </div>
  );
}