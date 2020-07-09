```
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
```
Запуск JSON-server на windows:
npx json-server db.json

Доделать слайдер, чтобы можно было свайпать пальцем / мышкой и так листать