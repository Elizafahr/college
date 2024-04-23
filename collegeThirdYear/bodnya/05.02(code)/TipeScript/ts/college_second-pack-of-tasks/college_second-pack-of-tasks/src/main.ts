import "./style.css";

//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова,
//следующего за точкой.
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div> 
    <h1>Седьмое задание</h1> 
    <label for="birthdate">Введите вашу дату рождения:</label>
    <input type="date" id="birthdate">
    <button id="submit">Рассчитать возраст</button>
</div>
`;
function calculateAge(birthdate: string): number | string {
    const today: Date = new Date();
    const birthDate: Date = new Date(birthdate);
    let age: number = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age > 0) {
        return age;
    }
    else {
        return 'Неверная дата';
    }
}

const submitButton = document.getElementById('submit');

submitButton?.addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate') as HTMLInputElement;

    if (birthdateInput) {
        const age = calculateAge(birthdateInput.value);
        if (age > 0) {
            alert(`Возраст: ${age} лет.`);
        }
        else {
            alert(`  ${age}  `);
        }
    }
});