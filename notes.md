отловлен баг.
Если закрыть модальное окно после завершения заполнения формы, а потом сразу открыть ещё - появятся 2 окна спасибо.
Кроме того, после их закрытия будет сама открываться модалка(базовая).
ПОФИКСИТЬ
надо засунуть в функцию закрытия окна функцию, восстанавливающую базовое окно

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