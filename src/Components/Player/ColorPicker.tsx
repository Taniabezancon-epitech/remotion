export const ColorPicker: React.FC<{ changeColor: (newColor: string) => void }> = ({
    changeColor,
  }) => (
    <select onChange={(e) => changeColor(e.target.value)}>
      <option value="black">Black</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
  );