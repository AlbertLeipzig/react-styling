import { useState } from 'react';
export const SassButton = () => {
  const [buttonStatus, setButtonStatus] = useState('active');

  const updateButtonStatus = () => {
    setButtonStatus(buttonStatus === 'passive' ? 'active' : 'passive');

    /* buttonStatus === 'passive' ? setButtonStatus('active') : setButtonStatus('passive'); */

    /* 
    if (buttonStatus === 'passive') {
      setButtonStatus('active');
    } else {
      setButtonStatus('passive');
    } */

    /* buttonStatus === "active" && console.log("hello there") */
  };

  return (
    <button
      className={`my-button--${buttonStatus}`}
      onClick={() => updateButtonStatus()}
    >
      Sass
    </button>
  );
};

// const myVariable = "active"

// "my-button--active" === {`my-button--active`} === {`my-button--${myVariable}`}
