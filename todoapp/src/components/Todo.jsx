import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
	const [toDos, setTodos] = useState([]);
	return (
		<div>
			<Form
				toDos={toDos}
				setTodos={setTodos}
			></Form>
			<TodoList
				toDos={toDos}
				setTodos={setTodos}
			></TodoList>
		</div>
	);
}
