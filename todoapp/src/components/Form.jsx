import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ toDos, setTodos }) {
	// const [toDo, setTodo] = useState("");
	const [toDo, setTodo] = useState({
		name: "",
		done: false
	});

	function handleSubmit(e) {
		e.preventDefault();
		setTodos([...toDos, toDo]);
		console.log(toDos);
		setTodo({
			name: "",
			done: false
		});
	}
	return (
		<form
			className={styles.todoform}
			onSubmit={handleSubmit}
		>
			<div className={styles.inputContainer}>
				<input
					className={styles.modernInput}
					onChange={(e) =>
						setTodo({
							name: e.target.value,
							done: false
						})
					}
					value={toDo.name}
					type="text"
					placeholder="Enter Task..."
				/>
				<button
					className={styles.modernButton}
					type="submit"
				>
					Add
				</button>
			</div>
		</form>
	);
}
