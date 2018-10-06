# warsawjs-workshop-25-myskills

[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-25-myskills.svg)](https://github.com/piecioshka/warsawjs-workshop-25-myskills)

**WarsawJS Workshop #25**: Projekt przechowujący "moje" umiejętności

## Lista funkcji w aplikacji _(zakres projektu)_

<!-- :checkered_flag: -->
<!-- :construction: -->

* :construction: Wygenerować unikalny URL dla każdej osoby wchodzącej do aplikacji
* :construction: Zapisać unikalny identyfikator w storage przeglądarki
* :construction: (Opcjonalnie) Uwierzytelniać użytkownika za pomocą GitHuba albo Facebooka
* :construction: Wczytać z pliku listę pytań dla programisty front-end
* :construction: (Opcjonalnie) Zdefiniować pytania dla innych umiejętności i dać użytkownikowi wybór
* :construction: Zaprezentować pytania użytkownikowi w formie formularza z różnymi kontrolkami
* :construction: (Opcjonalnie) Prezentować pytanie po pytanie _(patrz: <https://typeform.com>)_
* :construction: Zapisywać odpowiedzi w storage (przeglądarki, file systemie, Firebase, na serwerze - _patrz: CRUD_)
* :construction: Wznawiać sesję po ponownym wejściu na serwis (pobierać ID ze storage przeglądarki)
* :construction: (Opcjonalnie) Napisać testy i połączyć z CI (Travis, SemaphoreCI, CircleCI)

## Wykorzystywane narzędzia

* [x] React.js
* [x] WebStorage
* [x] npm: uuid
* [ ] Redux
* [ ] Firebase
* [ ] npm: axios

## Krok po kroku 👣

### Etap 1

* [x] Zainstalować pluginy do Google Chrome:
    + `React Developer Tools`
    + `Redux DevTools`

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

* [x] Zainstalować zależności projektu:

    ```bash
    npm i @babel/core @babel/preset-react babel-loader react react-dom webpack webpack-cli
    ```

    Uwaga! W specjalnym przypadku będzie trzeba:

    + zainstalować `@babel/preset-env`
    + dopisać `@babel/preset-env` w `presets` w konfiguracji `Babela`
        w pliku `webpack.config.js`

* [x] Zainstalować serwer, który będzie serwował aplikację

    ```bash
    npm i http-server
    ```

    Uwaga! Dopisać zadanie do `package.json`

    ```json
    "start": "http-server"
    ```

* [x] Skonfigurować Webpacka
    + Tryb = `development`
    + Plik wejściowy = `entry`
    + Plik wyjściowy = `output`
    + Uruchomić `babel-loader` dla plików `.jsx?`
    + Dodać preset `@babel/preset-react`

* [ ] `react-router-dom`

### Etap 2 - Redux

* Zainstalować zależności:

    npm i redux

### Etap 3

* ...
