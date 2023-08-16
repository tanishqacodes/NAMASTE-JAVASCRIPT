const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (terminal)
});

// Ask a question and read the user's input
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the readline interface
});

// console.log("Name  : ",name);

// Event listener for when the user presses the "Enter" key
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});

// Event listener for when the user presses the "Ctrl + C" key combination
rl.on('SIGINT', () => {
  rl.question('Do you really want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) {
      rl.close();
    }
  });
});

// Event listener for when the readline interface is closed
rl.on('close', () => {
  console.log('Goodbye!');
});
