import { TodoManager } from './services/todoManager';
import { Todo } from './models/todoTypes';

const todoManager = new TodoManager();

const textTodo: Todo = { type: 'text', content: 'Buy groceries' };
todoManager.addTodo(textTodo);

const dateTodo: Todo = { type: 'date', message: 'Finish report', dueDate: new Date('2024-12-01') };
todoManager.addTodo(dateTodo);

const priorityTodo: Todo = { type: 'priority', content: 'Prepare presentation', priorityLevel: 1 };
todoManager.addTodo(priorityTodo);

todoManager.listTodos();
