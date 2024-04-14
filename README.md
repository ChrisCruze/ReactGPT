# Prod Project Files

This project contains a set of configuration and component files for a React application. Below are descriptions and documentation for each file included in the 'Prod' view of our Airtable.

## Configuration Files

1. **.babelrc** - Configures Babel for a beginner React project. Dependencies: @babel/core, @babel/preset-env, @babel/preset-react, @babel/plugin-transform-runtime.

2. **webpack.config.js** - Configures Webpack to generate a single compiled JS file named 'bundle.js' for easier deployment. Dependencies: webpack, webpack-cli, html-webpack-plugin, style-loader, css-loader, babel-loader, @babel/preset-react.

3. **package.json** - Defines the project's metadata, dependencies, and scripts for managing a React application with Tailwind CSS. Dependencies: React, ReactDOM, react-scripts, Tailwind CSS.

4. **index.html** - Serves as the HTML template for the React application, containing the root div where the app will be mounted.

## React Components

5. **index.js** - Entry point of the React application, which renders the App component into the DOM. Dependencies: React, ReactDOM.

6. **App.js** - Main React component integrating multiple styling libraries. Dependencies: React, React Bootstrap, Material UI, Tailwind CSS.

7. **useAirtableHooks.js** - Combines three specific React hooks for fetching and managing data from Airtable. Dependencies: react, axios.

8. **HeroWithProps.js** - Customizable hero section for a landing page, using Material UI with props. Dependencies: React, Material UI.
