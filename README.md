# Mirrorizer App

## Project structure 
The structure of the application is the following:
```javascript
src
 ├── app.js // The app entry point (for sake of simplicity I handle here the routing and the state)
 │
 ├── components
 │   ├── CustomButton.js // The button used in the app
 │   ├── CustomTextInput.js // The text input used in the app
 │   └── TouchableView.js // A cross-platform helper view with a touchable behavior
 │
 ├── config
 │   └── metrics.js // App metrics like device width/height, statusbar height, etc...
 │
 ├── containers
 │   ├── AuthScreen
 │   │   ├── index.js // The signup/login screen
 │   │   ├── LoginForm.js // The login form
 │   │   ├── Opening.js // The initial buttons (that redirect to login/signup)
 │   │   └── SignupForm.js // The signup form
 │   └── HomeScreen.js
 │       └── index.js // The post-authentication screen (for this example I simply show a logout button)
 │
 └── images // The app images
```

## Dependencies
The dependencies needed for this app are the following:
```javascript
"react-native" >= "0.38.0",
"react-native-animatable" >= "1.1.0"
```
