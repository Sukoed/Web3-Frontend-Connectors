const BASE_CHAIN_ID = '0x2105'; // Base Mainnet

async function switchToBase() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: BASE_CHAIN_ID }],
    });
  } catch (error) {
    console.error("Network switch failed");
  }
}
