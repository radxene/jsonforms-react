import { withJsonFormsControlProps } from '@jsonforms/react';

import { JsonButton, JsonButtonFields } from './JsonButton';

interface JsonButtonControlData extends JsonButtonFields {
  callback: string;
}

interface JsonButtonBaseProps {
  data: JsonButtonControlData;
}

const JsonButtonBase: React.FC<JsonButtonBaseProps> = ({ data }) => {
  const { callback, ...restProps } = data || {};
  const clickHandler = new Function(callback) as VoidFunction;
  return <JsonButton onClick={clickHandler} {...restProps} />;
};

export const JsonButtonControl = withJsonFormsControlProps(JsonButtonBase);
