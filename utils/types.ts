// Represents a menu item with properties like id, title, price, and category
export interface MenuItem {
  id: string
  title: string
  price: number
  category: string
}

// Represents a section of menu items, grouped by category
export interface Section {
  title: string
  data: MenuItem[]
}
