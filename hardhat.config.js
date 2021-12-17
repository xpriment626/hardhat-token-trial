require("@nomiclabs/hardhat-waffle");

const ALCHEMY_URL =
    "https://eth-ropsten.alchemyapi.io/v2/wgZaYQUt7XIxxkBAAO6zcSCsDwa94l2j";
const PRIVATE_KEY =
    "7d4bb77c852dd0bd1b8b100d6f053e3a906e1df6f4eb7224f1aeed89cccf0360";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        Ropsten: {
            url: ALCHEMY_URL,
            accounts: [`0x${PRIVATE_KEY}`],
        },
    },
};
