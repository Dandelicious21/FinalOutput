import React from 'react';
import { Dimensions,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  
const KeyboardAvoidingWrapper = ({ percent, children }) => {
	return (		
		<ScrollView contentContainerStyle={{
			height:windowHeight-(windowHeight*percent),
			width:windowWidth,
			backgroundColor:'#00000000'
		}}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{children}
			</TouchableWithoutFeedback>
		</ScrollView>
	);
}

export default KeyboardAvoidingWrapper;