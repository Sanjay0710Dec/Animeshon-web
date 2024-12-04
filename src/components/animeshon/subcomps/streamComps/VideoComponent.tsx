import React from "react";
import useControlVideo from "../../../../hooks/useControlVideo";
import useEpisodeStreamingLink from "../../../../hooks/useEpisodeStreamingLink";
import {
  ChevronsLeft,
  ChevronsRight,
  Maximize,
  Minimize,
  Pause,
  Play,
  Settings,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";

const VideoComponent: React.FC<{ src: string }> = React.memo(({ src }) => {
  const {
    loading,
    streamingErrorMessage,
    videoStreamingLink,
    setWatchCategory,
  } = useEpisodeStreamingLink(src);
  if (loading) {
    return <VideoLoadingError content="loading..." />;
  }
  if (streamingErrorMessage) {
    return <VideoLoadingError content={streamingErrorMessage} />;
  }
  return (
    <React.Fragment>
      {videoStreamingLink && (
        <VideoPlayer
          videoStreamingLink={videoStreamingLink}
          setWatchCategory={setWatchCategory}
        />
      )}
    </React.Fragment>
  );
});
export default VideoComponent;

const VideoPlayer: React.FC<{
  videoStreamingLink: string;
  setWatchCategory: React.Dispatch<React.SetStateAction<"sub" | "dub">>;
}> = React.memo(({ videoStreamingLink, setWatchCategory }) => {
  const {
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
  } = useControlVideo(videoStreamingLink);

  return (
    <section
      ref={videoContainerRef}
      id="video-player"
      tabIndex={-1}
      className={`${fullScreen ? "full-screen" : "max-w-[900px] mx-auto "}  relative text-white ${videoLoading ? "cursor-wait" : "cursor-pointer"}  w-full  mb-4 rounded-md border border-[rgba(255,255,255,0.4)]`}
      onKeyDown={handleKeyDown}
      onClick={togglePlayPause}
    >
      <video
        ref={videoRef}
        playsInline
        onTimeUpdate={handleVideoTimeUpdate}
        onLoadedData={function () {
          formatDuration(videoRef?.current?.duration || 0);
        }}
        className="border-none  text-white w-full h-full rounded-md"
      >
        Your browser does not support video tag
      </video>
      {error && (
        <div className="w-full my-3 text-xl font-semibold absolute top-1/2 text-center">
          {error !== "unknown"
            ? `${error}, refresh the page`
            : "please refresh the page"}
        </div>
      )}
      <div
        id="video-controls-container"
        className={`${videoPaused ? "opactiy-100" : "opacity-0"} absolute left-0 right-0 bottom-0 w-full px-2 py-1 z-100 ${videoLoading ? "hidden" : "block"}`}
      >
        <div id="progressbar-container" className="mb-2">
          <input
            type="range"
            className="block  w-full h-[10px] opacity-80"
            id="progres-bar"
            min={0}
            max={100}
            value={videoProgress}
            onChange={handleInputProgressBarChange}
            onClick={function (e: React.MouseEvent<HTMLInputElement>) {
              e.stopPropagation();
            }}
            onKeyDown={function (e: React.KeyboardEvent<HTMLInputElement>) {
              e.stopPropagation();
            }}
          />
        </div>

        <div
          id="controls"
          className="  flex justify-between items-center flex-row-reverse bg-[rgba(0,0,0,0.3)] p-1 rounded"
        >
          <div className="flex items-center justify-between">
            <button
              onClick={function (e: React.MouseEvent<HTMLButtonElement>) {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="h-[30px] w-[30px]"
            >
              {videoPaused ? <Play /> : <Pause />}
            </button>
            <button
              title="-5"
              className="h-[30px] w-[30px]"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                skipVideo5seconds(-5);
              }}
            >
              <ChevronsLeft />
            </button>
            <button
              title="+5"
              className="h-[30px] w-[30px]"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                skipVideo5seconds(5);
              }}
            >
              <ChevronsRight />
            </button>

            <div id="volume-container" className="flex gap-x-0.5 items-center">
              <button
                id="volume-btn"
                className="h-[30px] w-[30px]"
                onClick={function (e: React.MouseEvent<HTMLButtonElement>) {
                  e.stopPropagation();
                  handleVolumeMute();
                }}
              >
                {currentVolume > 80 ? (
                  <Volume2 />
                ) : currentVolume > 45 ? (
                  <Volume1 />
                ) : currentVolume > 0 ? (
                  <Volume />
                ) : (
                  <VolumeX />
                )}
              </button>
              <input
                type="range"
                id="volume-bar"
                min={0}
                max={100}
                value={currentVolume}
                onChange={handleVolumeChange}
                onClick={function (e: React.MouseEvent<HTMLInputElement>) {
                  e.stopPropagation();
                }}
                onKeyDown={function (e: React.KeyboardEvent<HTMLInputElement>) {
                  e.stopPropagation();
                }}
              />
            </div>
            <div id="resolution-sub-dub-speed" className="relative ml-1">
              <button
                className="h-[30px] w-[30px] flex items-center"
                onClick={function (e: React.MouseEvent<HTMLButtonElement>) {
                  e.stopPropagation();
                  setShowSettings((showSetting) => !showSetting);
                }}
              >
                <Settings />
              </button>
              {showSetting && (
                <div className="absolute h-[185px] w-[120px] -top-[210px] -right-[20px] rounded flex flex-col justify-evenly text-white border border-white bg-black">
                  <select
                    className=" text-white bg-black border-b border-white outline-none"
                    value={currentQuality}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      changeQuality(Number(e.target.value));
                    }}
                    onClick={function (e: React.MouseEvent<HTMLSelectElement>) {
                      e.stopPropagation();
                    }}
                  >
                    <option key="-1" value="-1">
                      Auto
                    </option>
                    {qualityLevels.map((quality) => (
                      <option key={quality.level} value={quality.level}>
                        {quality.height}
                      </option>
                    ))}
                  </select>

                  <button
                    className="px-3 py-2 border-b border-white"
                    onClick={function () {
                      setWatchCategory("sub");
                    }}
                  >
                    SUB
                  </button>
                  <button
                    className="px-3 py-2"
                    onClick={function () {
                      setWatchCategory("dub");
                    }}
                  >
                    DUB
                  </button>
                </div>
              )}
            </div>
            <button
              id="minimize-maximize"
              className="h-[30px] w-[30px]"
              onClick={function (e: React.MouseEvent<HTMLButtonElement>) {
                e.stopPropagation();
                toggleFullScreen();
              }}
            >
              {fullScreen ? <Minimize /> : <Maximize />}
            </button>
          </div>
          <div className="flex items-center max-w-[100px] w-full">
            {totalDuration && (
              <div
                id="duration-container"
                className="flex gap-x-[0.3rem] items-center w-full"
                onClick={function (e: React.MouseEvent<HTMLDivElement>) {
                  e.stopPropagation();
                }}
              >
                <span id="current-time" className="max-w-[40px] w-full">
                  {currentDuration}
                </span>
                <span>/</span>
                <span id="total-time">{totalDuration}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
const VideoLoadingError: React.FC<{ content: string }> = ({ content }) => {
  return (
    <section className=" h-[300px] md:h-[500px] mb-4 max-w-[900px] text-xl mx-auto  w-full  flex items-center justify-center rounded-md border border-[rgba(255,255,255,0.4)]">
      {content}
    </section>
  );
};
