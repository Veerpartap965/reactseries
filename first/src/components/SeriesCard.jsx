// export const SeriesCard = (props) =>{
//     return (
//      <li key={props.curEle.id}>
//            <div> <img src={props.curEle.img_url} alt="" /></div>
//     <h2>Name :{props.curEle.name} </h2>     
//   <h3>Rating :{props.curEle.rating} </h3>  
//   <p> Summary :{props.curEle.description}</p>
//   <p>Genre: {props.curEle.genre}</p>
//  <p>Caste: {props.curEle.caste}</p>
// <a href={props.curEle.watch_url} target="_blank" >
//     <button>Watch now</button>
// </a>
// </li>
//     );
// };

export const SeriesCard = ({curEle}) =>{  // props de jgha props bi likh sakde haa
    console.log(props);
    const{id, img_url,name, rating, description, genre, caste, watch_url} = curEle;
    
    return (
     <li >
           <div> <img src={img_url} alt="" /></div>
    <h2>Name :{name} </h2>     
  <h3>Rating :{rating} </h3>  
  <p> Summary :{description}</p>
  <p>Genre: {genre}</p>
 <p>Caste: {caste}</p>
<a href={watch_url} target="_blank" >
    <button>Watch now</button>
</a>
</li>
    );
};