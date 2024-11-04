import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const ListShow = () => {
  const users = [
    {
      name: 'Noman',
      id: 12,
    },
    {
      name: 'Lingkon',
      id: 13,
    },
    {
      name: 'Sahin',
      id: 14,
    },
  ];

  return (
    <View>
      <Text>List Show</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles?.title}>{item.name}</Text>}
        keyExtractor={(item) => item?.id}
      />

      {users.map(item => (
        <Text style={styles?.title} key={item.id}>{item.name}</Text>
      ))}

    </View>
  );
};

export default ListShow;

const styles = StyleSheet.create({
  title: {fontSize: 24, marginBottom: 20, textAlign: 'center'},
});
