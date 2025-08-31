
// export default App

// export const App = () => {
//   return  <h1>hi, I am veerpartap singh</h1>;
// };
// behind the scenes:
// React.createElement("h1", null, "hi, I am veerpartap singh");

  // COMPONENTS
  
// export const App = () => {
//   return (
//     <div>
//       <div>
//           <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :Stranger things </h2>
//   <h3>Rating :8.2 </h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
//     . Ducimus praesentium cupiditate vel et voluptate pariatur 
//     eaque molestiae molestias distinctio, enim architecto porro facere,
//      sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa,
//       iusto eveniet assumenda
//      aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.</p>
//   </div>
//    <div>
//           <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :Stranger things </h2>
//   <h3>Rating :8.2 </h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
//     . Ducimus praesentium cupiditate vel et voluptate pariatur 
//     eaque molestiae molestias distinctio, enim architecto porro facere,
//      sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa,
//       iusto eveniet assumenda
//      aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.</p>
//   </div>
//    <div>
//           <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :Stranger things </h2>
//   <h3>Rating :8.2 </h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
//     . Ducimus praesentium cupiditate vel et voluptate pariatur 
//     eaque molestiae molestias distinctio, enim architecto porro facere,
//      sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa,
//       iusto eveniet assumenda
//      aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.</p>
//   </div>
//    <div>
//           <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :Stranger things </h2>
//   <h3>Rating :8.2 </h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
//     . Ducimus praesentium cupiditate vel et voluptate pariatur 
//     eaque molestiae molestias distinctio, enim architecto porro facere,
//      sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa,
//       iusto eveniet assumenda
//      aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.</p>
//   </div>
//    <div>
//           <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :Stranger things </h2>
//   <h3>Rating :8.2 </h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
//     . Ducimus praesentium cupiditate vel et voluptate pariatur 
//     eaque molestiae molestias distinctio, enim architecto porro facere,
//      sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa,
//       iusto eveniet assumenda
//      aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.</p>
//   </div>
//    <div>
//           <div> <img src="Stranger_Things_season_2.jpg" alt="" /></div>
//     <h2>Name :Stranger things </h2>
//   <h3>Rating :8.2 </h3>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
//     . Ducimus praesentium cupiditate vel et voluptate pariatur 
//     eaque molestiae molestias distinctio, enim architecto porro facere,
//      sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa,
//       iusto eveniet assumenda
//      aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.</p>
//   </div>
//   </div>
//   );
// };
// Array with keys
 
// export const App = () =>{
//   return ([<NetflixSeries key="1" /> , <NetflixSeries key="2" />,]
  
//   );
// };

// export const App = () =>{

//   return (
//     <div>
    
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
    

//     </div>
//   );
// };
// import React from "react";

// export const App = () => {
//   return (
//     <div>
//       {/* 1 way - Using React.Fragment */}
//       {/* 
//       <React.Fragment>
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//       </React.Fragment>
//       */}

//       {/* 2 way - Using shorthand fragment <> </> */}
//       <>
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//       </>
//     </div>
//   );
// };

// const NetflixSeries = () => {    // thus is a functional component  or component beacuse it is in 
  // a pascal case
// {name} these are dynamic values using variables

  // const name = "Stranger Things";
  // const rating = 8.2;
  // {5+3.2} // this is a dynamic value using expression
  // this is a static value
  // dynamic value using function calls 
  
  // const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium cupiditate vel et voluptate pariatur eaque molestiae molestias distinctio, enim architecto porro facere, sapiente, corrupti dignissimos incidunt earum officiis? Iste in ipsa, iusto eveniet assumenda aliquid minima? Illum, unde adipisci quo est explicabo non corrupti.";
  
  // const age = 18;
  // const canWatch = "Not Available";
  // if(age>=18) canWatch= "Watch Now";

  // function to return 
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


// import NetflixSeries from"./components/NetflixSeries";   -- default import 
// import{ NetflixSeries,Footer} from"./components/NetflixSeries";  // named import



import NetflixSeries  from"./components/NetflixSeries";   // combined import and named import or combined import & export
export const App = () => {
  return <NetflixSeries /> ; // je ek hi hove fir rehn do <>  </>
};

