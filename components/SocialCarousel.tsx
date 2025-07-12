import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Twitter, ExternalLink } from "lucide-react";

// Add type declaration for Twitter widget
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const TwitterEmbedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [embedsLoaded, setEmbedsLoaded] = useState(false);

  // Updated tweet URLs from user, converted to twitter.com and deduplicated
  const tweetUrls = [
    "https://twitter.com/shabbiryk/status/1856301837470536169",
    "https://twitter.com/shabbiryk/status/1899980423201251414",
    "https://twitter.com/shabbiryk/status/1854366722402533525",
    "https://twitter.com/shabbiryk/status/1901716090927055297",
    "https://twitter.com/shabbiryk/status/1854846723946168443",
    "https://twitter.com/donjohnsonsays/status/1935596149592985674",
    "https://twitter.com/shabbiryk/status/1921853670519414931",
    "https://twitter.com/majumderdibyo/status/1915677723931877425",
    "https://twitter.com/shabbiryk/status/1915137344619110410",
    "https://twitter.com/shabbiryk/status/1910721876969873507",
    "https://twitter.com/shabbiryk/status/1896626031999742093",
    "https://twitter.com/shabbiryk/status/1832127102453416066",
    "https://twitter.com/denxzo/status/1896246395012857951",
    "https://twitter.com/shabbiryk/status/1893669573624201323",
    "https://twitter.com/the_zo_world/status/1876969634148003936",
    "https://twitter.com/web3conf_india/status/1864591217213747524",
    "https://twitter.com/shabbiryk/status/1843143593688772763",
    "https://twitter.com/shabbiryk/status/1836124569121554602",
    "https://twitter.com/shabbiryk/status/1837403321893900371",
    "https://twitter.com/shabbiryk/status/1835225669636440254",
    "https://twitter.com/shabbiryk/status/1797706818589983207",
    "https://twitter.com/shabbiryk/status/1751534672549716387",
    "https://twitter.com/shabbiryk/status/1837787752433438987",
    "https://twitter.com/rayaa009/status/1855301184686625183",
    "https://twitter.com/shabbiryk/status/1797467905183138141",
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tweetUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tweetUrls.length) % tweetUrls.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 8000); // Longer delay for reading tweets
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  // Load Twitter widgets script
  useEffect(() => {
    const loadTwitterWidgets = () => {
      if (window.twttr) {
        window.twttr.widgets.load();
        setEmbedsLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        setEmbedsLoaded(true);
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    loadTwitterWidgets();
  }, []);

  // Reload widgets when slide changes
  useEffect(() => {
    if (embedsLoaded && window.twttr) {
      const timer = setTimeout(() => {
        window.twttr.widgets.load();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, embedsLoaded]);

  const TwitterEmbed = ({
    url,
    isActive,
  }: {
    url: string;
    isActive: boolean;
  }) => {
    const tweetId = url.split("/").pop()?.split("?")[0];
    const username = url.split("/")[3];
    return (
      <div
        className={`w-full max-w-lg mx-auto transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Loading placeholder */}
          {!embedsLoaded && (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading tweet...</p>
            </div>
          )}
          {/* Twitter embed */}
          <div className="p-4">
            <blockquote
              className="twitter-tweet"
              data-theme="light"
              data-dnt="true"
            >
              <a href={url}></a>
            </blockquote>
          </div>
          {/* View on Twitter button */}
          <div className="px-4 pb-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Twitter
            </a>
          </div>
        </div>
      </div>
    );
  };

  const getTweetPreview = (url: string) => {
    const tweetId = url.split("/").pop()?.split("?")[0];
    const username = url.split("/")[3];
    return { tweetId, username };
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-gray-900 mb-2">Featured Tweets</h1>
        <p className="text-gray-600">
          Curated collection of top tweets from the community
        </p>
      </div>
      {/* Carousel Container */}
      <div className="relative">
        {/* Main Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div className="w-full flex-shrink-0 px-4 py-6">
            <TwitterEmbed url={tweetUrls[currentIndex]} isActive={true} />
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-105 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-105 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {tweetUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              isAutoPlaying
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
          </button>
        </div>
      </div>
      {/* Tweet List */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
          <Twitter className="w-6 h-6 text-blue-400 mr-2" />
          All Featured Tweets
        </h2>
        <div className="space-y-3">
          {tweetUrls.map((url, index) => {
            const { tweetId, username } = getTweetPreview(url);
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${
                  index === currentIndex
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm mr-3">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="text-gray-900">@{username}</p>
                    </div>
                    <p className="text-sm text-gray-500">Tweet ID: {tweetId}</p>
                    <p className="text-sm text-gray-600">
                      Click to view this tweet in the carousel
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">
                    {index + 1} / {tweetUrls.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TwitterEmbedCarousel;
