import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'

import CustomButton from '../../components/CustomButton'
import metrics from '../../config/metrics'

export default class Opening extends Component {
  static propTypes = {
    onCreateAccountPress: PropTypes.func.isRequired,
    onSignInPress: PropTypes.func.isRequired,
    onResetPasswordPress: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <View animation={'zoomIn'} delay={600} duration={400}>
          <CustomButton
            text={'Daftar'}
            onPress={this.props.onCreateAccountPress}
            buttonStyle={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
          />
        </View>
        <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorOr}>{'Atau'}</Text>
          <View style={styles.separatorLine} />
        </View>
        <View animation={'zoomIn'} delay={800} duration={400}>
          <CustomButton
            text={'Masuk'}
            onPress={this.props.onSignInPress}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />
        </View>
        <Text
          ref={(ref) => this.linkRef = ref}
          style={styles.resetPasswordLink}
          onPress={this.props.onResetPasswordPress}
          animation={'fadeIn'}
          duration={600}
          delay={400}
        >
          {'Lupa kata sandi?'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.DEVICE_WIDTH * 0.1,
    justifyContent: 'center'
  },
  createAccountButton: {
    backgroundColor: '#9B9FA4'
  },
  createAccountButtonText: {
    color: 'white'
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#9B9FA4'
  },
  separatorOr: {
    color: '#9B9FA4',
    marginHorizontal: 8
  },
  signInButton: {
    backgroundColor: '#E74856'
  },
  signInButtonText: {
    color: 'white'
  },
  resetPasswordLink: {
    color: '#383838',
    alignSelf: 'center',
    padding: 20
  }
})
