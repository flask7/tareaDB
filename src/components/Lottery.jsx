import AsideMenu from './AsideMenu';

function Lottery () {
    return (
        <>
              <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info">
                <h2><center>The ONI Lottery</center></h2>
                <h4><center>Buy tickets with Money Win if 2, 3, or 4 of your ticket numbers match!</center></h4>
                <div class="contenedorfarm">  
                </div>
            </section>
        <br>
        </br>
        <div className="cartes-farm">
        <div className="cartes">
                    <h3>
                       EARN UP TO
                    </h3>
                    <h1>124.67% APR</h1>
                    <h3>
                    IN MONEY FARMS
                    </h3>
                </div>  
                <div className="cartes">
                    <h3>
                    EARN
                    </h3>
                    <h1>MONEY</h1>
                    <h3>
                    IN POOLS
                    </h3>
                </div> 
                </div> 
       <br>
       </br>
       <h2><center>HOW IT WORKS</center></h2>
       <h4><center>Spend ONI to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!</center></h4>
       <br>
       </br>
       <h4><center>READ MORE</center></h4>
       <br>
       </br>
       <div className="cartitas">
                    <h3>
                       EARN UP TO
                    </h3>
                    <h1>124.67% APR</h1>
                    <h3>
                    IN MONEY FARMS
                    </h3>
                </div>  
        </article>
                </div>       
        </>
    );
}

export default Lottery;