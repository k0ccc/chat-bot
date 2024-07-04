# ChatBot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---
Посмотрев pdf, сразу возникла мысль выкинуть стор NgRx, из-за не надобности. В нем конечно можно хранить response из Мок-данных или вызывать из него функцию которая бы эмулировала получение данных от сервера, но в этом нет необходимости в этом тестовом задании, с этим в полной мере справится обычный сервис. 
Пришла идея для реализации regex для input, для предотвращения sql-инъекций на начальной стадии.  
Можно так же сделать анимацию что чат бот печатает / генерирует, и сделать задержку ответа с rxjs как бы имитацию генерации токенов. Но в тз такого нет, да и времени нет  ;)
Мок-данные не приятные, почему не использовать в response: "Извините, я не понимаю эту команду"?
Комментарии в anwser.service.ts
Убрал гидрацию, https://github.com/angular/angular/issues/50175

---
Предварительная оценка (смотреть после оценки РТЛабс):
<details><summary>Корректность работы :</summary>
- ``` Все (?) функции выполняются 5 из 5. ```</details>
<details><summary>Качество кода :</summary>
- ```scss страдает, но и я не ux/ui figma man 5 из 5, на счет бест практик не уверен, у каждого они свои так что 4 из 4.7 ```</details>
<details><summary>Использование TypeScript :</summary>
- ```Весь ангуляр на Тайпскрипте, использован целый 1! интерфейс, наследовать тут нечего особо. 5 из 5```</details>
<details><summary>UI/UX :</summary>
- ```Чувство прекрасного имеется, но я не ux/ui figma chad шлепа. 3 из 5```</details>
<details><summary>Документация:</summary>
- ```3 из 5 без драмы.```</details>

https://k0ccc.github.io/ Сайт лежит тут.


