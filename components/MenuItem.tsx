import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

// Define the type for the menu item
type MenuItemType = {
  name: string
  price: string
  type: string
}

// Reusable MenuItem Component
const MenuItem: React.FC<MenuItemType> = ({ name, price, type }) => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{`Menu Item: ${name}`}</Text>
      <Text style={styles.itemText}>{`Price: ${price}`}</Text>
      <Text style={styles.itemText}>{`Type: ${type}`}</Text>
    </View>
  )
}

// Main Functional Component
const MenuItemComponent: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])

  const convertStringToJson = () => {
    const myStr = `[
      {
        "name": "Veggie Kabob",
        "price": "$12",
        "type": "Main Dish"
      },
      {
        "name": "Greek Salad",
        "price": "$7",
        "type": "Side"
      },
      {
        "name": "Black Tea",
        "price": "$3",
        "type": "Drink"
      }
    ]`

    const result: MenuItemType[] = JSON.parse(myStr)
    setMenuItems(result)
  }

  useEffect(() => {
    convertStringToJson()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </SafeAreaView>
  )
}

// Styling for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CE14',
    width: '100%'
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#F4CE14',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#495E57',
    fontSize: 22
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center'
  }
})

export default MenuItemComponent
