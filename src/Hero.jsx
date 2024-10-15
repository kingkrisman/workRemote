import "./Hero.css";


const Hero = () => {
    return( 
    <div>
        <div className="herosec">
      <div  className="partone">
        <section className="herotext">
        <div className="bigtext">Make<br/>remote work</div>
        <div className="dep">Get your team in sync, no matter your location. <br /> Streamline processes, 
  create team rituals,<br /> and watch productivity soar.

</div>
<button className="learn">Learn More</button>
</section>

<div className="sponsors">
    <img src="images\client-audiophile.svg" alt="" />
    <img src="images\client-databiz.svg" alt="" />
    <img src="images\client-maker.svg" alt="" />
    <img src="images\client-meet.svg" alt="" />
</div>
</div>



<main className="imghero"><img src="images\image-hero-desktop.png" className="heroimg" /></main>
</div>
   
    </div>
    )
    }
    
    export default Hero