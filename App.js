import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import React from 'react';
import {Button, Heading, Stack, NativeBaseProvider } from 'native-base';


const my_button_sound = require('./assets/buttonpress.wav') // sets my button press sound to this soundfile
// const my_reset_sound = require('./assets/buttonreset.wav') // may be used later to implement a reset sound
const soundObj = new Audio.Sound()
var load = 0;

const Counter1 = () => { // counts the first "class" that I am counting for -- CLASS AT 10:15 AM
  var highnumber = 33;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return ( // provides styling for the whole app page
    <NativeBaseProvider styles={styles.container}> 
      <View style={styles.container}>
      <Heading><Text>CIT 111</Text></Heading>
      <Heading><Text>{cdown} students are absent.</Text></Heading>
      <Heading><Text>{cup} students are here.</Text></Heading>
      <Text>{'\n'}</Text>
      
        <Button backgroundColor={'amber.100'} variant='outline' size='lg' // creates the button with the specified properties to activate the counter
          disabled = {disable}
          onPress={() => {
            if (cdown != 0)
            {
              setCdown(cdown - 1);
              setCup(cup + 1);
              playCountSound(); // plays a sound when pressed
            }
            if (cdown == 1)
            {
              setDisable(true) // disables the button when the counter reaches zero
            }
              // console.log(count)
            
          }}
          title = "press me"
        ><Text style={styles.text}>COUNT</Text></Button>
        <Text>
          {'\n'}
        </Text>
        <Button backgroundColor={'amber.100'} variant='outline' size='sm' // creates a button to increase the counter
          onPress={() => {
            if (cdown != highnumber)
            {
              setCdown(cdown + 1);
              setCup(cup - 1);
              playCountSound(); // plays a sound when pressed
            }
            if (cdown == highnumber)
            {
              setDisable(true) // disables the button when the counter reaches the high number
            }
          }
          }
          title = "press me"
        ><Text style={styles.text}>INCREASE</Text></Button>
        <Text>
          {'\n'}
        </Text>
        <Button backgroundColor={'red.500'} size='sm' // creates a button to reset the class
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




const Counter2 = () => { // counts the second "class" that I am counting for -- CLASS AT 11:30 AM
  var highnumber = 34;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return ( // provides styling for the whole app page
    <NativeBaseProvider styles={styles.container}>
      <View style={styles.container}>
      <Heading><Text>WDD 130</Text></Heading>
      <Heading><Text>{cdown} students are absent.</Text></Heading>
      <Heading><Text>{cup} students are here.</Text></Heading>
      <Text>{'\n'}</Text>
        <Stack>
        <Button backgroundColor={'amber.100'} variant='outline' size='lg' // creates the button with the specified properties to activate the counter
          disabled = {disable}
          onPress={() => {
            if (cdown != 0)
            {
              setCdown(cdown - 1);
              setCup(cup + 1);
              playCountSound(); // plays a sound when pressed
            }
            if (cdown == 1)
            {
              setDisable(true) // disables the button when the counter reaches zero
            }
              // console.log(count)
            
          }}
          title = "press me"
        ><Text style={styles.text}>COUNT</Text></Button> 
        <Text>
          {'\n'}
        </Text>
        <Button backgroundColor={'amber.100'} variant='outline' size='sm' // creates a button to increase the counter
          onPress={() => {
            if (cdown != highnumber)
            {
              setCdown(cdown + 1);
              setCup(cup - 1);
              playCountSound(); // plays a sound when pressed
            }
            if (cdown == highnumber)
            {
              setDisable(true) // disables the button when the counter reaches the high number
            }
          }
          }
          title = "press me"
        ><Text style={styles.text}>INCREASE</Text></Button>
        <Text>
          {'\n'}
        </Text>
        <Button backgroundColor={'red.500'} size='sm' // creates a button to reset the class
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


const playCountSound = async () => { // loads the sound to play when button is pressed

  if (load == 0)
  {
    await soundObj.loadAsync(my_button_sound);
    load ++;
    // console.log(load);
  }
  await soundObj.replayAsync(my_button_sound);
}

// may eventually be used to play a reset sound
// const playResetSound = async () => {
//   if (load == 1)
//   {
//     await soundObj.loadAsync(my_reset_sound);
//     load ++;
//     console.log(load)
//   }
//   await soundObj.replayAsync(my_reset_sound);
// }


const CounterPage = () => {
  return (
    <>
      <Counter1/>
      <Counter2/>
    </>
  );
}

const styles = StyleSheet.create({ // creates the styles for my app page
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

export default CounterPage; // runs the CounterPage function to display my app