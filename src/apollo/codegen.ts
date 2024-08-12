import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/apollo/github.schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/generated/types.generated.ts': {
      plugins: ['typescript'],
    },
    './src/generated/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
        folder: '',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
