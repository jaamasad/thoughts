import React, { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";


export default function Print({printArea}) {
  const ref = useRef();
  const ComponentToPrint = forwardRef((props, ref) => {
   return <div ref={ref}>{printArea}</div>;
 });

  return (
    <div>
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <button onClick={handlePrint}>Print this out!</button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint ref={ref} />
    </div>
  );
}