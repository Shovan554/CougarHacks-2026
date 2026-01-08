import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading.json";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="lottie-wrapper">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default LoadingScreen;
