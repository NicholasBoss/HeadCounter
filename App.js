import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import React from 'react';
import {Button, Heading, Stack, NativeBaseProvider, Select } from 'native-base'; 


const my_button_sound = require('./assets/buttonpress.wav') // sets my button press sound to this soundfile
// const my_reset_sound = require('./assets/buttonreset.wav') // may be used later to implement a reset sound
const soundObj = new Audio.Sound()
var load = 0;
// dropdown list to select which class to count

const Counter1 = () => {
  return (
    <>
    <CIT111_4/>
    <CIT111_3/>
    </>
  );
}

const Counter2 = () => {
  return (
    <>
    <WDD130_5/>
    <WDD130_8/>
    </>
  );
}

const CIT111_4 = () => { // counts the first "class" that I am counting for -- CIT 111 section 4 at 9:00 AM
  var highnumber = 35;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return ( // provides styling for the whole app page
    <NativeBaseProvider styles={styles.container}> 
      <View style={styles.container}>
      <Heading><Text>CIT 111 9AM</Text></Heading>
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

const CIT111_3 = () => { // counts the first "class" that I am counting for -- CIT 111 section 3 at 11:30 AM
  var highnumber = 35;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return ( // provides styling for the whole app page
    <NativeBaseProvider styles={styles.container}> 
      <View style={styles.container}>
      <Heading><Text>CIT 111 11:30 AM</Text></Heading>
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



const WDD130_5 = () => { // counts the second "class" that I am counting for -- WDD 130 section 5 at 7:45 AM
  var highnumber = 30;
  var lownumber = 0;
  var classcode = 'WDD 130';
  const [code, setCode] = useState(classcode);
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return ( // provides styling for the whole app page
    <NativeBaseProvider styles={styles.container}>
      <View style={styles.container}>
      <Heading><Text>WDD 130 7:45AM</Text></Heading>
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

const WDD130_8 = () => { // counts the second "class" that I am counting for -- WDD 130 section 8 at 9:30 AM
  var highnumber = 30;
  var lownumber = 0;
  const [cdown, setCdown] = useState(highnumber);
  const [cup, setCup] = useState(lownumber);
  const [disable, setDisable] = React.useState(false);
  
  return ( // provides styling for the whole app page
    <NativeBaseProvider styles={styles.container}>
      <View style={styles.container}>
      <Heading><Text>WDD 130 9AM</Text></Heading>
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


const Home = () => {
  const [selected, setSelected] = React.useState();
  if (selected == "CIT 111")
    {
      return (
      <Counter1/>
      )
    }
  else if (selected == "WDD 130")
    {
      return (
      <Counter2/>
      )
    }
  else{
  return (
    <>
    <NativeBaseProvider styles={styles.container}>
    <View style={styles.container}>
      <Stack space={5} w="50%" mx="auto">
        <Heading size="md" color="primary.500">
          Select a class
        </Heading>
        <Select selectedValue={selected} minWidth={200} backgroundColor="amber.100"
        accessibilityLabel="Select class" 
        placeholder="Select class" 
        onValueChange={(itemValue) => setSelected(itemValue)}>
          <Select.Item label="CIT 111" value="CIT 111" />
          <Select.Item label="WDD 130" value="WDD 130" />
        </Select>
      </Stack>
      </View>
    </NativeBaseProvider>
    
      {/* <Counter1/>
      <Counter2/> */}
    </>
    
  );
    };
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

export default Home; // runs the CounterPage function to display my app