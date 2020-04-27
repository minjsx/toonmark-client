import * as React from 'react';

export default function FavorFill(
  props: React.SVGProps<SVGSVGElement>,
): React.ReactElement {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 4.248C8.852-1.154 0 .423
           0 7.192 0 11.853 5.571 16.619
           12 23c6.43-6.381 12-11.147
           12-15.808C24 .4 15.125-1.114 12 4.248z"
      />
    </svg>
  );
}
