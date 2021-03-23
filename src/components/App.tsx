import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const _App = (props: AppProps): JSX.Element => {
  function onButtonClick(): void {
    props.fetchTodos();
  }

  function renderList(): JSX.Element[] {
    return props.todos.map(todo => (
      <div key={todo.id}>
        <span>{todo.title}</span>
        <button
          onClick={() => {
            props.deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    ));
  }

  return (
    <div>
      <p>Press the button to fetch Todos!</p>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
