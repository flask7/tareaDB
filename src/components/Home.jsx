import AsideMenu from './AsideMenu';

function Home () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                    <div className="div-time">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="div-time">
                        <div className=""></div>
                        <div className=""></div>
                        <div className="div-time-grow"></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="">
                        <h2>KNSODFGIHNSEPIV</h2>
                    </div>
                    <div className="">
                        <p>ksefhodisrhfgoidsrhfg</p>
                    </div>
                    <div className="cards-dapps-container">
                        <div className="cards-dapp">
                            <div className="header-card-dapp">
                                <div className=""></div>
                                <div className=""></div>
                            </div>
                            <div className="cards-dapps-body"></div>                                                                                                            
                            <div className="cards-dapps-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>                                        
                        </div>
                        <div className="cards-dapp">
                            <div className="header-card-dapp">
                                <div className=""></div>
                                <div className=""></div>
                            </div>
                            <div className="cards-dapps-body"></div>                                                                            
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
                </article>
            </div>
        </>
    );
}

export default Home;