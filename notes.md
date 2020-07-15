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

Доделать калькулятор. На данный момент, есть значения по умолчанию. Если пользователь их тыкал, то при обновлении страницы не соскочат.
НО сначала при этом запустятся дефолтные значения, и потом анимацией перейдут в заданные.
НАДО сделать, чтобы дефолтные значения сразу брались из localStorage, а не заменяли заданные ранее дефолтные.
Для этого надо сразу их так задать.