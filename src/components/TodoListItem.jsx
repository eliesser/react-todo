import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoListItem = ({ todo = {}, onEditTodo, onDeleteTodo, onToggleDone }) => {
  const { description, onInputChange } = useForm({
    description: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const des = description.trim();

    if (des.length < 1) return;

    onEditTodo({ ...todo, description });
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter')
      onSubmit(event);
  };

  return (
    <section className='flex flex-row justify-between items-center gap-4'>
      <article
        className={`w-full font-bold hover:cursor-pointer${todo.done ? ' line-through text-green-700' : ''}`}
      >
        <form
          className='flex flex-row items-center gap-4'
          onSubmit={onSubmit}
        >
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone({ ...todo, done: !todo.done })}
          />
          <input
            className={`${todo.done ? 'bg-green-200 ' : ''}bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            type="text"
            placeholder="Add todo"
            name='description'
            defaultValue={todo?.description}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
        </form>
      </article>
      <button
        className="w-24 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Remove
      </button>
    </section>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.any.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};
