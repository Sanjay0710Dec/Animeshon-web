import Hls from "hls.js";
import { VideoQuality } from "../types/animeResult/animeStream";
import React, { useRef, useState, useEffect, useCallback } from "react";

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});
const useControlVideo = (src: string) => {
  const [videoLoading, setVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLSelectElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [qualityLevels, setQualityLevels] = useState<VideoQuality[]>([]);
  const [currentQuality, setCurrentQuality] = useState(-1);
  const [videoPaused, setVideoPaused] = useState(true);
  const [currentVolume, setCurrentVolume] = useState(100);
  const [videoProgress, setVideoProgess] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [showSetting, setShowSettings] = useState(false);
  const [totalDuration, setTotalDuration] = useState("0:00");
  const [currentDuration, setCurrentDuration] = useState("0:00");

  const handleVolumeChange = useCallback(function (
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    if (videoRef.current) {
      const modifiedVolume = Number(e.target.value) / 100;

      videoRef.current.volume = modifiedVolume;

      setCurrentVolume(Number(e.target.value));
    }
  }, []);

  const handleVolumeMute = useCallback(function () {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = !videoRef.current.muted;
        setCurrentVolume(videoRef.current.volume * 100);
      } else {
        videoRef.current.muted = !videoRef.current.muted;
        setCurrentVolume(0);
      }
    }
  }, []);

  const skipVideo5seconds = useCallback(function (time: 5 | -5) {
    if (videoRef.current) {
      videoRef.current.currentTime += time;
    }
  }, []);

  const changeQuality = useCallback(function (level: number) {
    if (hlsRef.current) {
      hlsRef.current.currentLevel = level;
    }
  }, []);

  const togglePlayPause = useCallback(function () {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setVideoPaused(false);
      } else {
        videoRef.current.pause();
        setVideoPaused(true);
      }
    }
  }, []);

  const handleVideoTimeUpdate = useCallback(function () {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgess(currentProgress);
      formatDuration(videoRef.current.currentTime, true);
    }
  }, []);

  const formatDuration = useCallback(function (
    time: number,
    isCalledToUpdateCurrentDuration: boolean = false,
  ) {
    if (videoRef.current) {
      const seconds = Math.floor(time % 60);
      const minutes = Math.floor(time / 60) % 60;
      const hours = Math.floor(time / 3600);

      if (isCalledToUpdateCurrentDuration) {
        if (hours === 0) {
          setCurrentDuration(
            `${minutes}:${leadingZeroFormatter.format(seconds)}`,
          );
        } else {
          setCurrentDuration(
            `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`,
          );
        }
      } else {
        if (hours === 0) {
          setTotalDuration(
            `${minutes}:${leadingZeroFormatter.format(seconds)}`,
          );
        } else {
          setTotalDuration(
            `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`,
          );
        }
      }
    }
  }, []);

  const handleInputProgressBarChange = useCallback(function (
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    if (videoRef.current) {
      const video = videoRef.current;

      const time = video.duration * (Number(e.target.value) / 100);

      video.currentTime = time;

      setVideoProgess(Number(e.target.value));
    }
  }, []);

  const toggleFullScreen = useCallback(function () {
    if (document.fullscreenElement == null) {
      if (videoContainerRef.current) {
        videoContainerRef.current.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }, []);

  const handleKeyDown = useCallback(function (
    e: React.KeyboardEvent<HTMLSelectElement>,
  ) {
    const tagName = document.activeElement?.tagName.toLowerCase();
    if (tagName === "button") {
      return;
    }

    switch (e.key.toLowerCase()) {
      case " ":
        togglePlayPause();
        break;

      case "k":
        togglePlayPause();
        break;
      case "l":
        skipVideo5seconds(5);
        break;
      case "j":
        skipVideo5seconds(-5);
        break;
      case "arrowleft":
        skipVideo5seconds(-5);
        break;
      case "arrowright":
        skipVideo5seconds(5);
        break;
      case "m":
        handleVolumeMute();
        break;
      case "f":
        toggleFullScreen();
        break;
    }
  }, []);

  useEffect(function () {
    function handleFullScreenChange() {
      setFullScreen(document.fullscreenElement !== null);
    }
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  useEffect(
    function () {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }

      if (videoRef.current && Hls.isSupported()) {
        setVideoLoading(true);
        const hls = new Hls();
        hlsRef.current = hls;

        hls.loadSource(src);

        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          console.log("video and hls.js are now bound together !");
        });
        hls.on(Hls.Events.MANIFEST_PARSED, function (_event, data) {
          const qualities = data.levels.map((level, index) => ({
            height: level.height,
            level: index,
          }));
          setQualityLevels(qualities);
          setCurrentQuality(hls.autoLevelEnabled ? -1 : hls.currentLevel);
        });
        hls.on(Hls.Events.LEVEL_SWITCHED, function (_event, data) {
          setVideoLoading(false);
          setCurrentQuality(data.level);
        });
        hls.on(Hls.Events.ERROR, function (_event, data) {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                setError("A network error cccurred ,Trying to recover");
                break;

              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                setError("A media error occurred, Trying to recover");
                break;
              default:
                hls.destroy();
                setError(
                  " An error occurred cannot play the video please try again",
                );
                break;
            }
          }
        });
      } else {
        setError("Your browser does not support HLS play back");
      }

      return () => {
        if (hlsRef.current) {
          hlsRef.current.destroy();
          hlsRef.current = null;
        }
      };
    },
    [src],
  );

  return {
    videoRef,
    error,
    qualityLevels,
    currentQuality,
    changeQuality,
    togglePlayPause,
    videoPaused,
    handleVideoTimeUpdate,
    handleVolumeChange,
    currentVolume,
    videoProgress,
    handleInputProgressBarChange,
    skipVideo5seconds,
    handleKeyDown,
    fullScreen,
    toggleFullScreen,
    videoContainerRef,
    showSetting,
    setShowSettings,
    handleVolumeMute,
    videoLoading,
    formatDuration,
    currentDuration,
    totalDuration,
  };
};

export default useControlVideo;
