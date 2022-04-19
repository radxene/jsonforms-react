import { withJsonFormsControlProps } from '@jsonforms/react';

import { JsonButton } from './JsonButton';

interface JsonButtonBaseProps {
  data: {
    value: string;
    callback: string;
  };
}

const JsonButtonBase: React.FC<JsonButtonBaseProps> = ({ data }) => {
  const { value, callback } = data || {};
  const clickHandler = new Function(callback) as VoidFunction;
  return <JsonButton value={value} onClick={clickHandler} />;
};

export const JsonButtonControl = withJsonFormsControlProps(JsonButtonBase);
