import { PageHOC } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { demo } = useGlobalContext();
  return <div>{demo}</div>;
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
