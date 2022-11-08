export interface TodoItemProps {
  id: number;
  task: string;
  status?: 'completed' | 'active';
}
