import { withJsonFormsControlProps } from '@jsonforms/react';

import { JsonButton, JsonButtonFields } from './JsonButton';

interface JsonButtonControlData extends JsonButtonFields {
  callback: string;
}

interface JsonButtonBaseProps {
  data: JsonButtonControlData;
}

const JsonButtonBase: React.FC<JsonButtonBaseProps> = ({ data }) => {
  const { value, align, callback } = data || {};
  const clickHandler = new Function(callback) as VoidFunction;
  return <JsonButton value={value} align={align} onClick={clickHandler} />;
};

export const JsonButtonControl = withJsonFormsControlProps(JsonButtonBase);
