
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Volume2, VolumeX, ArrowLeft } from "lucide-react";

const TrainScene = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const trainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const trainSound = document.getElementById("train-sound") as HTMLAudioElement;
    const railsSound = document.getElementById("rails-sound") as HTMLAudioElement;
    const desertSound = document.getElementById("desert-sound") as HTMLAudioElement;
    
    const sounds = [trainSound, railsSound, desertSound];
    
    sounds.forEach(sound => {
      if (sound) {
        if (isMuted) {
          sound.volume = 0;
        } else {
          // Разные уровни громкости для разных звуков
          if (sound === trainSound) sound.volume = 0.15;
          if (sound === railsSound) sound.volume = 0.25;
          if (sound === desertSound) sound.volume = 0.1;
        }
        
        if (isPlaying) {
          sound.play().catch(e => console.error("Аудио не может быть воспроизведено автоматически:", e));
        } else {
          sound.pause();
        }
      }
    });
    
    // Создаем эффект движения камеры за поездом
    const animateTrainMovement = () => {
      if (trainRef.current) {
        const xPos = (Math.sin(Date.now() * 0.0005) * 5); // Слегка покачивается по горизонтали
        const yPos = (Math.sin(Date.now() * 0.002) * 1.5); // Слегка покачивается по вертикали
        
        trainRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      }
      requestAnimationFrame(animateTrainMovement);
    };
    
    const animationFrame = requestAnimationFrame(animateTrainMovement);
    
    // Создаем эффект мерцания солнца
    const sunElement = document.querySelector('.sun');
    if (sunElement) {
      const animateSun = () => {
        const brightness = 1 + Math.sin(Date.now() * 0.001) * 0.1;
        sunElement.setAttribute('style', `filter: brightness(${brightness});`);
        requestAnimationFrame(animateSun);
      };
      requestAnimationFrame(animateSun);
    }
    
    return () => {
      sounds.forEach(sound => {
        if (sound) sound.pause();
      });
      cancelAnimationFrame(animationFrame);
    };
  }, [isMuted, isPlaying]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-desert-deep">
      {/* Звуковая дорожка */}
      <audio
        id="train-sound"
        loop
        preload="auto"
        className="hidden"
        src="https://freesound.org/data/previews/459/459238_5674468-lq.mp3"
      />
      <audio
        id="rails-sound"
        loop
        preload="auto"
        className="hidden"
        src="https://freesound.org/data/previews/219/219613_4082826-lq.mp3"
      />
      <audio
        id="desert-sound"
        loop
        preload="auto"
        className="hidden"
        src="https://freesound.org/data/previews/338/338503_1648170-lq.mp3"
      />
      
      {/* Интерфейс управления */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
        <Link to="/">
          <Button variant="default" className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 shadow-2xl flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Назад</span>
          </Button>
        </Link>
        
        <Button 
          onClick={toggleMute}
          variant="default"
          className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 shadow-2xl"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>
      
      {/* Эффект кинопленки и зернистости */}
      <div className="absolute inset-0 z-40 film-grain opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 z-40 film-scratches opacity-5 pointer-events-none"></div>
      
      {/* Небо и атмосфера */}
      <div className="absolute inset-0 sky-gradient"></div>
      
      {/* Солнце и отражение */}
      <div className="absolute top-[10%] right-[30%] sun"></div>
      <div className="absolute top-[10.5%] right-[30.5%] sun-corona"></div>
      <div className="absolute top-[11%] right-[31%] sun-flare"></div>
      
      {/* Дальние горы с параллаксом */}
      <div className="absolute mountains-far"></div>
      
      {/* Средние горы с параллаксом */}
      <div className="absolute mountains-mid"></div>
      
      {/* Ближние горы */}
      <div className="absolute mountains-near"></div>
      
      {/* Основание пустыни */}
      <div className="absolute desert-floor"></div>
      
      {/* Тени от облаков */}
      <div className="absolute cloud-shadow cloud-shadow-1"></div>
      <div className="absolute cloud-shadow cloud-shadow-2"></div>
      
      {/* Рельсы детализированные */}
      <div className="absolute railroad-base z-10"></div>
      <div className="absolute railroad-tracks-left z-20"></div>
      <div className="absolute railroad-tracks-right z-20"></div>
      <div className="absolute railroad-ties z-10"></div>
      <div className="absolute railroad-ballast z-5"></div>
      
      {/* Детали окружения */}
      <div className="absolute desert-details">
        {/* Кактусы в разных местах */}
        <div className="cactus cactus-large cactus-1"></div>
        <div className="cactus cactus-medium cactus-2"></div>
        <div className="cactus cactus-small cactus-3"></div>
        <div className="cactus cactus-small cactus-4"></div>
        <div className="cactus cactus-medium cactus-5"></div>
        
        {/* Скалы и камни */}
        <div className="rock rock-large rock-1"></div>
        <div className="rock rock-medium rock-2"></div>
        <div className="rock rock-small rock-3"></div>
        <div className="rock rock-medium rock-4"></div>
        <div className="rock rock-cluster rock-5"></div>
        
        {/* Пересохшие деревья */}
        <div className="dead-tree tree-1"></div>
        <div className="dead-tree tree-2"></div>
        
        {/* Кустарники перекати-поле */}
        <div className="tumbleweed tumbleweed-1"></div>
        <div className="tumbleweed tumbleweed-2"></div>
        <div className="tumbleweed tumbleweed-3"></div>
      </div>
      
      {/* Поезд с детализацией */}
      <div ref={trainRef} className="train-container z-30">
        <div className="locomotive">
          {/* Детализированный локомотив */}
          <div className="locomotive-body"></div>
          <div className="locomotive-cabin"></div>
          <div className="locomotive-chimney">
            {/* Дым из трубы */}
            <div className="smoke-puff smoke-1"></div>
            <div className="smoke-puff smoke-2"></div>
            <div className="smoke-puff smoke-3"></div>
            <div className="smoke-puff smoke-4"></div>
            <div className="smoke-puff smoke-5"></div>
          </div>
          <div className="locomotive-front"></div>
          <div className="locomotive-details"></div>
          <div className="locomotive-wheels">
            <div className="wheel wheel-large wheel-1"></div>
            <div className="wheel wheel-large wheel-2"></div>
            <div className="wheel wheel-large wheel-3"></div>
            <div className="connecting-rod"></div>
          </div>
        </div>
        
        {/* Вагоны */}
        <div className="train-car freight-car car-1">
          <div className="freight-car-body"></div>
          <div className="freight-car-details"></div>
          <div className="freight-car-wheels">
            <div className="wheel wheel-small wheel-4"></div>
            <div className="wheel wheel-small wheel-5"></div>
          </div>
        </div>
        
        <div className="train-car passenger-car car-2">
          <div className="passenger-car-body"></div>
          <div className="passenger-car-windows"></div>
          <div className="passenger-car-details"></div>
          <div className="passenger-car-wheels">
            <div className="wheel wheel-small wheel-6"></div>
            <div className="wheel wheel-small wheel-7"></div>
          </div>
        </div>
        
        <div className="train-car passenger-car car-3">
          <div className="passenger-car-body"></div>
          <div className="passenger-car-windows"></div>
          <div className="passenger-car-details"></div>
          <div className="passenger-car-wheels">
            <div className="wheel wheel-small wheel-8"></div>
            <div className="wheel wheel-small wheel-9"></div>
          </div>
        </div>
        
        {/* Эффекты движения поезда */}
        <div className="train-speed-lines"></div>
        <div className="train-dust-cloud"></div>
      </div>
      
      {/* Эффекты пыли и песка */}
      <div className="dust-layer dust-layer-1"></div>
      <div className="dust-layer dust-layer-2"></div>
      <div className="dust-layer dust-layer-3"></div>
      
      {/* Песчаные дюны на переднем плане */}
      <div className="sand-dunes sand-dunes-1"></div>
      <div className="sand-dunes sand-dunes-2"></div>
      <div className="sand-dunes sand-dunes-3"></div>
      
      {/* Мираж-эффект */}
      <div className="mirage-effect"></div>
      
      {/* Тепловые волны над песком */}
      <div className="heat-wave"></div>
      
      {/* Передний план с пыльной атмосферой */}
      <div className="foreground-dust"></div>
      
      {/* Легкий эффект линзы */}
      <div className="lens-effect"></div>
      
      {/* Виньетка для кинематографического эффекта */}
      <div className="vignette"></div>
    </div>
  );
};

export default TrainScene;
