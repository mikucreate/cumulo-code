let display = {
  logs: [], // Clear any previous logs
};

// Define display.info as a function that logs messages
display.info = function(...args) {
  const message = args.join(" "); // Join all arguments into a single message
  this.logs.push(message); // Add the message to the logs array
  console.log(message); // Log the message immediately to the console
};






