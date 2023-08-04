## Tailwind in project
- npm i -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- set the content
  ```js
      content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
    ```
- in index.css 
    ````css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
