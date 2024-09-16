import style from './Button.module.css';

interface ButtonProps {
  content: string | JSX.Element; // Can be a string or JSX element for flexibility
  onClick: () => void;           // Function triggered on button click
  color?: string;                // Optional prop for button color
}

const Button: React.FC<ButtonProps> = ({ content, onClick, color }) => {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: color || '#007BFF' }} // Default color is blue
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
