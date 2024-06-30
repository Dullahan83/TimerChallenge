import { useRef, useState } from "react";

const useSoundTimer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [timer, setTimer] = useState<number | null>(null);

  const playSound = (source: string, timing: number) => {
    // Arrêter le son actuel s'il y en a un
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Créer un nouvel objet audio
    audioRef.current = new Audio(
      `https://dullahan83.github.io/TimerChallenge/${source}.mp3`
    );
    audioRef.current.volume = 0.3;

    // Définir un timer pour jouer le son
    const newTimer = setTimeout(() => {
      audioRef.current?.play();
    }, timing);

    // Stocker le timer dans l'état
    setTimer(newTimer);

    // Retourner une fonction pour annuler le timer
    return () => {
      clearTimeout(newTimer);
      setTimer(null);
    };
  };

  const stopSoundPlaying = () => {
    // Arrêter le son actuel
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Annuler le timer s'il existe
    if (timer !== null) {
      clearTimeout(timer);
      setTimer(null);
    }
  };

  return {
    playSound,
    stopSoundPlaying,
  };
};

export default useSoundTimer;
