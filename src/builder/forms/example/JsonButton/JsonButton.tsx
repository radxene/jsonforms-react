import React from 'react';
import { Button } from '@mui/material';

interface JsonButtonProps {
  value: string;
  onClick?: VoidFunction;
}

export const JsonButton: React.FC<JsonButtonProps> = ({ onClick, value }) => {
  return (
    <Button variant="outlined" type="button" onClick={onClick}>
      {value}
    </Button>
  );
};
