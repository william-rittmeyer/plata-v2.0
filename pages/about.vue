<template>

    <div class="about">
        <div class="company">
            <h1>About Plata</h1>
            <h2>IPFS - Ethereum - Orbitdb</h2>

            <div class="red-border"></div>

            <p>Plata is an Ethereum-based marketplace platform that facilitates the 
            exchange of digital assets as well as database access. Files uploaded to Plata are encrypted and stored on a decentralized 
            cloud provided by IPFS. Through the use of smart contracts provided by the Ethereum blockchain, users are able to securely
            buy and sell digital assets. Plata also offers a feature of buying and selling database access. Databases are hosted on 
            orbitdb which is a database engine on IPFS which make Plata very useful for IoT.</p>

            <img src="../assets/IPFS.png" class="ipfs_logo logos">
            <img src="../assets/ethereum.png" class="ethereum_logo logos">
            <img src="../assets/orbitdb.png" class="orbitdb_logo logos">
            
        </div>
    </div>


</template>

<script>


</script>


<style>

.company {
    color: white;
}

.company h1{

    font-family: sans-serif;
    margin-bottom: 40px;
    line-height: 80px;
    font-size: 65px;
    font-weight: 100;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.company h2{

    font-family: sans-serif;

    margin: 14px 0;
    font-size: 25px;
    font-weight: 700;
    position: fixed;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.company p{

    font-family: sans-serif;
    text-align: center;
    margin-top: 40px; 
    margin-top: 20px;
    font-size: 28px;
    font-weight: 300;
    position: fixed;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%); 
}

.red-border {
    width: 50%;
    border-bottom: 1px solid white;
    margin: 0 auto;
    height: 16px;
    position: fixed;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.logos {
    position: absolute;
    top: 70%;
}

.ipfs_logo {
    width: 100px;
    left: 38%;

}

.ethereum_logo {
    width: 60px;
    left: 49%;
}

.orbitdb_logo {
    width: 200px;
    left: 57%;
}
</style>
