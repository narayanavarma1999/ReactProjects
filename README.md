# ReactProjects

React is a javascript library to build UI interfaces
Normally , we can build applications using HTML ,CSS and JAVASCRIPT. But to build in easier and faster way react helps in building
large scale single page applications much easier and faster.
React uses React CDN links in order to inject react functionality into our application for building applications using react
React CDN files consists of REACT and REACTDOM
with the help of react and reactdom we can create react elements
React.createElement("h1",{},"This is a h1 tag") ---> This gives an object and creates DOM elements

In order to build large scale applications react itself is not sufficient to build large scale user interface applications.
So in order to achieve building and bundling of these applications we need bundlers like webpack, parcel, vite which bundle with the help of babel which converts JSX to react elements.React uses JSX in order to render it's element to the UI, where babel converts this JSX into react elements

package.json is a package dependency management file

^ - carot ---> only patch and minor updates
~ - tidle ---> only patch updates

package-lock.json , keeps track of exact version of dependencies

Parcel together with react provides a lot functionality as specified below

Parcel Functionality

- creates a server
- creates code builds
- for Hot module replacement
- file watching algorithm
- caching for faster development experience
- Image optimization
- Bundle and minify the code
- Compress the files
- Consistent Hashing
- Differentiat bundling - support to older browsers
- Code splitting
- Diagonistics
- Proper Error Handling
- Https
- Tree Shaking - remove unused code

Every react element in react is a javascript object
we can create react elements with React.createElement() which gives an object
But in order to create elements easier react uses JSX elements to render elements
JSX looks similar to HTML elements but not related to HTML
The react render property takes over the charge and converts these JSX elements into HTML elements with the help of babel

Everything in React consists of component

Components consists of two types

1. Functional Components
2. Class Components

Functional Components : The components which consists of function which in return react jsx or react element are called as functional components

Class Components : The components which uses classes to build react components or elenments are called as class components

Component Composition: It is where one component is wrapped (or present) inside another component is called as component composition

We can run any javascript functionality inside jsx using { } curl braces

- We are building a swiggy clone app

Header

- Logo
- Nav Items

Body

- Search
- Restaurant Container
  - Restaurant Card
    - Img
    - Name of Restaurant , Star Rating, Cuisine, delivery time

Footer

- Copyright
- Links
- Address
- Contact

React uses virtual DOM to render the components.React uses reconcilication alogrithm by finding difference in dom elements and states and update the UI.React Fiber which renders the components in two phases

1. Render Phase
2. Commit Phase
   In render phase, react updates the components and the elements in batches and they are actually render purely and with no side effects.May be paused, abort and restarted by React
   In commit phase, runs side effects and updates & works with the DOM and schedules the updates.

<!-- Mounting Phase -->

constructor() -> initialize data using props and state
render -> render the component with initial data
componentDidMount -> this execute in this mounting phase where we can execute side effects like api calls and update the state
when props or state

<!-- Updating Phase -->

componentDidUpdate

<!-- Unmounting Phase -->

componentWillUnmount

---

To optimize the app and improve the application we need to implement chunking, Lazy Loading, Dynamic Bundling,
Code Splitting, on Demand Loading, dynamic loading
