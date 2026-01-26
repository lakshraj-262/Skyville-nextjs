"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import Heading from "./Heading";


const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCxeabT6dVsbjKoZa8W1Cq0g";

// Memoized VideoCard component
const VideoCard = memo(({ video, index, isSelected, onClick }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(video)}
      className={`group cursor-pointer rounded-xl overflow-hidden bg-n-7 border border-[#26242C] transition-transform duration-300 lg:hover:scale-105 ${isSelected ? "ring-2 ring-color-1" : ""
        }`}
    >
      <div className="relative aspect-video">
       <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover"
        width={300}
        height={300}
        />
        <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white fill-white" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-color-2 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-sm text-n-3 line-clamp-2 mb-2">{video.description}</p>
        <div className="flex items-center gap-4 text-xs text-n-4">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(video.date)}</span>
        </div>
      </div>
    </motion.div>
  );
});

VideoCard.displayName = "VideoCard";

// Memoized LoadMoreButton component
const LoadMoreButton = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-white text-color-1 px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out transform lg:hover:bg-color-1 lg:hover:text-white lg:hover:scale-105"
  >
    Load More
  </button>
));

LoadMoreButton.displayName = "LoadMoreButton";

export default function YouTube() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(3);

  // Fetch videos with caching
  const fetchVideos = useCallback(async () => {
    const cachedVideos = localStorage.getItem("youtubeVideos");
    const cacheTimestamp = localStorage.getItem("youtubeVideosTimestamp");
    const currentTime = Date.now();

    if (
      cachedVideos &&
      cacheTimestamp &&
      currentTime - parseInt(cacheTimestamp) < 10 * 60 * 1000
    ) {
      setVideos(JSON.parse(cachedVideos));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
      );
      const data = await res.json();

      const formattedVideos = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        date: item.snippet.publishedAt,
      }));

      localStorage.setItem("youtubeVideos", JSON.stringify(formattedVideos));
      localStorage.setItem("youtubeVideosTimestamp", currentTime.toString());

      setVideos(formattedVideos);
      if (!selectedVideo && formattedVideos.length > 0) {
        setSelectedVideo(formattedVideos[0]);
      }
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("Failed to load videos. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [selectedVideo]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleVideoClick = useCallback((video) => {
    setSelectedVideo(video);
    window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank");
  }, []);

  const handleLoadMore = useCallback(() => {
    setDisplayCount((prev) => prev + 3);
  }, []);

  return (
    <div className="container relative">
      <div className="max-w-7xl mx-auto">
        <Heading title="Peek Into the Fun!" className="h1 text-center" />

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-n-1/20 border-t-color-1 rounded-full animate-spin" />
              <p className="text-n-1/80 font-medium">Loading...</p>
            </div>
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-color-3 mb-8"
          >
            {error}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {videos.slice(0, displayCount).map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                isSelected={selectedVideo?.id === video.id}
                onClick={handleVideoClick}
              />
            ))}
          </AnimatePresence>
        </div>

        {displayCount < videos.length && (
          <div className="text-center mt-6">
            <LoadMoreButton onClick={handleLoadMore} />
          </div>
        )}
      </div>
    </div>
  );
}
