# My portfolio website

Angular based environment to display my portfolio items.

## Project Structure
The project folder structure I chose is (mostly) based off the structure in this article:
[How to define a highly scalable folder structure for your Angular project](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)

```
|-- app
     |-- pages
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] footer
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
          |-- shared.module.ts
|-- assets
     |-- scss
          |-- [+] partials
          |-- [+] modules
          |-- _partials.scss
```

## Angular info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.
