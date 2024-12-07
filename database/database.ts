// database.ts
import * as SQLite from 'expo-sqlite'
import { Section, MenuItem } from '@/utils/types' // Import from types.ts
import { SECTION_LIST_MOCK_DATA } from '@/utils/utils' // Assuming your mock data is here

// Open the SQLite database (use openDatabaseAsync)
const db = await SQLite.openDatabaseAsync('little_lemon')

// Function to create the menuitems table
export async function createTable(): Promise<void> {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS menuitems (
        id INTEGER PRIMARY KEY NOT NULL, 
        uuid TEXT, 
        title TEXT, 
        price TEXT, 
        category TEXT
      );
    `)
    console.log('Table created successfully')
  } catch (error) {
    console.error('Error creating table:', error)
  }
}

// Function to get all menu items
export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const result = await db.getAllAsync('SELECT * FROM menuitems')
    return result as MenuItem[] // Type assertion to match MenuItem[] format
  } catch (error) {
    console.error('Error getting menu items:', error)
    return [] // Return an empty array in case of error
  }
}

// Function to save multiple menu items into the database
export async function saveMenuItems(menuItems: MenuItem[]): Promise<void> {
  try {
    const insertStatement = await db.prepareAsync(`
      INSERT INTO menuitems (uuid, title, price, category) 
      VALUES ($uuid, $title, $price, $category)
    `)

    // Insert each menu item using executeAsync
    for (const item of menuItems) {
      await insertStatement.executeAsync({
        $uuid: item.id,
        $title: item.title,
        $price: item.price,
        $category: item.category
      })
    }

    await insertStatement.finalizeAsync()
    console.log('Menu items saved successfully')
  } catch (error) {
    console.error('Error saving menu items:', error)
  }
}

/**
 * Function to filter menu items based on query and selected categories
 * Uses mock data (SECTION_LIST_MOCK_DATA) for filtering
 * @param query - The query string to filter the menu items by title
 * @param activeCategories - Array of categories to filter by
 * @returns Filtered menu items that match the query and belong to active categories
 */
export async function filterByQueryAndCategories(
  query: string,
  activeCategories: string[]
): Promise<MenuItem[]> {
  try {
    const filteredData = SECTION_LIST_MOCK_DATA.flatMap((section: Section) =>
      activeCategories.includes(section.title)
        ? section.data.filter((item: MenuItem) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
        : []
    )
    return filteredData
  } catch (error) {
    console.error('Error filtering by query and categories:', error)
    return []
  }
}
