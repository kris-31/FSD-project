// import React from 'react';
// import img6 from "./images/2b.jpeg";



// const productList1 = [];

// fetch('http://localhost:8081/api/product')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error fetching product data');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Assuming the response data is an array of products
//     productList1.push(...data);
//     console.log(productList1);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   ///
  
//   const productList = [
//     {
//       sys: {
//         id: "10",
//       },
//       fields: {
//         name: ('${productList1.name}'),
//         slug: "CORAGEN-INSECTICIDE",
//         type: "Insecticides",
//         price: 208,
//         size: 100,
//         crop: "wheat",
//         organic: false,
//         inorganic: false,
//         featured: false,
//         description:
//           "Coragen is a brand name for an insecticide containing the active ingredient Chlorantraniliprole. It belongs to a class of insecticides called anthranilic diamides, which are effective against a wide range of insect pests.Coragen works by targeting the muscles of the insect, causing paralysis and ultimately death. It has a unique mode of action that makes it effective against insect populations that have developed resistance to other insecticides.",
//         precautions: [
//           " Wear protective clothing, such as gloves, long-sleeved shirts, and pants, when handling Coragen",
//           " Avoid inhalation of the spray mist or ingestion of the product. Do not smoke, eat, or drink while using Coragen",
//           " Keep the product out of reach of children and pets",
//           " Do not apply Coragen during windy conditions or when rain is expected within 24 hours",
//           " Avoid applying Coragen near water sources or in areas where runoff may occur, as it may be toxic to aquatic life",
//           "Always follow the product label instructions for disposal of empty containers and leftover product",
//         ],
//         images: [
//           {
//             fields: {
//               file: {
//                 url: img6,
//               },
//             },
//           },
  
//           {
//             fields: {
//               file: {
//                 url: img6,
//               },
//             },
//           },
  
//         ],
//       },
//     }
//   ];
//   export default productList;