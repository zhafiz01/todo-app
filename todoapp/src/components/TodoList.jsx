import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ toDos, setTodos }) {
	return (
		<div className={styles.list}>
			{toDos.map((item) => (
				<TodoItem
					key={item.name}
					item={item}
					toDos={toDos}
					setTodos={setTodos}
				></TodoItem>
			))}
		</div>
	);
}
