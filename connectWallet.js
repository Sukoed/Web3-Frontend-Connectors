async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Connected to:", accounts[0]);
    } catch (error) {
      console.error("User denied access");
    }
  } else {
    alert("Please install MetaMask!");
  }
}
