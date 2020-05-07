import React, {useEffect, useState} from "react";
import arrayMove from "array-move";
import SortableList from "./SortableElement";

const SortableComponent = () => {
	const [tasks, setTasks] = useState([
		{title: "Aprender c#", description: "Aprender el lenguaje c# y sus buenas practicas"},
		{title: "Aprender React", description: "Aprender React Js Hasta dominarlo"},
		{title: "Realizar presentación sobre c#", description: "Hacer power point y presentarlo"},
	]);
	
	useEffect(() => {
		const getTasks = async () => {
			const res = await fetch("http://localhost:4000/api/task");
			const tasks = await res.json();
			tasks.sort((a, b) => (a.sorting > b.sorting) ? 1 : ((b.sorting > a.sorting) ? -1 : 0));
			setTasks(tasks);
		}
		getTasks();
	}, []);
	
	
	const onSortEnd = async ({oldIndex, newIndex}) => {
		let tasksCopy = [...tasks];
		tasksCopy = arrayMove(tasksCopy, oldIndex, newIndex);
		setTasks(tasksCopy);
		const tasksIds = tasksCopy.map((t) => t._id);
		const res = await fetch("http://localhost:4000/api/task", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tasksIds),
		});
		const data = await res.json();
		console.log(data);
	};
	
	return <SortableList items={tasks} onSortEnd={onSortEnd}/>;
}

export default SortableComponent;