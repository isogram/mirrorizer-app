import React, { Component, PropTypes } from 'react'
import { KeyboardAvoidingView, LayoutAnimation, Platform, StyleSheet, UIManager, BackHandler, Alert } from 'react-native'
import { Image, View } from 'react-native-animatable'
import {observer} from 'mobx-react/native'
import {Actions} from 'react-native-router-flux'

import imgLogo from '../../images/logo.png'
import metrics from '../../config/metrics'

import Opening from './Opening'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ResetForm from './ResetForm'

import UserStore from '../../stores/UserStore'

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)

/**
 * The authentication screen.
 * It shows three different sub-screens:
 * - The opening screen, with the two buttons that redirect to the login/signup forms (if this.state.visibleForm === null)
 * - The signup form (if this.state.visibleForm === 'SIGNUP')
 * - The login form (if this.state.visibleForm === 'LOGIN')
 *
 * The app state (isLoggedIn, isLoading) and the login/signup functions are received as props from src.app.js
 *
 * The animations are delegated to:
 * - react-native-animatable: for the simpler animations of the components (in e.g. bounceIn animation of the logo)
 * - react-native's LayoutAnimation: for the form show/hide animation
 * - react-native's KeyboardAvoidingView: for applying a bottom padding when a keyboard show-up is detected
 *
 * An example of this screen animation flow is the following:
 * - The user opens the app.
 * - The logo shows up using the bounceIn animation of react-native-animatable, while the "Opening" subscreen animates the button
 *   using the fadeIn animation of react-native-animatable.
 * - The user taps on the "Create account" button.
 * - _setVisibleForm gets called with the 'SIGNUP' parameter. It configures the next animation and sets this.state.visibleForm to 'SIGNUP'.
 *   The state change triggers a render and the change of formStyle gets animated (thanks to the animation configuration previously
 *   applied by _setVisibleForm).
 * - Just after the signup form has become visible it animates the form button using the bounceIn animation of react-native-animatable.
 * - The user fills up its info and signup succesfully.
 * - componentWillUpdate checks the isLoggedIn props and after realizing that the user has just authenticated it calls _hideAuthScreen.
 *   _hideAuthScreen then 1. calls the SignupForm.hideForm(), that hides the form buttons (zoomOut) and the form itself (fadeOut),
 *   2. fadeOut the logo, 3. tells the container that the login animation has completed and that the app is ready to show the next screen (HomeScreen).
 */
 @observer
export default class AuthScreen extends Component {
  // static propTypes = {
  //   isLoggedIn: PropTypes.bool.isRequired,
  //   isLoading: PropTypes.bool.isRequired,
  //   signup: PropTypes.func.isRequired,
  //   login: PropTypes.func.isRequired,
  //   resetPassword: PropTypes.func.isRequired,
  //   onMirrorizerAppCompleted: PropTypes.func.isRequired // Called at the end of a succesfull login/signup animation
  // }

  state = {
    visibleForm: null // Can be: null | SIGNUP | LOGIN
  }

  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', function() {
      Alert.alert("Konfirmasi", "Keluar dari aplikasi?",
        [
          {text:"Tidak", style:'cancel'},
          {text:"Ya", onPress:()=>{BackHandler.exitApp()}}
        ]
      )
     return true;
    });
  }

  componentWillUpdate (nextProps) {
    // If the user has logged/signed up succesfully start the hide animation
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this._hideAuthScreen()
    }
  }

  _hideAuthScreen = async () => {
    // 1. Slide out the form container
    await this._setVisibleForm(null)
    // 2. Fade out the logo
    await this.logoImgRef.fadeOut(800)
    // 3. Tell the container (app.js) that the animation has completed
    this.props.onMirrorizerAppCompleted()
  }

  _setVisibleForm = async (visibleForm) => {
    // 1. Hide the current form (if any)
    if (this.state.visibleForm && this.formRef && this.formRef.hideForm) {
      await this.formRef.hideForm()
    }
    // 2. Configure a spring animation for the next step
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    // 3. Set the new visible form
    this.setState({ visibleForm })
  }

  login(email, password){
    UserStore.login(email, password)
    .then((result)=>{
      console.log('login ', result)
      if(!result.error && result.result){
        const {token, user} = result.result;
        Actions.HomeScreen({
          token : token,
          user : user,
          logout : ()=>{UserStore.logout()}
        });
      }
    });
  }

  signup(email, password, fullName){
    UserStore.register(email, password, fullName)
    .then((result)=>{console.log('signup', result)})
  }

  resetPassword(email){
    UserStore.resetPassword(email)
    .then((result)=>{console.log('resetPassword', result)})
  }



  render () {
    // const { isLoggedIn, isLoading, signup, login, resetPassword } = this.props
    const { isLoggedIn, signup, resetPassword } = this.props;
    const {isLoading} = UserStore;
    const { visibleForm } = this.state
    // The following style is responsible of the "bounce-up from bottom" animation of the form
    const formStyle = (!visibleForm) ? { height: 0 } : { marginTop: 40 }
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={imgLogo}
        />
        {(!visibleForm && !isLoggedIn) && (
          <Opening
            onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
            onSignInPress={() => this._setVisibleForm('LOGIN')}
            onResetPasswordPress={() => this._setVisibleForm('RESET')}
          />
        )}
        <KeyboardAvoidingView
          keyboardVerticalOffset={-100}
          behavior={'padding'}
          style={[formStyle, styles.bottom]}
        >
          {(visibleForm === 'SIGNUP') && (
            <SignupForm
              ref={(ref) => this.formRef = ref}
              onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
              onSignupPress={this.signup}
              isLoading={isLoading}
            />
          )}
          {(visibleForm === 'LOGIN') && (
            <LoginForm
              ref={(ref) => this.formRef = ref}
              onSignupLinkPress={() => this._setVisibleForm('SIGNUP')}
              onResetPasswordLinkPress={() => this._setVisibleForm('RESET')}
              onLoginPress={this.login}
              isLoading={isLoading}
            />
          )}
          {(visibleForm === 'RESET') && (
            <ResetForm
              ref={(ref) => this.formRef = ref}
              onResetPasswordPress={this.resetPassword}
              onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
              isLoading={isLoading}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: 'white'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bottom: {
    backgroundColor: '#E81123'
  }
})
