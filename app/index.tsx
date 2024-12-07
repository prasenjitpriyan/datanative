// App.tsx
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
  SafeAreaView,
  SectionList,
  Text,
  StyleSheet,
  Alert,
  StatusBar
} from 'react-native'
import {
  createTable,
  getMenuItems,
  saveMenuItems,
  filterByQueryAndCategories
} from '@/database/database'
import { getSectionListData, useUpdateEffect } from '@/utils/utils'
import { MenuItem, Section } from '@/utils/types'
import SearchBar from '@/components/SearchBar'
import Filters from '@/components/Filters'
import Item from '@/components/Item'

const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'
const sections = ['Appetizers', 'Salads', 'Beverages']

export default function App() {
  const [data, setData] = useState<Section[]>([])
  const [searchBarText, setSearchBarText] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [filterSelections, setFilterSelections] = useState<boolean[]>(
    sections.map(() => false)
  )

  const fetchData = async (): Promise<MenuItem[]> => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      return data.map(
        (item: {
          uuid: string
          title: string
          price: string
          category: string
        }) => ({
          id: item.uuid,
          title: item.title,
          price: parseFloat(item.price),
          category: item.category
        })
      )
    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        await createTable()
        let menuItems = await getMenuItems()

        if (!menuItems.length) {
          const fetchedMenuItems = await fetchData()
          saveMenuItems(fetchedMenuItems)
          const sectionListData = getSectionListData(fetchedMenuItems)
          setData(sectionListData)
        } else {
          const sectionListData = getSectionListData(menuItems)
          setData(sectionListData)
        }
      } catch (e: any) {
        Alert.alert(e.message)
      }
    })()
  }, [])

  useUpdateEffect(() => {
    ;(async () => {
      const activeCategories = sections.filter((s, i) => {
        if (filterSelections.every((item) => item === false)) {
          return true
        }
        return filterSelections[i]
      })

      try {
        const menuItems = await filterByQueryAndCategories(
          query,
          activeCategories
        )
        const sectionListData = getSectionListData(menuItems)
        setData(sectionListData)
      } catch (e: any) {
        Alert.alert(e.message)
      }
    })()
  }, [filterSelections, query])

  const lookup = useCallback((q: string) => {
    setQuery(q)
  }, [])

  const handleSearchChange = (text: string) => {
    setSearchBarText(text)
    lookup(text)
  }

  const handleFiltersChange = (index: number) => {
    const arrayCopy = [...filterSelections]
    arrayCopy[index] = !filterSelections[index]
    setFilterSelections(arrayCopy)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchText={searchBarText}
        onSearchChange={handleSearchChange}
      />
      <Filters
        selections={filterSelections}
        onChange={handleFiltersChange}
        sections={sections}
      />
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: MenuItem }) => (
          <Item title={item.title} price={item.price} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#495E57'
  },
  sectionList: {
    paddingHorizontal: 16
  },
  header: {
    fontSize: 24,
    paddingVertical: 8,
    color: '#FBDABB',
    backgroundColor: '#495E57'
  }
})
