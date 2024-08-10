import { ApolloProvider } from '@apollo/client';

import { client } from './apollo/client';
import { Welcome } from './screens/Welcome';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Welcome />
    </ApolloProvider>
  );
};

export default App;
