import { useState } from 'react';
export const InlineButton = () => {
  const [buttonStatus, setButtonStatus] = useState(false);

  return (
    <button
      style={
        buttonStatus
          ? { backgroundColor: 'red', padding: '.5em 1.5em' }
          : {
              backgroundColor: 'blue',
              padding: '.5em 1.5em',
            }
      }
      onClick={() => setButtonStatus(!buttonStatus)}
    >
      Inline
    </button>
  );
};
