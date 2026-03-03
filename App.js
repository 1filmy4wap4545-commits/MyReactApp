import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My React App</Text>
      
      <View style={styles.card}>
        <Text style={styles.title}>iPhone 14 Pro</Text>
        <Text style={styles.price}>$999</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.title}>Samsung S23</Text>
        <Text style={styles.price}>$899</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.title}>MacBook Pro</Text>
        <Text style={styles.price}>$1299</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 8,
  },
});
