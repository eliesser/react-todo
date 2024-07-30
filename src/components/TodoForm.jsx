import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoForm = ({ onAddTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const des = description.trim();

    if (des.length < 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: des.trim(),
      done: false,
    };

    onAddTodo(newTodo);
    onResetForm();
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter')
      onSubmit(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <section className='flex flex-col gap-2 mt-2'>
        <section className='flex flex-row justify-between items-center gap-4 mb-4'>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Add todo"
            name='description'
            value={description}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
          <button
            type='submit'
            className="w-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            Add
          </button>
        </section>
      </section>
    </form>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
