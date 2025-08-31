// export  const Basics1 = () =>{
//    return (
//     <div>
//         <div>
//             <img src="/images/file.jpg" alt="" />

//         </div>
//         <h2>Name:happiness</h2>
//         <h3>Rating:8.3</h3>
//         <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
//             ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
//             uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
//             consectetur 
//             ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
//             ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
//             lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
//         </p>
//          <div>
//             <img src="/images/anime.png" alt="" />

//         </div>
//         <h2>Name:happiness</h2>
//         <h3>Rating:8.3</h3>
//         <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
//             ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
//             uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
//             consectetur 
//             ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
//             ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
//             lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
//         </p>
//          <div>
//             <img src="/images/image.png" alt="" />

//         </div>
//         <h2>Name:happiness</h2>
//         <h3>Rating:8.3</h3>
//         <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
//             ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
//             uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
//             consectetur 
//             ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
//             ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
//             lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
//         </p>
//          <div>
//             <img src="/images/veer.jpg" alt="" />

//         </div>
//         <h2>Name:happiness</h2>
//         <h3>Rating:8.3</h3>
//         <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
//             ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
//             uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
//             consectetur 
//             ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
//             ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
//             lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
//         </p>
//     </div>
//    );
// };


// export  const Basics1 = () =>{
//    return (
//     // [<NetflixSeries key='1 ' />,<NetflixSeries key='2' />]  // array with keys
//         <>
            
//         <NetflixSeries />   //components
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//    </>
//    );
// };


// const NetflixSeries = () => {       
//     const name ='happiness';  // dynamic value 
//     const returngenre = () => {   // dynamic function
//         const genre= "comedy";
//         return genre;
//     }
//     return (
//         // <div><h2>mainn page</h2></div>
//     <div>
//             <div>
//             <img src="/images/file.jpg" alt="" />

//         </div>
//         <h2>Name:{name}</h2>
//         <h3>Rating:{5+3.5}</h3>   // dynamic expression
//         <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
//             ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
//             uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
//             consectetur 
//             ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
//             ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
//             lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
//         </p>
//         <p>Genre:{returngenre}</p>
//         <button>Watch Now</button>

//     </div>
//     );
// };



// export  const Basics1 = () =>{
//    return (
//         <>
            
//         <NetflixSeries />   
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//    </>
//    );
// };


// const NetflixSeries = () => {  
//     let age= 16;   
//     // let canWatch ="Not Available";   // conditional operator
//     // if(age>=18) canWatch= "Watch Now";   
//     const canWatch = () => {
//          if(age>= 18) "Watch Now";
//          return "Not Available";
//     };
//     const name ='happiness';  
//     const returngenre = () => {  
//         const genre= "comedy";
//         return genre;
//     }
    // 1. if else nl (don't repeat yourself )  -- that's why we  not  uses 

    
    
    // if(age<18){
    //     return (
        
    // <div>
    //         <div>
    //         <img src="/images/file.jpg" alt="" />

    //     </div>
    //     <h2>Name:{name}</h2>
    //     <h3>Rating:{5+3.5}</h3>   
    //     <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
    //         ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
    //         uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
    //         consectetur 
    //         ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
    //         ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
    //         lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
    //     </p>
    //     <p>Genre:{returngenre}</p>
    //     <button>Not Available</button>

        
    // </div>
    // );

    // }

//     return (
//         // <div><h2>mainn page</h2></div>
//     <div>
//             <div>
//             <img src="/images/file.jpg" alt="" />

//         </div>
//         <h2>Name:{name}</h2>
//         <h3>Rating:{5+3.5}</h3>   // dynamic expression
//         <p>Sumaary: Lorem ipsum dolor sit amet consectetur adipisici
//             ng elit. Doloribus, quisquam? Exercitationem quae iure officiis conseq
//             uuntur eum, quo nemo deserunt quos tempora velit, reiciendis assumenda quibusdam 
//             consectetur 
//             ad cupiditate pariatur voluptatem iusto repellend   Lorem ipsum dolor sit amet cons
//             ectetur adipisicing elit. Rem, nesciunt delectus natus itaque, sed ul
//             lam voluptatum nulla magnam eum ab, aspernatur illo dicta.us necessitatibus iste?
//         </p>
//         <p>Genre:{returngenre}</p>
//         {/* <button>{age<=18 ?"Not Available" :"Watch now"}</button> */}
//       {/* ternary operator */}
//       <button>{canWatch}</button>
//     </div>
//     );
// };

import Basics1 from "./revision/Basics1";
export const Basics1 = () => {
     const  studeents=[8,9];
    return(
      <>
       <p>{!Boolean(studeents.length) &&"Not students found"} </p>
        <p>No of Studeents:{studeents.length }</p>
        </>
    );
};
export default Basics1;