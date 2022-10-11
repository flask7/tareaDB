import AsideMenu from './AsideMenu';

function Home () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                    <div className="div-time">
                        <div className="">
                        <button className="button2">Collect winnings</button>
                        </div>
                        <span class="sc-kHdrYz giTQXq">Massive burn in:</span>
                        <div className="circulos">
                            <div className="circles">
                                <div className="circle-back">
                                    <h4>10</h4>
                                    <p>Hours</p>
                                </div>
                            </div>
                            <div className="circles">
                                <div className="circle-back">
                                    <h4>10</h4>
                                    <p>Hours</p>
                                </div>
                            </div>
                            <div className="circles">
                                <div className="circle-back">
                                    <h4>10</h4>
                                    <p>Hours</p>
                                </div>
                            </div>

                            <div className=""><button className="button3">BUY MONEY</button></div>
                            <div className=""><button className="button3">+ADD MONEY TO</button></div>
                            <div className=""></div>
                        </div>
                    </div>
                    
                    <div className="div-time">
                        <div className=""></div>
                        <div className=""></div>
                        <div className="div-time-grow"></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>

                    <div className="cards-dapps-container">
                        <div className="cartes">
                            <div className="header-card-dapp">
                                <div className=""><h2> FARMS AND STAKING</h2></div>
                                <div className=""><p>TO HARVEST</p></div>
                                <div className=""><p>IN WALLET</p></div>
                            </div>
                            <div className="cards-dapps-body">
                                <p>ONI TO HARVEST</p>
                                <br />
                                <p>Locked</p>
                            </div>                                                                                                            
                            <div className="cards-dapps-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>                                        
                        </div>


                        <div className="cartas">
                            <div className="header-card-dapp">
                                <div className="">YOUR LOTTERY WINNINGS</div>
                                <div className="">TO COLLECT</div>
                                <div className=""><p>TOTAL JACKPOT THIS ROUND:</p></div>
                            </div>
                            <div className="cards-dapps-body"> 
                            </div>                                                                            
                            <div className="cards-dapps-footer">
                                <button className="collect-button">Collect winnings</button>
                                <button className="approve-button">Approve On</button>
                            </div>                        
                        </div>
                    </div>
  
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    
                    <div className="cartas-home">  
                        <div className="cartas">
                            <h3>
                                EARN UP TO
                            </h3>
                            <h1>124.67% APR</h1>
                            <h3>
                                IN MONEY FARMS
                            </h3>
                        </div>     
                        <div className="cartas">
                            <h3>
                                EARN
                            </h3>
                            <h1>MONEY</h1>
                            <h3>
                                IN POOLS
                            </h3>
                        </div> 
                    <div className="cartas">
                        <h3>
                            LOTTERY WITH
                        </h3>
                        <h1>$4</h1>
                        <h3>
                            UP FOR GRABS
                        </h3>
                    </div>  
                </div>  
                <div className="div-right">
                        <div className=""><h2>FARMS AND STAKING</h2></div>
                        <div className=""></div>
                        <div className=""></div>
                        

                        </div>
                    <div className="cartas">
                        <p>YOUR LOTTERY WINNINGS</p>
                    </div>
                      
                </article>
            </div>
        </>
    );
}

export default Home;