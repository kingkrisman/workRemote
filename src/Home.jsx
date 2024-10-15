import "./Homestyle.css";


const Home = () => {
    return( 
      <div className="complete">
         <img src="images\logo.svg" className="logo" />
        <div className="header">
        <div className="nav">
            <a className="btn">Features</a><br />
            <a className="btn">Company</a><br />
            <a className="btn">Career</a><br />
            <a className="btn">About</a><br />
        </div>
<div className="cta">
        <button className="log">Login</button>
        <button className="reg">Register</button>
        </div>
      </div>
      </div>
    )
    }
    
    export default Home