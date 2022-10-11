import AsideMenu from './AsideMenu';

function Pools () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info">
                <h2><center>Fuel Pool</center></h2>
                <h4><center>Stake ONI to earn new tokens.</center></h4>
                <h4><center>You can unstake at any time.</center></h4>
                <h4><center>Rewards are calculated per block.</center></h4>
                <div class="switch-button">
            <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox"></input>
            <label for="switch-label" class="switch-button__label"></label>

                <div class="contenedorfarm"> 
                </div>
                </div>
            </section>
        <br>
        </br>

        <div className="cartis-farm">
        <div className="cartis">
                    <h3>
                       EARN UP TO
                    </h3>
                    <h1>124.67% APR</h1>
                    <h3>
                    IN MONEY FARMS
                    </h3>
                </div>  
                <div className="cartis">
                    <h3>
                    EARN
                    </h3>
                    <h1>MONEY</h1>
                    <h3>
                    IN POOLS
                    </h3>
                </div>  
                </div> 
      </article>
                </div> 
        </>
    );
}

export default Pools;