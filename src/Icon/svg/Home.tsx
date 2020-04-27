import * as React from 'react';

export default function Home(
  props: React.SVGProps<SVGSVGElement>,
): React.ReactElement {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M21 13v10h-6v-6H9v6H3V13H0L12 1l12 12h-3zm-1-5.907V2h-3v2.093l3 3z" />
    </svg>
  );
}
