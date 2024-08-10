import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/apollo/github.schema.graphql',  // Путь к файлу схемы
  documents: './src/**/*.graphql',
  generates: {
    './src/generated/types.generated.ts': {
      plugins: ['typescript'],
    },
    './src/generated/': {
      preset: 'near-operation-file', // Используем пресет near-operation-file
      presetConfig: {
        extension: '.generated.ts', // Корректное расширение для плагина typescript-react-apollo
        baseTypesPath: 'types.generated.ts', // Указываем на базовые типы
        folder: '', // Оставляем пустым, чтобы файлы оставались в `generated`
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
