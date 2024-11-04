import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FlatListAll = () => {
  const [data, setData] = useState([
    {
      id: '1',
      title: 'Category 1',
      isShow: false,
      subItems: [
        {id: '1a', name: 'Item 1a'},
        {id: '1b', name: 'Item 1b'},
        {id: '1b', name: 'Item 1b'},
        {id: '1b', name: 'Item 1b'},
        {id: '1b', name: 'Item 1b'},
        {id: '1b', name: 'Item 1b'},
        {id: '1b', name: 'Item 1b'},
      ],
    },
    {
      id: '2',
      title: 'Category 2',
      isShow: false,
      subItems: [
        {id: '2a', name: 'Item 2a'},
        {id: '2b', name: 'Item 2b'},
        {id: '2b', name: 'Item 2b'},
        {id: '2b', name: 'Item 2b'},
        {id: '2b', name: 'Item 2b'},
      ],
    },
  ]);

  const toggleItem = (index:Number) => {
    const newData = data.map((item, ind) => {
      if (index === ind) {
        return { ...item, isShow: !item.isShow };
      }else {
        return { ...item, isShow: false};
      }
    });
    setData(newData); // Updated state with new data
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.parent} onPress={() => toggleItem(index)}>
              <Text style={styles.heading}>{item.title}</Text>

              {item.isShow && (
                <FlatList
                  data={item.subItems}
                  renderItem={({item, index}) => {
                    return (
                      <View style={styles.subItem}>
                        <Text>{item?.name}</Text>
                      </View>
                    );
                  }}
                />
              )}
              <Text>Toggle</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subItem: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  parent: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    fontSize: 20,
  },
});

export default FlatListAll;
