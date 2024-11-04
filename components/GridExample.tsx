import React, { useState } from 'react';
import { Text, View } from 'react-native';

const GridExample = () => {
  const [column, setColumn] = useState(3);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {items.map((item: any) => (
        <Text
          key={item}
          style={{
            width: 100 / column + '%',
            ...styles.item,
          }}>
          Item {item}
        </Text>
      ))}
    </View>
  );
};

const styles = {
  item: {
    height: 100,
    backgroundColor: 'orange',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

export default GridExample;
