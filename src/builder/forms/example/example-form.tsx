import React from 'react';
import Paper from '@mui/material/Paper';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';

import uischema from './schemas/uischema.json';

interface ExampleFormProps {}

export const ExampleForm: React.FC<ExampleFormProps> = () => {
  const [schema, setSchema] = React.useState({});
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const fetchAsync = async () => {
      const result = await fetchSchema();
      if (result && result.success) {
        setSchema(result.data);
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
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data: _data }) => setData(_data)}
          />
        </Paper>
      )}
    </React.Fragment>
  );
};

async function fetchSchema() {
  try {
    const response = await fetch('/api/token/v1/b3eb7f02cd2afb37882045c6dbdbd128');
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
