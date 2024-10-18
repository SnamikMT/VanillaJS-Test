// Функция fetchRandomUsers загружает данные о случайных пользователях с помощью API и отображая их данные
// Если данные еще загружаются показываем "Загрузка..."
// При ошибке выводим сообщение об ошибке

function fetchRandomUsers() {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = 'Загрузка...';

    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            userContainer.innerHTML = '';

            users.forEach(user => {
                const userItem = document.createElement('div');
                userItem.classList.add('user-item');
                userItem.innerHTML = `
                    <img src="${user.picture.thumbnail}" alt="User profile picture">
                    <div>
                        <p><strong>Имя:</strong> ${user.name.first} ${user.name.last}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                    </div>
                `;
                userContainer.appendChild(userItem);
            });
        })
        .catch(error => {
            userContainer.innerHTML = 'Не удалось загрузить пользователей';
            console.error('Ошибка:', error);
        });
}

window.onload = fetchRandomUsers;
