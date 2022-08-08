const main = async () => {
  const [_, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed To:", waveContract.address);
  //console.log("Contract deployed by :", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  let waveTxn = await waveContract.wave("Ayoo");
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaves();

  waveTnx = await waveContract.connect(randomPerson).wave("hola man");
  await waveTnx.wait();
  waveCount = await waveContract.getTotalWaves();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
