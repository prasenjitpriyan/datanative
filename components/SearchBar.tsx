// components/SearchBar.tsx
import React, { useMemo, useCallback } from 'react'
import { Searchbar } from 'react-native-paper'
import debounce from 'lodash.debounce' // Add this import

interface SearchBarProps {
  searchText: string
  onSearchChange: (text: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  onSearchChange
}) => {
  const lookup = useCallback(
    (q: string) => {
      onSearchChange(q)
    },
    [onSearchChange]
  )

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup])

  return (
    <Searchbar
      placeholder="Search"
      placeholderTextColor="white"
      onChangeText={debouncedLookup}
      value={searchText}
      style={{ marginBottom: 24, backgroundColor: '#495E57' }}
      iconColor="white"
      inputStyle={{ color: 'white' }}
      elevation={0}
    />
  )
}

export default SearchBar
