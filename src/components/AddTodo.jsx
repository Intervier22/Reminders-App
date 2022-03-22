import { Button, HStack, Input, useToast,IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {FaPlusCircle} from "react-icons/fa"
function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='Watch Anime.....'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          New Reminder
        </Button>
        <IconButton
        type='submit'
        icon={<FaPlusCircle/>}
        isRound='true'
        size='lg'
        />
      </HStack>
    </form>
  );
}

export default AddTodo;