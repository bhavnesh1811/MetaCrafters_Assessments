/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let nftCollection=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above..
function mintNFT(name,address) {

    // Creating NFT'S
        let nftData={
            name,
            address,
            id:Date.now()+Math.random()*10000,
        }

    // Showing Added NFT in console;
        console.log("nftData",nftData);
    // Storing NFT in nftCollection
        nftCollection.push(nftData);
}

function listNFTs () {
    // create a "loop" that will go through an "array" of NFT's
    for(let i=0;i<nftCollection.length;i++){
        // and print their metadata with console.log()
        console.log(`${i+1} NFT Name, ${nftCollection[i].name}`);
        console.log(`${i+1} NFT Address, ${nftCollection[i].address}`);
        console.log(`${i+1} NFT Id, ${nftCollection[i].id}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    let totalNoOfNfts=0;
    for(let i=0;i<nftCollection.length;i++){
        totalNoOfNfts++;
    }
    console.log("totalNoOfNfts",totalNoOfNfts)
}

// call your functions below this line
mintNFT("Parley","Rajastjhan")
mintNFT("Taj Mahal","Agra")
mintNFT("Har ki Paudi","Haridwar")

listNFTs();
getTotalSupply();
