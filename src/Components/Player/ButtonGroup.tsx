import { CSSProperties } from "react";

export const buttonStyles: CSSProperties = {
  padding: 10,
  border: "none",
  fontWeight: 600,
  borderRadius: 5,
  width: "100%",
  height: 60,
  fontSize: 18,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  margin: 15,
};

const ButtonGroup: React.FC<{
  colors: string[];
  onClick: (color: string) => void;
}> = ({ colors, onClick }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {colors.map((c) => (
        <button
          key={c}
          style={{ ...buttonStyles, backgroundColor: c }}
          onClick={() => onClick(c)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
