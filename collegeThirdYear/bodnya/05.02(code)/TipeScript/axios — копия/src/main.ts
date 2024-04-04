import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <div>
        <input type="number" class="postid" placeholder="id поста" />
        <button class="idpoisk">Найти</button>
      </div>
      <h2>Все посты</h2>
      <table id="postsTable" border="1"></table>
      <br>
      <br>
      <div >
        <input type="number" class="change" placeholder="id поста (для изменения)" />
        <button class="idChange">Изменить</button>
       </div>
           <button id="add">Добавить Статью<button>

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
    Thead4.innerHTML = "delete";

    //статьи
    posts.forEach(post => {
      const row = table.insertRow();

      const idCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const bodyCell = row.insertCell(2);
      // const linkCell = row.insertCell(3);
      const deleteCell = row.insertCell(3);

      idCell.innerHTML = post.id;
      titleCell.innerHTML = post.title;
      bodyCell.innerHTML = post.content;
      // linkCell.innerHTML = `<button onclick="getId(id: number)" class="${post.id}"> change </button>`;
      // linkCell.innerHTML = `<a href="${post.id}"> change </button>`;
      deleteCell.innerHTML = `<button id="${post.id}"> delete </button>`;


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

//Поиск
document.querySelector('.idpoisk')?.addEventListener('click', () => {
  let id = document.querySelector('.postid') as HTMLInputElement
  axios
    .get(`http://127.0.0.1:8000/api/posts/${id.value}`)
    .then(res => {
      alert(`id = ${res.data.id} Title = ${res.data.title}  Content = ${res.data.content} `)
    })
    .catch(err => {
      console.log(err)
      alert('Пост с таким id не найден')
    })
})

//Поиск
document.querySelector('.idpoisk')?.addEventListener('click', () => {
  let id = document.querySelector('.postid') as HTMLInputElement
  axios
    .get(`http://127.0.0.1:8000/api/posts/${id.value}`)
    .then(res => {
      alert(`id = ${res.data.id} Title = ${res.data.title}  Content = ${res.data.content} `)
    })
    .catch(err => {
      console.log(err)
      alert('Пост с таким id не найден')
    })
})


//обновление
document.querySelector('.idChange')?.addEventListener('click', () => {
  let id = document.querySelector('.change') as HTMLInputElement

  const titleGet: string = prompt("Введите заголовок")!;
  const contentGet: string = prompt("Введите текст")!;

  axios.put(`http://127.0.0.1:8000/api/posts/update/${id.value}`, {
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
})





// function getId(id: number) {
//   const updateBtn = document.querySelector(`.${id}`);


//   updateBtn?.addEventListener('click', function hanvdleClick(event) {
//     const title: string = prompt("Введите заголовок")!;
//     const content: string = prompt("Введите текст")!;
//     update(title, content)
//   });
// }



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
