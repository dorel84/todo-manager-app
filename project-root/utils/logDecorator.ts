export function logExecution(fn: Function) {
    return function (...args: any[]) {
      console.log(`Executing function with arguments: ${JSON.stringify(args)}`);
      return fn(...args);
    };
  }
  