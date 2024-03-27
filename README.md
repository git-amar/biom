# biom

## Hosted app

You can view the task hosted on [Netlify](https://jocular-twilight-129b7a.netlify.app/). If you'd like to run it locally, please follow the setup guide below.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## About the task

### Tech stack

For this task, I used the following tech stack:

- node.js _`v20.11.1`_
- npm _`v10.2.4`_
- Vue.js 3 with Vue Router _`v4.3.0`_ and Pinia _`v2.1.7`_ (state management library for Vue.js) - setup with Vite
- TypeScript _`v5.4.0`_
- Sass
- eslint
- Prettier

Additionally, I utilized the following packages to facilitate my development process:

- uuid
- vue3-carousel
- vue3-marquee
- vite-svg-loader

### How I approached the task

- Firstly, I looked at the design template and went over it a few times to understand what was happening.
- Afterwards, I set up the Vue project.
- The template is split into multiple sections, so I started implementing the design section by section, starting from the navbar and ending with the footer.
- At the end, fix any remaining issues.

### What I liked

- The task had some interesting UI challenges, like the scrollable "Meet Biom" greeting in the Meet Biom Section and the movable Biom images with the fade-in text in the "Choose your Biom" section.

### Note about responsivity

- I did not implement mobile-first development or any responsiveness in this task, primarily because I wasn't supplied with the appropriate design templates. Therefore, the task will look best on large screens like laptops and desktops.

### Note about fonts

- Due to the unavailability of Chronicle Display and Brandon Grotesque fonts, I utilized free Google Fonts alternatives that closely resemble them. Specifically, I used Playfair Display as a substitute for Chronicle Display and Josefin Sans for Brandon Grotesque.
- Additionally, please note that the highest `font-weight` available for Josefin Sans (used as a substitute for Brandon Grotesque) is `700`, which corresponds to `bold`. Therefore, I couldn't implement `font-weight: 900;` (`black`) as it exceeds the available font weights.
- Since I was using different fonts, I had to reduce the font weight and size in some cases to match the design templates.

### Estimated time to complete the task

- 5-7 days
