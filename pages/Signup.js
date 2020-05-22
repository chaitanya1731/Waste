import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
				{/* <Logo/> */}
				<Form type="Signup"/>
				<View style={styles.loginTextCont}>
					<Text style={styles.loginText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.loginButton}> Login</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  loginTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  loginText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  loginButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});