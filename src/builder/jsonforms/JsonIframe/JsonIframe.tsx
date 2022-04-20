import React from 'react';

import './JsonIframe.scss';

export interface JsonIframeFields {
  src?: string;
  title?: string;
  width?: number | string;
  height?: number | string;
}

interface JsonIframeProps extends JsonIframeFields {}

export const JsonIframe: React.FC<JsonIframeProps> = (props) => {
  return <iframe className="JsonIframe" {...props} />;
};
