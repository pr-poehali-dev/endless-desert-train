
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";

const TrainScene = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    const audio = document.getElementById("train-sound") as HTMLAudioElement;
    
    if (audio) {
      if (isMuted) {
        audio.volume = 0;
      } else {
        audio.volume = 0.2;
      }
      
      if (isPlaying) {
        audio.play().catch(e => console.error("Аудио не может быть воспроизведено автоматически:", e));
      } else {
        audio.pause();
      }
    }
    
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [isMuted, isPlaying]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-amber-50">
      {/* Звуковая дорожка */}
      <audio
        id="train-sound"
        loop
        preload="auto"
        className="hidden"
        src="https://soundbible.com/mp3/Train_Whistle-Soundmaster_Alexander-706179130.mp3"
      />
      
      {/* Кнопка управления звуком */}
      <button 
        onClick={toggleMute}
        className="absolute top-4 right-4 z-50 p-2 bg-white/20 backdrop-blur-sm rounded-full"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>
      
      {/* Кнопка возврата на главную */}
      <Link to="/" className="absolute top-4 left-4 z-50">
        <Button variant="outline" className="backdrop-blur-sm bg-white/20">
          На главную
        </Button>
      </Link>
      
      {/* Небо */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-100 to-amber-300"></div>
      
      {/* Солнце */}
      <div className="absolute top-20 left-1/3 w-20 h-20 bg-yellow-200 rounded-full blur-md opacity-80"></div>
      
      {/* Дальние горы с параллаксом */}
      <div className="absolute bottom-[40%] w-[300%] h-[20%] animate-[moveLeftSlow_120s_linear_infinite]">
        <div className="absolute inset-0 bg-amber-800/30 mountain-range-far"></div>
      </div>
      
      {/* Средние горы с параллаксом */}
      <div className="absolute bottom-[35%] w-[300%] h-[25%] animate-[moveLeftMedium_80s_linear_infinite]">
        <div className="absolute inset-0 bg-amber-700/40 mountain-range-mid"></div>
      </div>
      
      {/* Пустыня (основная земля) */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-amber-600 desert-ground"></div>
      
      {/* Рельсы */}
      <div className="absolute bottom-[calc(35%-5px)] left-0 right-0 h-[10px] bg-gray-700 z-10"></div>
      <div className="absolute bottom-[calc(35%-8px)] left-0 right-0 h-[3px] bg-gray-500 z-10"></div>
      
      {/* Шпалы */}
      <div className="absolute bottom-[calc(35%-15px)] left-0 right-0 h-[15px] railroad-ties"></div>
      
      {/* Поезд */}
      <div className="absolute bottom-[calc(35%+15px)] left-[10%] z-20 train-container">
        <div className="train-engine">
          <div className="train-cabin"></div>
          <div className="train-nose"></div>
          <div className="train-wheels"></div>
          <div className="train-chimney">
            <div className="smoke-puff"></div>
            <div className="smoke-puff delay-1"></div>
            <div className="smoke-puff delay-2"></div>
          </div>
        </div>
        <div className="train-car car-1"></div>
        <div className="train-car car-2"></div>
        <div className="train-car car-3"></div>
      </div>
      
      {/* Песчаные дюны на переднем плане */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] animate-[moveLeftFast_30s_linear_infinite]">
        <div className="absolute inset-0 sand-dunes-foreground"></div>
      </div>
      
      {/* Пыльные облака */}
      <div className="dust-cloud dust-1"></div>
      <div className="dust-cloud dust-2"></div>
      <div className="dust-cloud dust-3"></div>
      <div className="dust-cloud dust-4"></div>
      
      {/* Миражи в пустыне */}
      <div className="mirage mirage-1"></div>
      <div className="mirage mirage-2"></div>
      
      {/* Кактусы и камни */}
      <div className="absolute bottom-[35%] left-[25%] cactus-large"></div>
      <div className="absolute bottom-[35%] left-[65%] cactus-small"></div>
      <div className="absolute bottom-[34%] left-[45%] rock-formation"></div>
      
      {/* Пыльная дымка на всей сцене */}
      <div className="absolute inset-0 bg-yellow-500/10 backdrop-blur-[1px] dust-overlay"></div>
      
      {/* Пыль от поезда */}
      <div className="train-dust"></div>
    </div>
  );
};

export default TrainScene;
