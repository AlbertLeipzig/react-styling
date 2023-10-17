export const ComponentButton = ({ text, color, action }) => {
  return (
    <button style={{ color }} onClick={() => action()}>
      {text}
    </button>
  );
};

// State ändern
// Daten bekommen
