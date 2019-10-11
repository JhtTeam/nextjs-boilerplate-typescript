# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

You should flow this link to install [PlopJS](https://plopjs.com)

Flow this [Tutorial](https://blog.logrocket.com/automatically-generate-your-own-react-components-with-plop-js-2da3b39914f3)

## Usage

#### 1. Create the new screen
```node
plop screen {{name}}
ex: plop screen Login
```
This step will be automatic create the Login/index.tsx and Login/styles.scss under folder src/screens.
It's also create the page Login under pages folder


#### 2. Create screen component
```node
plop screenComponent -- --screen {{screenName}} --name {{name}}
ex: plop screenComponent -- --screen Login --name LoginForm
```
This step will be automatic create the Login/index.tsx and Login/styles.scss under folder src/screens/components.

#### 3. Create the new screen auth
```node
plop screenAuth {{name}}
ex: plop screen Profile

```
This step will be automatic create the Profile/index.tsx and Profile/styles.scss under folder src/screens.

#### 4. Create shared component
```node
plop component {{name}}
ex: plop component LoginForm
```
This step will be automatic create the LoginForm/index.tsx and LoginForm/styles.scss under folder src/components.

#### 5. Create the saga
```node
plop saga {{name}
ex: plop saga user
```
This step will be automatic create the sagas/user.ts under folder src/sagas and automatic add user saga to src/sagas/index.ts.

#### 6. Create the reducer
```node
plop reducer {{name}
ex: plop reducer user
```
This step will be automatic create the reducers/user.ts under folder src/reducers and automatic add user reducer to src/reducers/index.ts.

#### 7. Create the new service
```node
plop service {{name}
ex: plop service user
```
This step will be automatic create the services/user.ts under folder src/services and automatic add user reducer to src/services/index.ts.