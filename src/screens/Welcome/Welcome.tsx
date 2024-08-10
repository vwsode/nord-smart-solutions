import { useGetRepositoriesQuery } from '../../graphql/queries/GetRepositories/GetRepositories.generated';

export const Welcome: React.FC = () => {
  const { data } = useGetRepositoriesQuery({
    variables: {
      query: 'ui-kit',
    },
  });

  console.log(data);

  return <div>Welcome</div>;
};
