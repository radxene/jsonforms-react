import { rankWith, scopeEndsWith, JsonSchema } from '@jsonforms/core';

export const makeScopedTester = (rank: number, name: string) => {
  return rankWith(rank, scopeEndsWith(name));
};

export const existsAllSchemas = (schemas: JsonSchema) => {
  const requireds = ['Schema', 'UISchema', 'DATASchema'];
  for (const key in schemas) {
    if (!requireds.includes(key)) {
      return false;
    }
  }
  return true;
};
