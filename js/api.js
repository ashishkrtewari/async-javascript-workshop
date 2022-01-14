(() => {
  const samplePost = {
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  // Get Todos Async Await Start
  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response.json();
      console.log(todos);
    } catch (error) {
      console.log("Error ", error);
    }
  };
  getTodos();
  // Get Todos Async Await End

  // Get Todos .then Start
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  promise
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });

  // Get Todos .then End

  // Create Post Async Await Start
  const createPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(samplePost),
    });
    const data = await response.json();

    console.log(data);
  };

  createPost();
  // Create Post Async Await End

  // Create Post .then Start
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(samplePost),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
  // Create Post.then Start
})();
