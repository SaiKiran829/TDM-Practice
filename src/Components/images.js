// import React, { useState} from 'react'
// import { arrOfApplication } from './arrOfApplication';

// export default function Photos(props) {

// const [movies,setMovies] = useState(arrOfApplication);


// const hadleTopRating = () => {
// const topMovies = arrOfApplication.sort((x, y) => (x.rating < y.rating) ? 1 : (x.rating > y.rating) ? -1 : 0);
// console.log(topMovies);
//   console.log("clicked on top movies");
//   setMovies(topMovies);
//   setMovies([...arrOfApplication]);
// }

// // const handleOnSubmit = () => {
// //   const search = arrOfMovies.filter(x => x.movie).includes(searched);
// //   setMovies(search);
// //   setMovies([...arrOfMovies]);
// // }

// const handleLowRating = () => {
//   const lowMovies = arrOfApplication.sort((x,y) => (x.rating < y.rating) ? -1 : (x.rating > y.rating) ? 1 : 0);
//   setMovies(lowMovies);
//   setMovies([...arrOfApplication]);
// }

// const handleAllRated = () => {
// console.log("clicked on All movies");
//   setMovies([...arrOfApplication]);
// }

// const fiveStarRating = () => {
// const fiveStars = arrOfApplication.filter(x => x.rating === 5);
// setMovies(fiveStars);
// }

// const fourStarRating = () => {
// const fourStars = arrOfApplication.filter(x => x.rating === 4);
// setMovies(fourStars);
// }

// const threeStarRating = () => {
// const threeStars = arrOfApplication.filter(x => x.rating === 3);
// setMovies(threeStars);
// }

// const twoStarRating = () => {
// const twoStars = arrOfApplication.filter(x => x.rating === 2);
// setMovies(twoStars);
// }

// const OneStarRating = () => {
// const oneStar = arrOfApplication.filter(x => x.rating === 1);
// setMovies(oneStar);
// }



// return (
// <div>

// <div className="dropdown ">
//   <button className="btn btn-secondary dropdown-toggle bg-dark float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//       Sort By
//   </button>
//   <ul className="dropdown-menu small ">
//       <li><button className="dropdown-item " onClick={handleAllRated} href="/" >All</button></li>
//       <li><button className="dropdown-item " onClick={hadleTopRating} href="/">Top Rated</button></li>
//       <li><button className="dropdown-item" onClick={handleLowRating} href="/" >Low Rated</button></li>
//   </ul>
//   </div>
//   <div className="dropdown ">
//   <button className="btn btn-secondary dropdown-toggle bg-dark float-end me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//       Filter By
//   </button>
//   <ul className="dropdown-menu small">
//       <li><button className="dropdown-item" onClick={fiveStarRating} href="/" >5 STAR</button></li>
//       <li><button className="dropdown-item " onClick={fourStarRating} href="/" >4 STAR</button></li>
//       <li><button className="dropdown-item " onClick={threeStarRating} href="/">3 STAR</button></li>
//       <li><button className="dropdown-item" onClick={twoStarRating} href="/" >2 STAR</button></li>
//       <li><button className="dropdown-item" onClick={OneStarRating} href="/" >1 STAR</button></li>
//   </ul>
//   </div>
//     <h2 className='main-heading text-ms-5'>Application - {`>`} Environment</h2>
//     <hr/>
// <div className='container my-3'>
// <div className='d-flex' >
// <div>
// <button className='buttonInEnvironment btn col-lg-2 btn-sm btn-white ' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"200px"}} ><img src="./images/database.jpg" className="imageOfEnvironment" alt="..."/><div className='buttontext'><b>Create New Environment</b></div></button>
// </div>
// <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div className="modal-dialog modal-dialog-centered">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h1 className="modal-title fs-5" id="exampleModalLabel">New Application</h1>
//       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>

//     <div className="modal-body">
//     <form>
//       <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">Application name</label>
//         <input type="email" className="form-control" aria-describedby="emailHelp"/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">Application description</label>
//         <input type="password" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">Created by</label>
//         <input type="password" className="form-control" />
//       </div>
//       <button type="submit" className="btn btn-dark btn-center">Submit</button>
//     </form>
//     </div>
//     <div className="modal-footer">
//     </div>
//   </div>
// </div>
// </div>


// <div className='row scrollable ' style={{width:"1200px"}}>
// {
//                 movies.map((item) => {
//                     return(
//                         <div className='col-sm-2 colheight col-xs-2' key={item.id}>
//                         <div className="card" style={{width: "10rem" ,height:"10vh",marginBottom:"150px"}}>
//                         <button type="button" className="ImageButton position-absolute top-0 end-0 my-1 mx-1" onClick={() => deleteApplication(item.id)} ><img src="./images/delete.jpg" className="buttonImage" alt="..."/></button>
//             <img src={item.imageUrl} className="card-img-top" alt="..."/>
//             <div className="card-body bg-white">
//               <p className='text-center'>{item.AppName}</p>
//             </div>
//             </div>
//             </div>
//                     )
//                 })
// }
//   </div>



  
//   </div>
// </div>

// </div>
// )
// }