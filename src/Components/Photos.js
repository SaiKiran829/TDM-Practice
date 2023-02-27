import React, {useRef, useState} from 'react'
import {arrOfApplication} from './arrOfApplication';
import { arrayOfEnvironments } from './arrOfEnvironments';




export default function Photos(props) {

  const [app,setapp] = useState(arrOfApplication);

  var environment =[{
    id:0,
    Name: "",
    image: ""
  }];
  environment=environment.filter(m=>m.id !==0);
  let duplicate = environment;

const [Environments, setEnvironments] = useState(environment);

  const hadleTopRating = () => {
        const topapp = arrOfApplication.sort((x, y) => (x.AppName < y.AppName) ? 1 : (x.AppName > y.AppName) ? -1 : 0);
        console.log(topapp);
        setapp(topapp);
        console.log("clicked on top app");
        setapp([...arrOfApplication]);
    }

    const handleLowRating = () => {
        const lowapp = arrOfApplication.sort((x,y) => (x.AppName < y.AppName) ? -1 : (x.AppName > y.AppName) ? 1 : 0);
        setapp(lowapp);
        setapp([...arrOfApplication]);
    }

    const handleAllRated = () => {
      const application = arrOfApplication.sort((x,y) => (x.id < y.id) ? 1 : (x.id > y.id) ? -1 : 0);
      setapp(application);
      setapp([...arrOfApplication]);
    }

    const fiveStarRating = () => {
      const fiveStars = arrOfApplication.filter(x => x.rating === 5);
      setapp(fiveStars);
    }

    const fourStarRating = () => {
      const fourStars = arrOfApplication.filter(x => x.rating === 4);
      setapp(fourStars);
    }

    const threeStarRating = () => {
      const threeStars = arrOfApplication.filter(x => x.rating === 3);
      setapp(threeStars);
    }

    const twoStarRating = () => {
      const twoStars = arrOfApplication.filter(x => x.rating === 2);
      setapp(twoStars);
    }

    const OneStarRating = () => {
      const oneStar = arrOfApplication.filter(x => x.rating === 1);
      setapp(oneStar);
    }

    const [data,setData] = useState({
      AppName:'',
      appDescription:'',
      createdBy:''
    })



    const {AppName,appDescription,createdBy} = data;

    const onchangeHandle = e => {
      setData({...data,[e.target.name]:e.target.value})
    }
   
     
    const submitHandle = e => {
      e.preventDefault();
      console.log(data);
      let newId = app.length + 1;
      const newValue = {
      id:newId,
      AppName:data.AppName,
      imageUrl:"./images/normal.jpg",
      rating:3,
      CreatedBy:data.createdBy,
      AppDescription:data.appDescription,
      environment:[]
      };
      app.push(newValue);
      console.log(app);
      setapp([...app]);
      console.log(app);
      <Photos/>
    }

    const deleteApplication = (id) => {
      const updatedItems = app.filter(item => item.id !== id );
      setapp(updatedItems);
      }

      function getAppsOnClick(id){

        const application = app.filter(x => x.id === id);
        const environmentIds = application.map(x => x.environments);
        console.log(environmentIds);
      
        for(var i =0; i<arrayOfEnvironments.length;i++){
          for(var j =0; j<arrayOfEnvironments.length;j++){
            if(environmentIds[0][i] === arrOfApplication[j].id)
            {
              let environment1 = [{
                id:arrayOfEnvironments[j].id,
                Name: arrayOfEnvironments[j].Name,
                image: arrayOfEnvironments[j].image
              }];
              environment = [...environment,...environment1];
            }
          }
        }
      
        environment = environment.filter(x => x.id !== 0);
        setEnvironments(environment);
      }

  return (
    <>
    <div className='container1 '  >


    <div className='containerInside'>
      
      <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
        </button>
        <ul className="dropdown-menu small ">
            <li><button className="dropdown-item text-center" onClick={handleAllRated} href="/" >All</button></li>
            <li><button className="dropdown-item text-center" onClick={handleLowRating} href="/">A-Z</button></li>
            <li><button className="dropdown-item text-center" onClick={hadleTopRating} href="/" >Z-A</button></li>
        </ul>
       </div>
       <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By
        </button>
        <ul className="dropdown-menu small">
            <li><button className="dropdown-item" onClick={fiveStarRating} href="/" >5 STAR</button></li>
            <li><button className="dropdown-item " onClick={fourStarRating} href="/" >4 STAR</button></li>
            <li><button className="dropdown-item " onClick={threeStarRating} href="/">3 STAR</button></li>
            <li><button className="dropdown-item" onClick={twoStarRating} href="/" >2 STAR</button></li>
            <li><button className="dropdown-item" onClick={OneStarRating} href="/" >1 STAR</button></li>
        </ul>
       </div>
          <h2 className='main-heading text-ms-5'> Application </h2>
          <hr/>
    <div className='container-sm containerPhotos my-3'>
    <div className='d-flex' >
      <div>
      <button className='buttonInApp btn col-lg-2 btn-sm btn-white ' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"200px"}} ><img src="./images/grey.jpg" className="imgOfButton" alt="..."/><div className='buttontext'><b>Create Newfolder</b></div></button>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Application</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
          <form onSubmit={submitHandle}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1"   className="form-label">Application name</label>
              <input type="text"  className="form-control" name='AppName' value={AppName}  onChange={onchangeHandle} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1"  className="form-label">Application description</label>
              <textarea type="text" name='appDescription' className="form-control" value={appDescription}  onChange={onchangeHandle} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1"  className="form-label">Created by</label>
              <input type="text" name='createdBy' className="form-control" value={createdBy} onChange={onchangeHandle} />
            </div>
            <button type="submit" data-bs-dismiss="modal" className="btn btn-dark btn-center">Create</button>
          </form>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
      <div className='row scrollable ' style={{width:"1200px"}}>
          {
                app.map((item) => {
                    return(
                        <div className='col-sm-2 colheight col-xs-2' key={item.id}>
                        <div className="card"  onClick= {() => getAppsOnClick(item.id)} style={{width: "10rem" ,height:"10vh",marginBottom:"150px"}}>
                        <button type="button" className="ImageButton position-absolute top-0 end-0 my-1 mx-1" onClick={() => deleteApplication(item.id)} ><img src="./images/delete.jpg" className="buttonImage" alt="..."/></button>
            <img src={item.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body bg-white">
              <p className='text-center'>{item.AppName}</p>
            </div>
            </div>
            </div>
                    )
                })
}
        </div>
        </div>
    </div>
    
    </div>
    </div>






    {/*------------------------------------------ second container -------*/}




<div>
<div className='col-md-10 container2 '>

    <h2 className='main-heading text-ms-5'>Application - {`>`} Environment</h2>
    <hr/>
<div className='container my-3'>
<div className='d-flex' >
<div>
<button className='buttonInEnvironment btn col-lg-2 btn-sm btn-white ' data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{width:"200px"}} ><img src="./images/database.jpg" className="imageOfEnvironment" alt="..."/><div className='buttontext'><b>Create New Environment</b></div></button>
</div>


