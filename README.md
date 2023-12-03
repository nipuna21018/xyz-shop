
# XYZ Shop

This is a sample e-comerce website

## Table of Contents

- [Technologies Used](#technologies-used)
- [Design Patterns](#design-patterns)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

## Technologies Used

- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/) (version 16)

## Design Patterns

- Higher Order Components (HOC)

    HOC design pattern is used in this project. 
    You can see the HOC components in path `src\modules\shared\components\hoc`

    You will be able to see 3 hoc components used. 

    - Infinite Scroll - This component holds the logic to do the infinite scrolling and used in `src\modules\recomendation\components\recommendationContainer\recommendationContainer.tsx` to display the product recomendations. We also can use this infinite hoc to implement any infinite scrolling feature which will reuse the logic. 

        Sample usage

        ```js
        export default connect(mapStateToProps,mapDispatchToProps)(withInfiniteScroll(RecommendationContainer));

    - Main Layout 

- Provider Design Pattern

    Provider design pattern is used with Redux store as it defaults to provider design pattern



## Run Locally

Clone the project

```bash
  git clone https://github.com/nipuna21018/xyz-shop
```

Go to the project directory

```bash
  cd xyz-shop
```

Install dependencies

```bash
  npm install
```

Create .env file

```bash
  touch .env
```

Add & save below to .env

```bash
REACT_APP_AUTH_SERVICE_URL=https://api.escuelajs.co/api/v1/auth
REACT_APP_API_BASE_URL=https://8c155025-93d6-4ead-a36d-9afdf9c1f291.mock.pstmn.io
```

Start the server

```bash
  npm run start
```

## Test Locally

```bash
  npm run test
```