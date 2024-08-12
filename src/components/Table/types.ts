export type RepositoryType = {
  /**
   * A unique identifier for the row.
   */
  id: string;
  /**
   * The name associated with the row, typically representing a project or item.
   */
  name: string;
  /**
   * The programming language or technology used in the project or item.
   */
  lang: string;
  /**
   * The number of forks for the project, indicating how many times it has been copied or modified.
   */
  forks: number;
  /**
   * The number of stars the project has received, representing its popularity or user appreciation.
   */
  stars: number;
  /**
   * The date and time when the project was last updated, formatted as an ISO 8601 string.
   */
  updatedAt: Date;
  /**
   * A brief description of the repository or project.
   */
  description?: string;
  /**
   * A list of additional programming languages or technologies used in the project.
   */
  languages?: string[];
};
