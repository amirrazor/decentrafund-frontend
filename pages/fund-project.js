import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { contractAddress, contractABI } from "../public/js/contract-constants.js"

// COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

export default function fundProject() {
    // const sendFundsBtn = document.getElementById("sendFunds")
    // const getBalanceBtn = document.getElementById("getBalance")
    // const withdrawFundsBtn = document.getElementById("withdrawFunds")
    // connBtn.onclick = connectWallet
    // sendFundsBtn.onclick = sendFunds
    // getBalanceBtn.onclick = getBalance
    // withdrawFundsBtn.onclick = withdrawFunds

    async function sendFunds(ethAmount) {
        if (typeof window.ethereum !== "undefined") {
            ethAmount = document.getElementById("fundAmount").value
            const provider = new ethers.providers.Web3Provider(window.ethereum) //A
            const signer = provider.getSigner() //B
            const contract = new ethers.Contract(contractAddress, contractABI, signer) //C
            try {
                const txnResponse = await contract.sendFunds({
                    value: ethers.utils.parseEther(ethAmount),
                })
                await listenForTxnMine(txnResponse, provider)
            } catch (error) {
                console.log(error)
            }
        }
    }

    function listenForTxnMine(txnResponse, provider) {
        document.getElementById(
            "notice-1"
        ).innerHTML = `Mining with transaction hash of ${txnResponse.hash}`
        return new Promise((resolve, reject) => {
            provider.once(txnResponse.hash, (txnReceipt) => {
                document.getElementById(
                    "notice-2"
                ).innerHTML = `Completed with ${txnReceipt.confirmations} confirmations`
                resolve()
            })
        })
    }

    async function getBalance() {
        if (typeof window.ethereum != "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const balance = await provider.getBalance(contractAddress)
            document.getElementById(
                "notice-3"
            ).innerHTML = `The contract balance is ${ethers.utils.formatEther(balance)} Ethers.`
        }
    }

    async function withdrawFunds() {
        const provider = new ethers.providers.Web3Provider(window.ethereum) //A
        const signer = provider.getSigner() //B
        const contract = new ethers.Contract(contractAddress, contractABI, signer) //C
        try {
            const txnResponse = await contract.withdrawFunds()
            await listenForTxnMine(txnResponse, provider)
        } catch (error) {
            console.log(error)
        }
    }

   

    return (
        <div>
            <Header />
            <section id="home" data-stellar-background-ratio="0.5">
                <div className="img-overlay overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4 getFunded">
                                <label htmlFor="fundAmount" className="text-white mt-5 font-title">
                                    Enter the amount you like to fund(In ETH):
                                </label>
                                <input
                                    id="fundAmount"
                                    className="form-control mb-5 mt-3 "
                                    placeholder="Amount in ETH"
                                    type="text"
                                    name="fundAmount"
                                />
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                        <div className="col-md-12 text-warning">
                            <span id="notice-1"></span>
                        </div>
                        <div className="col-md-12 text-success">
                            <span id="notice-2"></span>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3"></div>
                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3">
                                <button
                                    id="sendFunds"
                                    className="btn
                                             btn-primary m-3 px-5"
                                    onClick={async function () {
                                        await sendFunds()
                                    }}
                                >
                                    Send Funds
                                </button>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3">
                                <button
                                    id="getBalance"
                                    className="btn
                                             btn-warning m-3"
                                    onClick={async function () {
                                        await getBalance()
                                    }}
                                >
                                    Get contract balance
                                </button>
                            </div>

                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3"></div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 col-lg-12">
                            <button
                                id="withdrawFunds"
                                className="btn
                                             btn-danger m-3"
                                onClick={async function () {
                                    await withdrawFunds()
                                }}
                            >
                                Withdraw Funds (Only fundraiser manager)
                            </button>
                        </div>
                        <div className="col-md-12 text-white">
                            <span id="notice-3"></span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
