import Lottie from 'lottie-react';
import animation from '../assets/loading.json';

function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <Lottie
        animationData={animation}
        loop
        autoplay
        style={{ width: 180, height: 180 }}
      />
    </div>
  );
}

export default Loading;