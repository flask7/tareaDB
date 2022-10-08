function Header () {
    return (
        <>
            <header>
                <div className="container-flags">
                    <div className="items-flags">
                        <div className="assets-flags">
                            <ion-icon name="reorder-three-outline"></ion-icon>
                        </div>
                        <div className="assets-flags">
                            <ion-icon name="radio-button-off-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="items-flags">
                        <div className="assets-flags">
                            <button className="connect-button">Connect</button>
                        </div>
                        <div className="assets-flags">
                            <ion-icon name="radio-button-off-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;