<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">New Environment</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <div className="modal-body">
      <div>
      <div className="mb-3 row">
      <label htmlFor="exampleInputEmail1" className="col-sm-4 form-label">Environment name</label>
    <div className="col-sm-8">
    <input type="text" className="form-control" aria-describedby="emailHelp"/>    </div>
  </div>
  <div className="mb-3 row">
    <label HtmlFor="inputPassword" className="col-sm-4 form-label">Environment Type</label>
    <div className='col-sm-8'>
    <select className="form-select" aria-label="Default select example">
          <option selected>--- please select ---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="exampleInputEmail1" className="col-sm-4 form-label">Data Source Link</label>
    <div className="col-sm-8">
    <input type="text" className="form-control" aria-describedby="emailHelp"/>
    </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="exampleInputEmail1" className="col-sm-4 form-label">UID</label>
    <div className="col-sm-8">
    <input type="text" className="form-control" aria-describedby="emailHelp"/>    
    </div>
  </div>
      <div className="mb-3 row">
        <label htmlFor="exampleInputPassword1" className="col-sm-4 form-label">Password</label>
        <div className='col-sm-8'>
        <input type="password" className="form-control" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 form-label" >Is source / Primary</label>
        <div className='col-sm-8'>
      <div className="form-check form-switch">
        <input className="form-check-input " type="checkbox" role="switch" />
        </div>
        </div>
      </div>
      <button type="submit" className="btn btn-dark btn-center">Submit</button>
    </div>
    </div>
    <div className="modal-footer">
    </div>
  </div>
</div>
</div>


<div className='row scrollable ' style={{width:"1200px"}}>
{
                Environments.map((item1) => {
                    return(
                        <div className='col-sm-2 colheight col-xs-2' key={item1.id}>
                        <div className="card" style={{width: "10rem" ,height:"10vh",marginBottom:"150px"}}>
                        <button type="button" className="ImageButton position-absolute top-0 end-0 my-1 mx-1" onClick={() => deleteApplication(item1.id)} ><img src="./images/delete.jpg" className="buttonImage" alt="..."/></button>
            <img src={item1.image} className="card-img-top1" alt="..."/>
            <div className = "card-body bg-white">
              <p className='text-center'>{item1.Name}</p>
            </div>
            </div>
            </div>
                    )
                })
}
  </div>
  </div>
</div>
</div>
</div>
</>
  

    
  )
}






