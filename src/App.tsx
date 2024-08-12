import { useEffect } from 'react';

import { Repositories } from './screens/Repositories';
import { Welcome } from './screens/Welcome';
import { Layout } from './components/Layout';
import { useSearch } from './hooks/useSearch';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: React.FC = () => {
  const { searchTerm } = useSearch();

  useEffect(() => {}, [searchTerm]);

  return <Layout>{searchTerm ? <Repositories /> : <Welcome />}</Layout>;
};

export default App;
