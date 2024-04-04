import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <h2>Все посты</h2>
      <table id="postsTable" border="1"></table>
      <button id="add">Добавить<button>
  </div>
`


import axios from "axios";
axios.get('http://127.0.0.1:8000/api/posts/all')
  .then(res => {
    const posts = res.data;

    const table = document.getElementById('postsTable');
    console.log(res.data)
    const row = table.insertRow();

    //thead
    const Thead1 = row.insertCell(0);
    const Thead2 = row.insertCell(1);
    const Thead3 = row.insertCell(2);
    const Thead4 = row.insertCell(3);

    Thead1.innerHTML = "id";
    Thead2.innerHTML = "title";
    Thead3.innerHTML = "content";
    Thead3.innerHTML = "change";

    //статьи
    posts.forEach(post => {
      const row = table.insertRow();

      const idCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const bodyCell = row.insertCell(2);
      const linkCell = row.insertCell(3);
      const deleteCell = row.insertCell(4);

      idCell.innerHTML = post.id;
      titleCell.innerHTML = post.title;
      bodyCell.innerHTML = post.content;
      linkCell.innerHTML = `<button class="${post.id}"> change </button>`;
      deleteCell.innerHTML = `<button id="${post.id}"> delete </button>`;



      // let id = post.id;
      // const updateBtn = document.querySelector(`.${post.id}`);
      // updateBtn?.addEventListener('click', function hanvdleClcccick(event) {
      //   const title: string = prompt("Введите заголовок")!;
      //   const content: string = prompt("Введите текст")!;
      //   update(title, content)
      // });


      // function update(titleGet: string, contentGet: string) {
      //   axios.put(`http://127.0.0.1:8000/api/posts/new`, {
      //     title: titleGet,
      //     content: contentGet
      //   })
      //     .then(res => {
      //       console.log(res.data);
      //       window.location.reload();

      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });

      // }


      //delete
      const delBtn = document.getElementById(post.id);
      delBtn?.addEventListener('click', function handleClick(event) {
        axios.delete(`http://127.0.0.1:8000/api/posts/delete/${post.id}`).then(res => {
          console.log(res.data)
          window.location.reload();
        })
          .catch(err => {
            console.log(err);
          })
      });
    });
  })
  .catch(err => {
    console.log(err);
  });


function getId(id: number) {
  const updateBtn = document.querySelector(`.${id}`);


  updateBtn?.addEventListener('click', function hanvdleClick(event) {
    const title: string = prompt("Введите заголовок")!;
    const content: string = prompt("Введите текст")!;
    update(title, content)
  });
}



function update(titleGet: string, contentGet: string) {
  axios.put(`http://127.0.0.1:8000/api/posts/new`, {
    title: titleGet,
    content: contentGet
  })
    .then(res => {
      console.log(res.data);
      window.location.reload();

    })
    .catch(err => {
      console.log(err);
    });

}


const addBtn = document.getElementById("add");
addBtn?.addEventListener('click', function handleClick(event) {
  const title: string = prompt("Введите заголовок")!;
  const content: string = prompt("Введите текст")!;
  add(title, content)
});

function add(titleGet: string, contentGet: string) {
  axios.post(`http://127.0.0.1:8000/api/posts/new`, {
    title: titleGet,
    content: contentGet
  })
    .then(res => {
      console.log(res.data);
      window.location.reload();

    })
    .catch(err => {
      console.log(err);
    });

}


