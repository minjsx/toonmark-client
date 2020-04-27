import * as React from 'react';

export default function Search(
  props: React.SVGProps<SVGSVGElement>,
): React.ReactElement {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M21.172 24l-7.387-7.387A8.945 8.945 0 019 18c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9a8.951 8.951 0 01-1.387 4.785L24 21.172 21.172 24zM9 16c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
    </svg>
  );
}
