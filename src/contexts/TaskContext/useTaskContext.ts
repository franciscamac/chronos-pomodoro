import { useContext } from 'react';
import { TaskContext } from './TaskContext';

//consome os dados do contexto
export function useTaskContext() {
  return useContext(TaskContext);
}
