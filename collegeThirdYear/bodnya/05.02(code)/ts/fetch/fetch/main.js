for (let i = 0; i < 10; i++) {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${i}`)
    .then((promise) => {
      return promise
        .json()
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            let el = data[i];
            if (el.completed == true) {
              console.log(data[i]);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}
