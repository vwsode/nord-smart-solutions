import { useContext } from 'react';

import { SearchContext } from '../context/SearchContext/SearchContext';

/**
 * A custom hook for accessing the search context.
 *
 * This hook provides access to the current search term and the function to update it,
 * which are managed by the `SearchProvider` context.
 *
 * @throws {Error} Throws an error if the hook is used outside of a `SearchProvider` context.
 *
 * @returns An object containing:
 *   - `searchTerm`: The current search term used for filtering or searching.
 *   - `setSearchTerm`: A function to update the search term.
 */
export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};
