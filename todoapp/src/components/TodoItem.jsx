import styles from "./todoitem.module.css";

export default function TodoItem({
	item,
	toDos,
	setTodos
}) {
	function handleDelete(item) {
		console.log("delete button clicked", item);
		setTodos(toDos.filter((todo) => todo !== item));
	}

	function handleClick(name) {
		const newArray = toDos.map((todo) =>
			todo.name === name
				? { ...todo, done: !todo.done }
				: todo
		);
		setTodos(newArray);
		console.log(toDos);
	}
	const className = item.done ? styles.completed : "";

	return (
		<div className={styles.item}>
			<div className={styles.itemName}>
				<span
					className={className}
					onClick={() => handleClick(item.name)}
				>
					{item.name}
				</span>

				<span>
					<button
						onClick={() => handleDelete(item)}
						className={styles.deleteButton}
					>
						x
					</button>
				</span>
			</div>

			<hr className={styles.line} />
		</div>
	);
}
