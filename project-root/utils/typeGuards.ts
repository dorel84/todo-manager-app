import { Todo, DateTodo, TextTodo, PriorityTodo } from '../models/todoTypes';

export function isDateTodo(todo: Todo): todo is DateTodo {
  return todo.type === 'date';
}

export function isTextTodo(todo: Todo): todo is TextTodo {
  return todo.type === 'text';
}

export function isPriorityTodo(todo: Todo): todo is PriorityTodo {
  return todo.type === 'priority';
}
