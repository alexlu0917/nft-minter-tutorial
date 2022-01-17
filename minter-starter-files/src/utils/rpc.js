require("dotenv").config(); console.log(process.env, 'env')
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY; console.log(alchemyKey, 'alkeyme')
const contractABI = require("./abi.json");
const contractAddress = "0xeAe25597714fc39e3900FE7E9ab2653426F5B9d4";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/w88aEnvJJHf9JcwdFktz0yS_dS-Db9CC");

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

