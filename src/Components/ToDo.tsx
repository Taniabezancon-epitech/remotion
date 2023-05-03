import { useState } from "react";
import { Checkbox, Container, Typography } from "@material-ui/core";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Lorem ipsum dolor sit amet", checked: true },
    { text: "Consectetur adipiscing elit", checked: true },
    { text: "Sed do eiusmod tempor incididunt", checked: true },
    { text: "Ut labore et dolore magna aliqua", checked: false },
    { text: "Ut enim ad minim veniam", checked: false },
  ]);

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="sm">
      {todos.map((todo, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={todo.checked}
            onChange={() => handleCheckboxChange(index)}
            color="primary"
          />
          <Typography
            variant="h6"
            component="span"
            style={{ textDecoration: todo.checked ? "line-through" : "none" }}
          >
            {todo.text}
          </Typography>
        </div>
      ))}
    </Container>
  );
};

export default TodoList;
