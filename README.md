# Nx Ice Cream

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding by Atomic Designer

Run `npx ng g c components/<atoms|molecules|organisms|templates|pages>/component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Atomic Designer levels of abstraction

| Levels         | Description
|:---------------|:-------------------------------------------------------------|
| Atoms          | basic elements such as buttons, inputs and icons             |
| Molecules      | combinations of atoms that form small reusable components    |
| Organisms      | groups of molecules that form complete sections of UI        |
| Templates      | structures that organize organisms in specific layouts       |
| Pages          | final instances of templates with real content               |

## Organization of the project

| Folders    | Description                                                                                              |
|:-----------|:---------------------------------------------------------------------------------------------------------|
| components | folder containing all the components created, organized within the Atomic Designer abstraction levels    |
| services   | services that may affect a component                                                                     |
| utils      | utility code that can be shared between components                                                       |
| styles     | organizes the styles that will be shared between all components                                          |