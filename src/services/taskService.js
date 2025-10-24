import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getATask(id){
  const task = await taskRepository.getTask(id);
  if(task) return task;
  else{
    const error = new Error (`Cannot find task with id ${id}`);
    error.status= 404;
    throw error;
  }
}
