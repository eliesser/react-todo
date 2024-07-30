import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, todosCount, pendingTodosCount, onEditTodo, onDeleteTodo, onToggleDone }) => {
  return (
    <>
      <section className='flex flex-row justify-between'>
        <article className='font-bold'>Todo List</article>
        <article
          className='text-green-700 font-bold'
        >
          to do: {todosCount}, <span className='text-black'>pending: {pendingTodosCount}</span>
        </article>
      </section>
      <section className='flex flex-col gap-2 mt-2'>
        {
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onEditTodo={onEditTodo}
              onDeleteTodo={onDeleteTodo}
              onToggleDone={onToggleDone}
            />
          ))
        }
      </section>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.any.isRequired,
  todosCount: PropTypes.number.isRequired,
  pendingTodosCount: PropTypes.number.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};
