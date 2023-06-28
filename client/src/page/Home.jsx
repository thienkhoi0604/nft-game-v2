import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PageHOC, CustomInput, CustomButton } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const playerExists = await contract?.isPlayer(walletAddress);
      console.log("contract - home ", contract);
      if (!playerExists) {
        await contract?.registerPlayer(playerName, playerName);

        setShowAlert({
          status: true,
          type: "info",
          message: `${playerName} is being summoned!`,
        });

        setTimeout(() => navigate("/create-battle"), 8000);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);

      if (playerExists && playerTokenExists) navigate("/create-battle");

      console.log("checkForPlayerToken", playerExists, playerTokenExists);
    };

    if (contract) checkForPlayerToken();
  }, [contract, navigate, walletAddress]);

  return (
    <div>
      <CustomInput
        label="Name"
        placeHolder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br /> a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    Game
  </>
);
