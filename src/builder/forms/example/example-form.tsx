import React from 'react';
import Paper from '@mui/material/Paper';

interface ExampleFormProps {}

export const ExampleForm: React.FC<ExampleFormProps> = () => {
  fetchData();

  return <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>Example Form</Paper>;
};

async function fetchData() {
  try {
    const response = await fetch('/api/token/v1/b3eb7f02cd2afb37882045c6dbdbd128');
    const res = await response.json();
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}
