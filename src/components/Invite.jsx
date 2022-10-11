import AsideMenu from './AsideMenu';

function Invite () {
    return (
        <>
              <div className="home-container">
                <AsideMenu />
                <article>
       <h2><center>Refer And Earn</center></h2>
       <div className="cartites-invite">
       <div className="cartites">
                    <h4>
                    Share the referral link below to invite your friends and earn 2% of your friends earnings FOREVER!  
                    </h4>
                    <button className="button-invite">Unlock Wallet</button>  
                    <h4>
                    Your will automatically get $Money in your wallet as reward whenever the referred user Harvests/Withdraws from our ONI Farms and Fuel Pools.
                    </h4>
                </div> 
                </div>  
        </article>
                </div>       
        </>
    );
}

export default Invite;