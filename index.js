const { TodoRepository } = require('./repositories/todo.repository');
const { client } = require('./utils/db');
const { TodoRecord } = require('./records/todo.record');

(async () => {
  try {
    // const todo = new TodoRecord({
    //   title: 'Skończyć zadanie',
    // });

    // await TodoRepository.insert(todo);

    // console.log(todo);
    // console.log(await TodoRepository.findAll());

    const todo = await TodoRepository.find('632084269c8f6d527454593d');
    todo.title = 'parararararara';

    await TodoRepository.update(todo);

    console.log(await TodoRepository.find('632084269c8f6d527454593d'));
  } finally {
    await client.close();
  }
})();
