import './AddTodo.css';

const AddTodo: React.FC = (): JSX.Element => {
  return (
    <form className="add-todo">
      <input type="text" id="title" placeholder="Title" />
      <input type="text" id="body" placeholder="Body" />
      <button>Add article</button>
    </form>
  );
};

export default AddTodo;
