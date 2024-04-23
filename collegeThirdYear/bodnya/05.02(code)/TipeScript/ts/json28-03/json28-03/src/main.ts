import './style.css'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <h1>1.	Используя ссылку «https://jsonplaceholder.typicode.com/users» вывести 5 пользователей (только поля name, username, email)</h1>
    <div id="first"></div>

    <h1>2.	Используя ссылку «https://jsonplaceholder.typicode.com/todos» вывести 10 НЕВЫПОЛНЕНЫХ todo</h1>
    <ul id="second"></ul>
    <h1>3.	Используя ссылку «https://jsonplaceholder.typicode.com/posts/1» вывести пост в произвольном стиле  используя css</h1>
    <ul id="third"></ul>
    <h1>4.	Используя ссылку «https://jsonplaceholder.typicode.com/todos» вывести 15 todo, если выполнен сделать текст зеленым, иначе красным    </h1>
    <ul id="fourth"></ul>
    <h1>5.	 Используя ссылку «https://jsonplaceholder.typicode.com/todos»  вывести 5 todo, сделать поле userId ссылкой на страницу пользователя    </h1>
    <ul id="fiveth"></ul>
  </div>
`

let first = document.getElementById("first") as HTMLDivElement;
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    return response.json()
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          const { name, username, email } = data[i];
          first.innerHTML += `Name:  ${name}, Username:  ${username}, Email:  ${email}  <br>`
          // console.log({ name, username, email });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });





let second = document.getElementById("second") as HTMLDivElement;
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    return response.json()
      .then((data) => {
        for (let i = 0; i < 10; i++) {
          if (data[i].completed = "true") {
            // console.log(data[i]);
            const { title, completed } = data[i];
            second.innerHTML += `<li> title:  ${title}, completed:  ${completed} </li> <br>`
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




let third = document.getElementById("third") as HTMLUListElement;
fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  .then((response) => {
    return response.json()
      .then((data) => {
        // console.log(data);
        const { title, body } = data;
        third.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title"> ${title} </h5>
        <p class="card-text"> ${body}   </p>
        </div>
        </div>
        `

      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });



let fourth = document.getElementById("fourth") as HTMLDivElement;
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    return response.json()
      .then((data) => {
        for (let i = 0; i < 15; i++) {
          if (data[i].completed === true) {
            // console.log(data[i]);
            const { title, completed } = data[i];
            fourth.innerHTML += `<li style="color:green;" > title:  ${title}, completed:  ${completed} </li> <br>`
          }
          else {
            const { title, completed } = data[i];
            fourth.innerHTML += `<li style="color:red;" >  title:  ${title}, completed:  ${completed} </li> <br>`
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


let fiveth = document.getElementById("fiveth") as HTMLDivElement;
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    return response.json()
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          const { userId, title, completed } = data[i];
          fiveth.innerHTML += `<li><a href="https://jsonplaceholder.typicode.com/users/${userId}" style="text-decoration:none; color:blue;">
            User ${userId}</a> - Title: ${title}, Completed: ${completed ? 'yes' : 'no'}</li><br>`;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });