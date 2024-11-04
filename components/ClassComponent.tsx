import React, {Component} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';

class ClassComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 1,
    };
  }
  counter = () => {

    this.setState({name: this.state.name + 6}); // Update name using setState
  };
  render() {
    return (
      <View>
        <TextInput placeholder="Enter Your Name" />
        <Button onPress={this.counter} title="Press Me"/>
        <Text>{this.state.name}</Text>
        <FlatList
          data={this.props.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Text>{item}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default ClassComponent;
