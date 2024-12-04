import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native'

interface MenuItem {
  id: string
  title: string
  price: number
}

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<MenuItem[]>([])

  const getMenu = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
      )
      const json = await response.json()
      // Map and add an id to each item and ensure the data is typed correctly
      const menuWithId: MenuItem[] = json.menu.map(
        (item: any, index: number) => ({
          ...item,
          id: String(index) // or use a unique identifier if available
        })
      )
      setData(menuWithId)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  const Item: React.FC<MenuItem> = ({ id, title, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{title}</Text>
      <Text style={menuStyles.itemText}>{'$' + price}</Text>
    </View>
  )

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item id={item.id} title={item.title} price={item.price} />
  )

  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  )
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center'
  }
})

export default App
