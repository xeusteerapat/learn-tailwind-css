# Learn Tailwind

tailwind breakpoint

```json
{
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px"
}
```

example

```html
<div className='bg-gray-100 sm:bg-yellow-300 md:bg-green-400 lg:bg-pink-400 xl:bg-blue-500 2xl:bg-red-500'></div>
```

explaination

1. Upto `640px` Background Color `yellow`
2. `640px` to `768px` Background Color `green`
3. `768px` to `1024px` Background Color `pink`
4. `1024px` to `1280px` Background Color `blue`
5. `1280px` to `1536px` Background Color `red`

state variant

```html
<div className='hover:bg-gray-200 active:bg-green-500 focus:placeholder-purple-200'></div>
```

directive apply

```html
<div className='.btn'>Test</div>

<!-- Then create the .btn style in css file -->
<style>
@tailwind base;
@tailwind components;
.btn {
  @apply inline-block px-5 py-3 text-sm 
  font-semibold tracking-wider text-white uppercase 
  bg-indigo-500 rounded-lg shadow-lg sm:text-base 
  hover:bg-indigo-400 hover:-translate-y-0.5 transform transition 
  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 
  focus:ring-opacity-50 active:bg-indigo-600 sm:hover:bg-green-500;
}
@tailwind utilities;
</style>
```

The orders of adding class in tailwind css is matter or you can put in `@layer` component directive

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .btn {
    @apply inline-block px-5 py-3 text-sm font-semibold tracking-wider uppercase rounded-lg focus:outline-none focus:ring focus:ring-offset-2 sm:text-base;
  }
  .btn-primary {
    @apply text-white bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600;
  }
  .btn-secondary {
    @apply inline-block px-5 py-3 text-gray-800 bg-gray-300 hover:bg-gray-200 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-400;
  }
}
```

Theme configuration in `tailwind.config.js`

```javascript
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
```

then apply `brand` theme to the class with color you want the `brand` theme such as

```html
<div className='text-brand'></div>
<div className='text-brand-light'></div>
<div className='text-brand-dark'></div>
<h1 className='font-headline'></h1>
```
