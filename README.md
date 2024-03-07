# MyApp

# Setup

- Install dependencies by running `yarn`
- Run `yarn start` to start the app
- Select the platform you want to run the app on by pressing `i` for iOS or `a` for Android

# Code Style

We use [Prettier](https://prettier.io/) to format our code. This will enforce code style, as well as ensuring that Tailwind classes are ordered consistently.

You can run `yarn format` to format the code. Alternatively, you can set up your editor to format on save using the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), ensuring that your Prettier settings are using the project's `.prettierrc` file.

We use ESLint to enforce code quality. You can run `yarn lint` to check for any linting errors.

Alternatively, you can set up your editor to lint on save using the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). Ensure that your ESLint settings are using the project's `.eslintrc.js` file.

# Styling

We use Nativewind to style our components. This allows us to use Tailwind classes in our React Native components.
The Tailwind documentation can be found [here](https://tailwindcss.com/docs). A cheatsheet can be found [here](https://tailwindcomponents.com/cheatsheet/) for fast lookup of utility classes.

# Expo

We use Expo to build our app. Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help us develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
Documentation for Expo can be found [here](https://docs.expo.io/).

# Observability

We use Firebase Crashlytics to monitor the app for crashes. This allows us to quickly identify and fix bugs in the app.
We use Firebase Analytics to monitor the app for usage. This allows us to see how users are using the app.
Documentation for Firebase can be found [here](https://firebase.google.com/docs).
