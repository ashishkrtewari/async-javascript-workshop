// Here SetTimeout being async is run after all the iteration of the for-loop are complete
(() => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      // Being Async, gets moved to the Web API queue
      console.log(i + 10);
    });
    console.log(i);
  }
})();

// Call Stack
// console.log(i);
// setTimeout
// For

// Callback Queue task is moved to Call Stack only when it is empty

// Web API -> Callback Queue
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
// () => console.log(i + 10);
