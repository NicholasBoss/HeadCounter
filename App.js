import { useState } from 'react';
import { StyleSheet, Text, View, NativeModules, ScrollView } from 'react-native';
import {Audio} from 'expo-av';
import React from 'react';
import {Button, VStack, Box, Heading, Stack, NativeBaseProvider, Divider, Center} from 'native-base';


const my_button_sound = require('./assets/buttonpress.wav')
const my_reset_sound = require('./assets/buttonreset.wav')
const soundObj = new Audio.Sound()
var load = 0;

const Counter1 = () => {
  var highnumber = 24;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return (
    <NativeBaseProvider styles={styles.container}>
      <View style={styles.container}>
      <Heading><Text>9 AM Class</Text></Heading>
      <Heading><Text>{cdown} students are absent.</Text></Heading>
      <Heading><Text>{cup} students are here.</Text></Heading>
      <Text>{'\n'}</Text>
      
        <Button backgroundColor={'amber.100'} variant='outline' size='lg'
          disabled = {disable}
          onPress={() => {
            if (cdown != 0)
            {
              setCdown(cdown - 1);
              setCup(cup + 1);
              playCountSound();
            }
            if (cdown == 1)
            {
              setDisable(true)
            }
              // console.log(count)
            
          }}
          title = "press me"
        ><Text style={styles.text}>COUNT</Text></Button>
        <Text>
          {'\n'}
          {'\n'}
        </Text>
        <Button backgroundColor={'red.500'} size='sm'
          onPress={() =>{
            // playResetSound()
            setCdown(highnumber)
            setCup(lownumber)
            setDisable(false)
            
          }}
          title = 'Restart'

          >Reset Class</Button>
      
    </View>
    </NativeBaseProvider>
  );
}




const Counter2 = () => {
  var highnumber = 27;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return (
    <NativeBaseProvider styles={styles.container}>
      <View style={styles.container}>
      <Heading><Text>11:30 AM Class</Text></Heading>
      <Heading><Text>{cdown} students are absent.</Text></Heading>
      <Heading><Text>{cup} students are here.</Text></Heading>
      <Text>{'\n'}</Text>
        <Stack>
        <Button backgroundColor={'amber.100'} variant='outline' size='lg'
          disabled = {disable}
          onPress={() => {
            if (cdown != 0)
            {
              setCdown(cdown - 1);
              setCup(cup + 1);
              // playCountSound();
            }
            if (cdown == 1)
            {
              setDisable(true)
            }
              // console.log(count)
            
          }}
          title = "press me"
        ><Text style={styles.text}>COUNT</Text></Button>
        <Text>
          {'\n'}
          {'\n'}
        </Text>
        <Button backgroundColor={'red.500'} size='sm'
          onPress={() =>{
            // playResetSound()
            setCdown(highnumber)
            setCup(lownumber)
            setDisable(false)
            
          }}
          title = 'Restart'

          >Reset Class</Button>
        </Stack>
    </View>
    </NativeBaseProvider>
  );
}


const playCountSound = async () => {

  if (load == 0)
  {
    await soundObj.loadAsync(my_button_sound);
    load ++;
    // console.log(load);
  }
  // await soundObj.replayAsync(my_button_sound);
}

// const playResetSound = async () => {
//   if (load == 1)
//   {
//     await soundObj.loadAsync(my_reset_sound);
//     load ++;
//     console.log(load)
//   }
//   await soundObj.replayAsync(my_reset_sound);
// }


const Cafe = () => {
  return (
    <>
      <Counter1/>
      <Counter2/>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'gold'
  },
  container: {
    flex: 1,
    backgroundColor: '#87F1FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  
 
});

export default Cafe;