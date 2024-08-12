export type SearchContextProviderProps = {
  /**
   * The child components that will have access to the search context.
   * This prop allows you to pass nested components that will use the context provided by the `SearchContextProvider`.
   */
  children: React.ReactNode;
};

export type SearchContextType = {
  /**
   * The current search term used for filtering or searching.
   * This value represents the term that is used in search operations and can be accessed or updated by components within the context.
   */
  searchTerm: string;

  /**
   * A function to update the search term.
   * This function allows components to set a new search term, which will trigger updates in the context and any dependent components.
   */
  setSearchTerm: (term: string) => void;
};
