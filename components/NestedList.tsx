import React from 'react';
import { View, Text, FlatList } from 'react-native';

const NestedList = () => {

  const data = [
    {
      id: '1',
      title: 'Category 1',
      subItems: [
        { id: '1a', name: 'Item 1a' },
        { id: '1b', name: 'Item 1b' },
      ],
    },
    {
      id: '2',
      title: 'Category 2',
      subItems: [
        { id: '2a', name: 'Item 2a' },
        { id: '2b', name: 'Item 2b' },
      ],
    },
  ];


  const renderSubItem = ({ item }) => (
    <Text style={{ marginLeft: 20 }}>{item.name}</Text>
  );

  const renderItem = ({ item }) => (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      {/* Nested FlatList */}
      <FlatList
        data={item.subItems}
        renderItem={renderSubItem}
        keyExtractor={(subItem) => subItem.id}
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NestedList;
