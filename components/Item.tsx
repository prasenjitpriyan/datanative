import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface MenuItemProps {
  title: string
  price: number
}

const Item: React.FC<MenuItemProps> = ({ title, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>${price}</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
})

export default Item
