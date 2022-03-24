import { FC } from "react"; // Type: Functional Components

export const DarkLayout:FC = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: '20px',
      borderRadius: '5px'
    }}>
      <h3>Dark-Layout</h3>
      <div>
        { children }
      </div>
    </div>
  );
}
