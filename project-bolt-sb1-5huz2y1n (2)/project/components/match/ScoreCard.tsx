import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Scorecard = ({ holes, scores, presses, teams }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scorecard</Text>
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Team</Text>
            {holes.map((hole, index) => (
              <Text key={index} style={styles.headerCell}>{hole}</Text>
            ))}
          </View>
          {teams.map((team, idx) => (
            <View key={team.id} style={styles.row}>
              <View style={styles.teamCell}>
                <View style={[styles.teamDot, { backgroundColor: team.color }]} />
                <Text style={styles.teamName}>{team.name}</Text>
              </View>
              {scores[team.id].map((score, holeIdx) => (
                <View key={holeIdx} style={styles.cell}>
                  <Text style={styles.scoreText}>{score}</Text>
                  {presses[team.id][holeIdx] && (
                    <View
                      style={[
                        styles.pressDot,
                        { backgroundColor: team.color },
                      ]}
                    />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  table: {
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerCell: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  teamCell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    width: 80,
  },
  teamDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  teamName: {
    fontWeight: '600',
  },
  cell: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  scoreText: {
    fontSize: 16,
  },
  pressDot: {
    position: 'absolute',
    bottom: -4,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

export default Scorecard;