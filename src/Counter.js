import React, { useState } from 'react';

function Counter() {
  //첫번째 원소를 number라는 이름으로 추출
  //두번째 원소를 setNumber라는 이름으로 추출
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber +1);
  };

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber -1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}> +1</button>
      <button onClick={onDecrease}> -1</button>
    </div>
  );
}

export default Counter;
