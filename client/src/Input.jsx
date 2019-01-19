import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const Input = ({ addTask, refetch }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = title => async e => {
    e.preventDefault();
    setLoading(true);
    await addTask({ variables: { title } });
    setInput('');
    await refetch();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(input)}>
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      {loading && <p>Submitting...</p>}
    </form>
  );
};

const CreateTask = ({ refetch }) => {
  return (
    <Mutation
      mutation={gql`
        mutation($title: String!) {
          createTask(title: $title)
        }
      `}
    >
      {addTask => <Input addTask={addTask} refetch={refetch} />}
    </Mutation>
  );
};

export default CreateTask;
