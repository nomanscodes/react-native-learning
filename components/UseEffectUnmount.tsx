import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const UseEffectUnmount = () => {

  const timer = setInterval(() => {
    console.warn('Timer Called');
  }, 4000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View>
      <Text>I Am A Component</Text>
    </View>
  );
};

export default UseEffectUnmount;
