# Simple React Starter

Simple ReactJS starter with an opinionated folder structure.

## Getting Started

1. Ensure you've followed the [ReactJS - Getting Started Guide](https://reactjs.org/docs/getting-started.html)
1. Clone this project `git clone https://github.com/mohammadsafia/react-structure-one.git`
1. Run `yarn install` from root directory to install dependencies
1. Run `yarn start` from root directory

## Folder Structure

- `src/` - Contains all of our react codebase
  - `index.tsx` - Base react component
  - `routes/` - App navigation files
    - `index.ts` - Route root
    - `routes.ts` - App navigation
  - `api/` - Api call related functions
  - `assets/` - Images, fonts and other static files
  - `config/` - Config files
  - `containers/` - [Smart Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
  - `context/` - [React Context](https://reactjs.org/docs/context.html)
  - `store/` - React store like redux (Store)
    - `sub-store/` - Sub store mean any part of the store like user or product etc...
      - `sub.action.ts` - Action Types and Action Creators
      - `sub.reducer.ts` - Reducers
      - `sub.types.ts` - All types for the sub-store
    - `index.ts` - Store root
    - `root-reducer.ts` - To set laws and store structure
  - `types/` - Typescript related files or functions
  - `utils/` - Helper functions
  - `components/` - [Dumb Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
    - `common/` - Shared components
