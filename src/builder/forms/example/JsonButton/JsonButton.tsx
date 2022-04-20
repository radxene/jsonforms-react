import React from 'react';
import { Button } from '@mui/material';

export interface JsonButtonFields {
  value: string;
  align?: 'right' | 'left';
}

interface JsonButtonProps extends JsonButtonFields {
  onClick?: VoidFunction;
}

export const JsonButton: React.FC<JsonButtonProps> = (props) => {
  const { onClick, value, align = 'right' } = props;
  return (
    <div className="JsonButton" style={{ float: align }}>
      <Button variant="outlined" type="button" onClick={onClick}>
        {value}
      </Button>
    </div>
  );
};
