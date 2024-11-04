import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width

const GridScreen = () => {
  const items = Array.from({ length: 20 }).map((_, i) => `Item ${i + 1}`);

  const minItemWidth = 100;
  const paddingHorizontal = 10; // Overall horizontal padding
  const totalWidth = width - 2 * paddingHorizontal; // Adjust width by total padding
  const numColumns = Math.floor(totalWidth / minItemWidth);
  const itemWidth = totalWidth / numColumns - 10;

  const renderItem = ({ item }) => (
    <View style={[styles.gridItem, { width: itemWidth }]}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      key={numColumns} // Force re-render when numColumns changes
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal:10 }} // Apply padding horizontally
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: '#4CAF50',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin:5
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default GridScreen;
