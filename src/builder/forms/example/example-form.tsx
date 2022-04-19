import React from 'react';
import Paper from '@mui/material/Paper';
import { JsonForms } from '@jsonforms/react';
import { UISchemaElement, JsonSchema } from '@jsonforms/core';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';

import Data from './mock_data.json';
import { JsonButtonTester, JsonButtonControl } from './JsonButton';

interface ExampleFormProps {}

const renderers = [
  ...materialRenderers,
  // register custom renderers
  { tester: JsonButtonTester, renderer: JsonButtonControl },
];

export const ExampleForm: React.FC<ExampleFormProps> = () => {
  const [schema, setSchema] = React.useState<JsonSchema>({});
  const [uiSchema, setUiSchema] = React.useState<UISchemaElement>();
  const [dataSchema, setDataSchema] = React.useState({});

  React.useEffect(() => {
    const fetchAsync = async () => {
      const result = await getApiSchema();
      if (result && result.success && existsAllSchemas(result.data)) {
        // const { Schema, UISchema, DATASchema } = result.data;
        const { Schema, UISchema, DATASchema } = Data;
        setSchema(Schema);
        setUiSchema(UISchema);
        setDataSchema(DATASchema);
      }
    };
    fetchAsync();
  }, []);

  return (
    <React.Fragment>
      {Object.keys(schema).length !== 0 && (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <JsonForms
            schema={schema}
            uischema={uiSchema}
            data={dataSchema}
            renderers={renderers}
            cells={materialCells}
            onChange={({ data }) => {
              setDataSchema(data);
            }}
          />
        </Paper>
      )}
    </React.Fragment>
  );
};

function existsAllSchemas(schemas: JsonSchema) {
  const requireds = ['Schema', 'UISchema', 'DATASchema'];
  for (const key in schemas) {
    if (!requireds.includes(key)) {
      return false;
    }
  }
  return true;
}

async function getApiSchema() {
  try {
    const response = await fetch('/api/token/v1/b3eb7f02cd2afb37882045c6dbdbd128');
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
