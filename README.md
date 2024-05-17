# warsawjs-workshop-25-myskills

⛩️ WarsawJS Workshop #25 — React.js

## Preview 🎉

<https://piecioshka.github.io/warsawjs-workshop-25-myskills/>

## Lista funkcji w aplikacji _(zakres projektu)_

* ✅ Wygenerować unikalny URL dla każdej osoby wchodzącej do aplikacji
* ✅ Zapisać unikalny identyfikator w storage przeglądarki
* 🎁 (Opcjonalnie) Uwierzytelniać użytkownika za pomocą GitHuba albo Facebooka
* ✅ Wczytać z pliku listę pytań dla programisty front-end
* 🎁 (Opcjonalnie) Zdefiniować pytania dla innych umiejętności i dać użytkownikowi wybór
* ✅ Zaprezentować pytania użytkownikowi w formie formularza z różnymi kontrolkami
* 🎁 (Opcjonalnie) Prezentować pytanie po pytanie _(patrz: <https://typeform.com>)_
* ✅ Zapisywać odpowiedzi w storage (przeglądarki, file systemie, Firebase, na serwerze - _patrz: CRUD_)
* ✅ Wznawiać sesję po ponownym wejściu na serwis (pobierać ID ze storage przeglądarki)
* 🎁 (Opcjonalnie) Napisać testy i połączyć z CI (Travis CI, Semaphore CI, Circle CI)

## Wykorzystywane narzędzia

* [x] React.js
* [x] WebStorage (LocalStorage)
* [x] HTTP Storage (`json-server`)

## Krok po kroku 👣

### Etap 1 - Konfiguracja

<details>

* [x] Zainstalować pluginy do Google Chrome:
    + `React Developer Tools`

* [x] Zainstalować plugin do Visual Studio Code:
    + `Reactjs code snippets`
        - <https://github.com/xabikos/vscode-react>

* [x] Stworzyć pliki
    + `index.html`
    + `src/main.js`
    + `src/component/app.js`

* [x] W pliku `index.html`:
    + stworzyć kontener z `id="app"`
    + załączyć plik z `dist/bundle.js`

* [x] Zainstalować serwer, który będzie serwował aplikację

    ```bash
    npm i http-server
    ```

    Uwaga! Dopisać zadanie do `package.json`

    ```json
    "start": "http-server"
    ```

* [x] Zainstalować zależności projektu:

    ```bash
    npm i @babel/core @babel/preset-react babel-loader react react-dom webpack webpack-cli
    ```

    Uwaga! W specjalnym przypadku będzie trzeba:

    + zainstalować `@babel/preset-env`
    + dopisać `@babel/preset-env` w `presets` w konfiguracji `Babela`
        w pliku `webpack.config.js`

* [x] Skonfigurować Webpacka
    + Tryb = `development`
    + Plik wejściowy = `entry`
    + Plik wyjściowy = `output`
    + Uruchomić `babel-loader` dla plików `.jsx?`
    + Dodać preset `@babel/preset-react`

* [x] `react-router-dom`

</details>

### Etap 2 - Budowa komponentów

<details>

* [x] Stworzyć komponenty:
    + Aplikacja
    + Intro
    + Formularz

</details>

### Etap 3 - Serwisy

<details>

* [x] Stworzenie serwis o możliwościach:
    + Zapisywanie danych
    + Odczytywanie danych
    + Usuwanie danych

    który wykorzystuje interfejs `LocalStorage`

* Stworzenie serwis budujący

</details>

### Etap 4 - Serwer HTTP

<details>

* [x] Stworzenie serwis o możliwościach:
    + Zapisywanie danych
    + Odczytywanie danych
    + Usuwanie danych

    który wykorzystuje zapytania `HTTP`

* Zainstalować paczkę `json-server`

</details>
