export type TextTodo = {
    type: 'text';
    content: string;
  };
  
  export type DateTodo = {
    type: 'date';
    message: string;
    dueDate: Date;
  };
  
  export type PriorityTodo = {
    type: 'priority';
    content: string;
    priorityLevel: number;
  };
  
  export type Todo = TextTodo | DateTodo | PriorityTodo;
  