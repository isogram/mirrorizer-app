import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'

import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import metrics from '../../config/metrics'

export default class ResetForm extends Component {
  // static propTypes = {
  //   isLoading: PropTypes.bool.isRequired,
  //   onResetPasswordPress: PropTypes.func.isRequired,
  //   onLoginLinkPress: PropTypes.func.isRequired
  // }

  state = {
    email: '',
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {
    const { email, password } = this.state
    const { isLoading, onResetPasswordPress, onLoginLinkPress } = this.props
    const isValid = email !== ''
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
          <CustomTextInput
            name={'email'}
            ref={(ref) => this.emailInputRef = ref}
            placeholder={'Email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onChangeText={(value) => this.setState({ email: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => onResetPasswordPress(email)}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.resetButton}
              textStyle={styles.resetButtonText}
              text={'Submit'}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.resetLink}
            onPress={onLoginLinkPress}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Ingat kata sandi?'}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  resetButton: {
    backgroundColor: 'white'
  },
  resetButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
  resetLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})
