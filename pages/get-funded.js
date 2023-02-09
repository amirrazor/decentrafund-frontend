// COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

export default function GetFunded() {
    return (
        <div>
            <Header />
            <section id="home" data-stellar-background-ratio="0.5">
                <div className="img-overlay overlay">
                    <div className="container col-lg-4">
                        <h2 className="text-white getFunded">Create your contract</h2>
                        <label htmlFor="projectName" className="text-white mt-4 mb-2">
                            The name of your project/product:
                        </label>
                        <input
                            id="projectName"
                            type="text"
                            className="form-control"
                            placeholder="Name of project/product"
                            disabled
                        />
                        <label htmlFor="projectDesc" className="text-white mt-4 mb-2">
                            Project/product description: (Max 1000 words)
                        </label>
                        <textarea
                            id="projectDesc"
                            type="text"
                            className="form-control pb-5"
                            placeholder="Project/product description"
                            disabled
                        />
                        <label htmlFor="fundMax" className="text-white mt-4 mb-2">
                            The amound you'd like to get funded:
                        </label>
                        <input
                            id="fundMax"
                            type="text"
                            className="form-control"
                            placeholder="Amount in ETH"
                            name="fundMax"
                            disabled
                        />
                        <label htmlFor="minAmount" className="text-white mt-4 mb-2">
                            Minimum amount suppoerters can pay you:
                        </label>
                        <input
                            id="minAmount"
                            type="text"
                            className="form-control "
                            placeholder="Amount in ETH"
                            disabled
                        />

                        <label htmlFor="walletAddress" className="text-white mt-4 mb-2">
                            The wallet address you'd like to get paid to:
                        </label>
                        <input
                            id="walletAddress"
                            type="text"
                            className="form-control "
                            placeholder="Wallet Address"
                            disabled
                        />
                        <button type="submit" className="btn btn-primary mt-5" disabled>
                            Create smart contract
                        </button>
                        <h3 className="text-warning">Under construction</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
