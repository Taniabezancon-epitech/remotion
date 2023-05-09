export const TextInput: React.FC<{
  updateText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ updateText }) => (
  <input
    type="text"
    placeholder="Add a comment"
    onChange={updateText}
    style={{ position: "absolute", marginTop: 40, marginLeft: 300 }}
  />
);
