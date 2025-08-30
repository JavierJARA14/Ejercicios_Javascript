var tareas = [{}];
const id = 3;
const desc = "Ve a tocar pasto";
const completado = false;

function createTask(id, desc, comp){
    let newTask = new Object();
    newTask.id = id;
    newTask.desc = desc;
    newTask.comp = comp;
    tareas.push(newTask);
}

function deleteTask(id){
    const index = tareas.findIndex(item => item.id === id);
    if (index !== -1) {
        tareas.splice(index, 1);
    }
}

function completedTask(id){
    const item = tareas.find(task => task.id === id);
    if (item) {
    item.comp = true;
    }
}

createTask(id,desc,completado);
console.log(tareas);
completedTask(id);
console.log(tareas);
deleteTask(id);
console.log(tareas);