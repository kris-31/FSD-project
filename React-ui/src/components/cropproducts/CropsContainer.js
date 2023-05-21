import React from "react";
import { withCropConsumer } from "../context";
import Loading from "./Loading";
import CropsFilter from "./CropsFilter";
import CropsList from "./CropsList";

function CropsContainer({ context }) {
  const { loading, sortedCrops, crops } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CropsFilter crops={crops} />
      <CropsList crops={sortedCrops} />
    </>
  );
}

export default withCropConsumer(CropsContainer);

// with render props

// const CropsContainer = () => {
//   return (
//     <CropConsumer>
//       {(value) => {
//         const { loading, sortedCrops, crops} = value
//         if(loading){
//             return <Loading />
//         }
//         return (
//           <div>
//             <CropsFilter crops={crops} loading={loading}/>
//             <CropsList crops={sortedCrops} loading={loading}/>
//           </div>
//         );
//       }}
//     </CropConsumer>
//   );
// };

// export default CropsContainer;
