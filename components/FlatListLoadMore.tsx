import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListAll = () => {
  const [data, setData] = useState([
    'red',
    'green',
    'gray',
    'white',
    'cyan',
    'purple',
    'orange',
  ]);

  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (!loading) {
      setLoading(true);
      const copyData = data;
      setTimeout(() => {
        copyData.push(...data);
        setData(copyData);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          loadMore();
        }}
        renderItem={({item}) => (
          <View>
            <View style={{backgroundColor: item, height: 200}} />
          </View>
        )}
        ListFooterComponent={() => {
          return (
            loading && (
              <View style={{height: 50, backgroundColor: '#2dc3b2'}}>
                <Text>Loading...</Text>
              </View>
            )
          );
        }}
      />
    </View>
  );
};

export default FlatListAll;
