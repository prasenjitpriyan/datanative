import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface FiltersProps {
  selections: boolean[]
  onChange: (index: number) => void
  sections: string[]
}

const Filters: React.FC<FiltersProps> = ({
  selections,
  onChange,
  sections
}) => (
  <View style={styles.filterContainer}>
    {sections.map((section, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.filterButton, selections[index] && styles.selected]}
        onPress={() => onChange(index)}
      >
        <Text style={styles.filterText}>{section}</Text>
      </TouchableOpacity>
    ))}
  </View>
)

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FBDABB'
  },
  selected: {
    backgroundColor: '#F06529'
  },
  filterText: {
    color: 'white',
    fontSize: 16
  }
})

export default Filters
