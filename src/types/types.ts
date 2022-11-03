export interface TodoItemProps {
  id: number;
  task: string;
  status?: 'complete' | 'incomplete';
}
