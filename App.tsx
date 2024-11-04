import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import ClassComponent from './components/ClassComponent.tsx';
import UseEffectUnmount from './components/UseEffectUnmount.tsx';

function App(): React.JSX.Element {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {/*<ClassComponent items={items} />*/}
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show ? <UseEffectUnmount /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

export default App;
