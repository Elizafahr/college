import "../style.css";

//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, 
//следующего за точкой.
document.querySelector<HTMLDivElement>("#sixth")!.innerHTML = `
  <div class="Sixth">
  <h1>Шестое задание</h1> 
  <p>(начните вводить текст) Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, следующего за точкой.</p>
    <textarea id="textareaSec"></textarea>
     <ul id="sentences"></ul>
  </div>
`;

const textareaSec: HTMLTextAreaElement = document.getElementById('textareaSec') as HTMLTextAreaElement;
textareaSec.oninput = function () {
  splitTextSec();
}

function splitTextSec(): void {
  const textareaValue = textareaSec.value;
  let arr: Array<string> = [];
  var splitted = textareaValue.split(".");
  splitted.forEach(element => {
    arr.push(element.trim());
  });
  outPut(arr);
}

function outPut(arr: Array<string>): void {
  const sentencesList = document.querySelector<HTMLUListElement>("#sentences")!;
  sentencesList.innerHTML = "";
  arr.forEach(element => {
    const sentenceItem = document.createElement("li");
    sentenceItem.innerText = capitalizeFirstLetter(element);
    sentencesList.appendChild(sentenceItem);
  });
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}