import * as React from 'react';

export interface IRibbonProps {
  indexCallback: any;
}

export default function Ribbon({ indexCallback, ...props }: IRibbonProps) {

  const handleShowIndex = () => {
    return () => {
      indexCallback();
    }
  }

  return (
    <div className="ribbon" onClick={handleShowIndex()}>
      <i>
        <span><s />Index<s /></span></i>
    </div>
  );
}
