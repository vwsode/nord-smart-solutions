import React, { createContext, useCallback, useState } from 'react';
import { debounce } from 'lodash';

import { SearchContextProviderProps, SearchContextType } from './types';

export const SearchContext = createContext<SearchContextType>({
  searchTerm: undefined,
  setSearchTerm: undefined,
} as unknown as SearchContextType);

export const SearchProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetSearchTerm = useCallback(
    debounce((term: string) => setSearchTerm(term), 300),
    [],
  );

  const handleSetSearchTerm = (term: string) => {
    debouncedSetSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm: handleSetSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
