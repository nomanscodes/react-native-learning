import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const InputForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [individual , setIndividual] = useState('');

  // Function to handle input changes and update the state
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,   // Keep previous form data
      [field]: value,  // Update only the field that has changed
    });
  };

  // Function to handle form submission or reset
  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Reset form data if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Form</Text>

      <TextInput
        value={formData.name}
        onChangeText={text => handleInputChange('name', text)}
        style={styles.input}
        placeholder="Enter your name"
      />

      <TextInput
        value={formData.email}
        onChangeText={text => handleInputChange('email', text)}
        style={styles.input}
        placeholder="Enter your email"
      />

      <TextInput
        value={formData.phone}
        onChangeText={text => handleInputChange('phone', text)}
        style={styles.input}
        placeholder="Enter your phone"
      />

      <Text>
        {individual}
      </Text>

      <TextInput
        value={individual}
        style={styles.input}
        onChangeText={setIndividual}
        placeholder="Individual"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit} // Handle submit or reset
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});


export  default  InputForm;
