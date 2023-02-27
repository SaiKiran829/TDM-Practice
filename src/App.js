
import './App.css';
import Images from './Components/images';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';

function App() {
  //sorting array in desending order and to make ascending order make them a-b
  // const wanted = arr.sort(function(a,b){
  //   return b-a;
  // });

  return (
    <>
    
    <nav className="navbar navbar-sark bg-dark">
    <img className="navimg" src="https://www.freeiconspng.com/uploads/menu-icon-5.png" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></img>
    </nav>
        <div className="collapse" id="collapseExample">
            <div className="LC-Body">
                <header>Tidium</header><br></br><br></br>
                <a className="btn btn-outline-info">User Administration</a><br></br>
                <a className="btn btn-outline-info">Environment Setup</a><br></br>
                <a className="btn btn-outline-info">Test Data Preparation</a><br></br>
                <a className="btn btn-outline-info">Data Anonymizatiom</a><br></br>
                <a className="btn btn-outline-info">Data Quality Check</a><br></br>
                <a className="btn btn-outline-info">Data Assertion</a><br></br>
                <a className="btn btn-outline-info">Run Regression</a><br></br>
                <a className="btn btn-outline-info">Dashboard</a><br></br>
    </div>
    </div>

    <Photos />

    </>
  );
}
export default App;