declare module '*.json' {
  const content;
  export default content;
}

declare module '*.png' {
  const content;
  export default content;
}

declare module '*.svg' {
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // export default content;
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
  SVGSVGElement
  >>;

  const src: string;
  export default src;
}
