import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading.json";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-[9999]">
      <div className="w-[300px] h-[300px]">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default LoadingScreen;
