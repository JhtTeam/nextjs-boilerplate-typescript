* Note: The first thing to do is flow installation from this site:
https://plopjs.com
* Tutorial: https://blog.logrocket.com/automatically-generate-your-own-react-components-with-plop-js-2da3b39914f3/

1. Create the new screen
plop screen {{name}}
ex: plop screen Login

2. Create screen component
plop screenComponent -- --screen {{screenName}} --name {{name}}
ex: plop screenComponent -- --screen Login --name LoginForm

3. Create the saga
plop saga {{name}
ex: plop saga user

4. Create the reducer
plop reducer {{name}
ex: plop reducer user

5. Create the new screen auth
plop screenAuth {{name}}
ex: plop screen Profile