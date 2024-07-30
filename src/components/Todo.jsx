import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { useTodo } from '../hooks/useTodo';

export const Todo = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    onAddTodo,
    onEditTodo,
    onDeleteTodo,
    onToggleDone,
  } = useTodo();

  return (
    <section className='px-10'>
      <TodoForm onAddTodo={onAddTodo} />

      <TodoList
        todos={todos}
        todosCount={todosCount}
        pendingTodosCount={pendingTodosCount}
        onEditTodo={onEditTodo}
        onDeleteTodo={onDeleteTodo}
        onToggleDone={onToggleDone}
      />
    </section>
  );
};
