import './Todo.css';

const Todo: React.FC = (): JSX.Element => (
  <div className="todo">
    <div>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <button>Delete</button>
  </div>
);

export default Todo;
