import { Todo } from '../models/todoTypes';

export class TodoManager {
  private todos: Map<number, Todo> = new Map();
  private nextId = 1;

  addTodo = (todo: Todo): number => {
    const id = this.nextId++;
    this.todos.set(id, todo);
    return id;
  };

  deleteTodo = (id: number): void => {
    this.todos.delete(id);
  };

  listTodos = (): void => {
    this.todos.forEach((todo, id) => {
      if (todo.type === 'text') {
        console.log(`ID: ${id}, Text: ${todo.content}`);
      } else if (todo.type === 'date') {
        console.log(`ID: ${id}, Task: ${todo.message}, Due Date: ${todo.dueDate}`);
      } else if (todo.type === 'priority') {
        console.log(`ID: ${id}, Task: ${todo.content}, Priority: ${todo.priorityLevel}`);
      }
    });
  };
}

