import { withJsonFormsControlProps } from '@jsonforms/react';

import { JsonIframe, JsonIframeFields } from './JsonIframe';

interface JsonIframeControlData extends JsonIframeFields {}

interface JsonIframeBaseProps {
  data: JsonIframeControlData;
}

const JsonIframeBase: React.FC<JsonIframeBaseProps> = ({ data }) => {
  return <JsonIframe {...data} />;
};

export const JsonIframeControl = withJsonFormsControlProps(JsonIframeBase);
