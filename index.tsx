import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.tittle}>FilmProGo's coming launches!</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Scary Movie</Text>
          <Text style={styles.cardDescription}>
            first movie in line for mid 2026.
          </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Bloodborn</Text>
            <Text style={styles.cardDescription}>
              Most antecipated movie in late 2026.
            </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Raining Beach</Text>
              <Text style={styles.cardDescription}>
                Series launch predicted in 2027.
              </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Sonic 4</Text>
                <Text style={styles.cardDescription}>
                  Movie expected to launch in late 2027.
                  Warning! Chance of launch delays.
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Dark Caverns</Text>
                <Text style={styles.cardDescription}>
                  Series currently canceled for launch.
                  Wait for further details.
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Aquaman 5</Text>
                <Text style={styles.cardDescription}>
                  Movie is currently been postponed its launch due to Porduction's internal matters.
                </Text>
              </View>
              </ScrollView>
              </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  scrollContainer: {
    padding: 20,
  },
  tittle: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
  },
  cardDescription: {
    color: '#aaaaaa',
    fontSize: 14,
  },
});