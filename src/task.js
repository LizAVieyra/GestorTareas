//Obtener la lista de tareas del almacenamiento del navegador "localStorage"
let tasks = JSON.parse(localStorage.getItem('task')) || [];

//Funcion para poder llevar las tareas de la lista
export const getTasks = () => tasks;

//Funcion de flecha (permite crear funciones de manera mas especifica) para agregar una tarea a la lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task, 
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));
};

//Funcion para eliminar una tarea de la lista 
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id)); 
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para actualizar una tarea de la lista
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if (task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


