// import React from 'react';
// // import { DiffFromTo } from '@sanity/field/diff';

// function TelephonePreview({ value }) {
//   if (value.length === 10) {
//     return (
//       <div>
//         ({value.slice(0, 2)}) {value.slice(3, 6)}-{value.slice(7, 10)}
//       </div>
//     );
//   }
//   if (value.length === 7) {
//     return (
//       <div>
//         {value.slice(0, 2)}-{value.slice(3)}
//       </div>
//     );
//   }
//   return <div>{value}</div>;
// }

// export default function PhoneNumberDiff({ diff, schemaType }) {
//   return (
//     <DiffFromTo
//       diff={diff}
//       schemaType={schemaType}
//       previewComponent={TelephonePreview}
//       layout="grid"
//     />
//   );
// }
