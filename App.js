import React, { useEffect, useState } from "react";
import { View ,Text } from "react-native";
import TouchID from "react-native-touch-id";
export default function App(){
  const [isAuth,setIsAuth] = useState(false);



  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: 'blue', // Android
    imageErrorColor: 'yellow', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };




  useEffect(()=>{
    handleBiometric();
  });
const handleBiometric = () => {
  TouchID.isSupported(optionalConfigObject).then((biometryType)=>{
    if (biometryType === 'FaceID') {
      console.log('FaceID is supported.');
  } else {
    console.log("biometryType===>",biometryType)
      console.log('TouchID is supported.');
      TouchID.authenticate('', optionalConfigObject).then((success)=>{
        console.log('Success',success)
        setIsAuth(success);
      }).catch((error)=>{
        console.log('Error',error)
      })
  }
  })
}

  return(
    <View>
      <Text>
        Hell
      </Text>
    </View>

  )
}