import { useRef, useEffect } from 'react'
import { MenuItem, Section } from '@/utils/types'

export const SECTION_LIST_MOCK_DATA: Section[] = [
  {
    title: 'Appetizers',
    data: [
      { id: '1', title: 'Pasta', price: 10, category: 'Appetizers' },
      { id: '3', title: 'Pizza', price: 8, category: 'Appetizers' }
    ]
  },
  {
    title: 'Salads',
    data: [
      { id: '2', title: 'Caesar', price: 2, category: 'Salads' },
      { id: '4', title: 'Greek', price: 3, category: 'Salads' }
    ]
  }
]

/**
 * Transform the raw data retrieved by the getMenuItems() function
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data: MenuItem[]): Section[] {
  // Transform the raw data into a structure the SectionList component expects
  const transformedData: Section[] = data.reduce(
    (sections: Section[], item) => {
      const sectionIndex = sections.findIndex(
        (section) => section.title === item.category
      )

      if (sectionIndex === -1) {
        // Create a new section if none exists for this category
        sections.push({
          title: item.category,
          data: [
            {
              id: item.id,
              title: item.title,
              price: item.price,
              category: item.category
            }
          ]
        })
      } else {
        // Add the item to the existing section
        sections[sectionIndex].data.push({
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category
        })
      }
      return sections
    },
    []
  )

  return transformedData
}

// Define the type for effect function
export function useUpdateEffect(effect: () => void, dependencies: any[] = []) {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  }, dependencies)
}
