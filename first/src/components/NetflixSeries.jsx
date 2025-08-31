


// export const NetflixSeries = () => {    // named export 

//   const name = "Stranger Things";
//   // const rating = 8.2;
//   {5+3.2} // this is a dynamic value using expression
//   // this is a static value
//   // dynamic value using function calls 
  
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium cupiditate vel et voluptate pariatur eaque molestiae molestias distinctio, enim architecto porro facere, sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa, iusto eveniet assumenda aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.";
  
//   const age = 18;
//   // const canWatch = "Not Available";
//   // if(age>=18) canWatch= "Watch Now";

//   // function to return 
//   const canWatch = () => {
//     if(age >= 18)  return "Watch Now";
//     return "Not Available";
//   };


//   const returngenre = () => {
//     const genre ="romance";
//     return genre;
//   };

//   return (
//     <div>
//      <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :{name} </h2>     
//   <h3>Rating :{5+3.2} </h3>  
//   <p> Summary :{summary}</p>
//   <p>Genre: {returngenre()}</p>
//   {/* <button>{age>=18 ? "Watch Now":"Not Available"}</button> */}
//   {/* <button>{canWatch}</button> */}
//   <button>{canWatch()}</button>
//   </div>
//   );
// };
// export default NetflixSeries;   // default export

// export const Footer = () => {
//     return <h4>@copyright veerpartap965</h4>
// }
// export const Header = () => {
//     return <h1>Welcome in Netflix card page  </h1>
// }



//      1ST WAY   (LOOPING)
// import  seriesData from "../api/seriesData.json"; // import json file
// const NetflixSeries = () => {  
  
//   return (
//     <ul>
//       <li>
//      <div> <img src={seriesData[0].img_url} alt="" /></div>
//     <h2>Name :{seriesData[0].name} </h2>     
//   <h3>Rating :{seriesData[0].rating} </h3>  
//   <p> Summary :{seriesData[0].description}</p>
//   <p>Genre: {seriesData[0].genre}</p>
//  <p>Caste: {seriesData[0].caste}</p>
// <a href={seriesData[0].watch_url} target="_blank" >
//     <button>Watch now</button>
// </a>
// </li>
//      <li>
//      <div> <img src={seriesData[1].img_url} alt="" /></div>
//     <h2>Name :{seriesData[1].name} </h2>     
//   <h3>Rating :{seriesData[1].rating} </h3>  
//   <p> Summary :{seriesData[1].description}</p>
//   <p>Genre: {seriesData[1].genre}</p>
//  <p>Caste: {seriesData[1].caste}</p>
// <a href={seriesData[1].watch_url} target="_blank" >
//     <button>Watch now</button>
// </a>
// </li>
     {/* <li>
     <div> <img src={seriesData[2].img_url} alt="" /></div>
    <h2>Name :{seriesData[2].name} </h2>     
  <h3>Rating :{seriesData[2].rating} </h3>  
  <p> Summary :{seriesData[2].description}</p>
  <p>Genre: {seriesData[2].genre}</p>
 <p>Caste: {seriesData[2].caste}</p>
<a href="seriesData[2].watch_url" target="_blank" >
    <button>Watch now</button>
</a>
</li>
     <li>
     <div> <img src={seriesData[3].img_url} alt="" /></div>
    <h2>Name :{seriesData[3].name} </h2>     
  <h3>Rating :{seriesData[3].rating} </h3>  
  <p> Summary :{seriesData[3].description}</p>
  <p>Genre: {seriesData[3].genre}</p>
 <p>Caste: {seriesData[3].caste}</p>
<a href="seriesData[0].watch_url" target="_blank" >
    <button>Watch now</button>
</a>
</li>
     <li>
     <div> <img src={seriesData[4].img_url} alt="" /></div>
    <h2>Name :{seriesData[4].name} </h2>     
  <h3>Rating :{seriesData[4].rating} </h3>  
  <p> Summary :{seriesData[4].description}</p>
  <p>Genre: {seriesData[4].genre}</p>
 <p>Caste: {seriesData[4].caste}</p>
<a href="seriesData[4].watch_url" target="_blank" >
    <button>Watch now</button>
</a>
</li> */}
// </ul>
//   );
// };
// export default NetflixSeries; 


//    2ND WAY
// import  seriesData from "../api/seriesData.json"; // import json file
// const NetflixSeries = () => {  
  
//   return (
//     <ul>
//       {seriesData.map((curEle) => {
//        return ( 
//        <li key={curEle.id}>
//            <div> <img src={curEle.img_url} alt="" /></div>
//     <h2>Name :{curEle.name} </h2>     
//   <h3>Rating :{curEle.rating} </h3>  
//   <p> Summary :{curEle.description}</p>
//   <p>Genre: {curEle.genre}</p>
//  <p>Caste: {curEle.caste}</p>
// <a href={curEle.watch_url} target="_blank" >
//     <button>Watch now</button>
// </a>
// </li>
//       );
//       })}
    
//    </ul>
//   );
//  };
// export default NetflixSeries; 

//   PROPS

import  seriesData from "../api/seriesData.json"; // import json file
import { SeriesCard } from "./SeriesCard"; // named import
const NetflixSeries = () => {  
  
  return (
    <ul>
      {seriesData.map((curEle) => (
       <SeriesCard key={curEle.id} curEle ={curEle}  />
      ))}
    
   </ul>
  );
 };
export default NetflixSeries; 