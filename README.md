# CareCloud React Redux Boilerplate

This is a boilerplate for react-redux applications. It was created using [create-react-app](https://github.com/facebookincubator/create-react-app). 

Packages included are: 
+ [react-router](https://github.com/ReactTraining/react-router)
+ [redux-thunk](https://github.com/gaearon/redux-thunk) for simple async middleware
+ [redux-observables](https://github.com/redux-observable/redux-observable) for more complex async (canceling, debouncing, throttling)
+ [redux-logger](https://github.com/evgenyrodionov/redux-logger)
+ [fetch](https://github.com/github/fetch) polyfill for browsers that don't support the [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)

## File Structure

### Ducks Pattern

The ducks pattern groups actions, action-creators, and reducers in one file by resource in the modules directory. The components (both presentational and container) live in the components directory.

> Each module contains all of its related constants, actions/action creators, and it’s reducer. [sic]

For more on the ducks pattern:

[Ducks Pattern](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.inu45cir2)

[Ducks Proposal Repo](https://github.com/erikras/ducks-modular-redux)