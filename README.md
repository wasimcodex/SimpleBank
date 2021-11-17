
## A simple banking application based on blockchain technology.

This is a banking application that allows users to deposit and withdraw ethers using a crypto wallet.

The objective of this project is to help developers understand the basics of smart contracts, payable functions, deploying a smart contract to a test network, creating a react 
frontend application, how to interact with the deployed smart contract through our frontend application, and how to host the frontend application atlast.

### Why build this project?

A while ago when I wanted to build a similar project, I noticed a lack of resources available to guide through the above mentioned concepts. It took me a while to figure out all these 
things from various sources and get them to work. So I wanted to build a simple application that might help someone to get started and understand these concepts easily. 

## How to run this project?

* Clone this repository to your PC.
* Navigate to the cloned repo and run

  ```
  npm install
  ```
  Assuming you have node.js installed. If now install from [here](https://nodejs.org/en/download/).

* Go to [Alchemy](https://www.alchemy.com/).
  - Signup if you do not have an account already.
  - Create a new app
  
  ![Alchemy Create APP](https://i.imgur.com/nHQ5leN.png)
  
  Make sure to select Staging, Ethereum and Rinkeby in respective fields.
  
* Go to [Metamask](https://metamask.io/) and download it to your browser. Follow the instructions to create an account.

* Once you have your metamask wallet ready, go to [rinkeby faucet](https://www.rinkeby.io/#faucet) and follow their instructions to get some test ethers.

* Now create a ```.env``` file in the root directory and add
  ```
  ALCHEMY_API_URL = <YOUR_ALCHEMY_APP_API_URL>
  RINKEBY_PRIVATE_KEY = <YOUR_PRIVATE_KEY>
  ```
  
  You can get the alchemy api url from the app you created earlier, copy the http version.
  
  And you can get the private key from metamask as shown [here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key). This is needed
  to deploy our contract to the test network. Private Key is a very sensitive information, so make sure not to reveal it to anyone.
  
* Once you have them in place, now it's time to compile our smart contract. Run the following command.
  ```
  npx hardhat compile
  ```
  
* Now we'll deploy our smart contract to rinkeby test network.
  ``` bash
  npx hardhat run ./scripts/deploy.js --network rinkeby
  ```
  Before running the above command, make sure you have received your test ethers to your account or else it will through an error saying insufficient fund.
  
* Now switch to frontend dir.
  ```
  cd frontend
  ```
  
* Install packages
  ```
  npm install
  ```
  
* Now create a ```.env``` file in the frontend directory and add
  ```
  REACT_APP_ALCHEMY_KEY = <YOUR_ALCHEMY_APP_API_URL>
  ```
  
  Use the same API Key as above.
  
* Run the app.
  ```
  npm start
  ```
  
  If you followed all the above instructions properly, the app should now run on localhost.

***

This project is also hosted [here](https://simple-bank-co.herokuapp.com/), take a look.
  
I hope this helps someone, I'm planning to write a detailed blog explaning every single aspect of this project soon. Once done I'll share the link to the same here.

