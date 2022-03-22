import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'Watch hentai',
    },
    {
      id: 2,
      body: 'Watch anime',
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        mb='8'
        fontWeight='extrabold'
        bgColor="rgb(131,58,180)"
        bgGradient="linear(90deg, 
          #12c2e9,
          #c471ed,
          #f64f59);"
        size='2xl'
        bgClip='text'
      >
        Reminders App
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;