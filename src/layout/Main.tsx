import React from "react";
import { v4 } from "uuid";

const videos = [
  {
    id: v4(),
    thumb: "person",
    title: "Video 1",
    channel: "Channel 1",
    views: "504 mil",
    date: "5 dias",
  },
  {
    id: v4(),
    thumb: "person",
    title: "Video 2",
    channel: "Channel 2",
    views: "1,1 mi",
    date: "8 dias",
  },
  {
    id: v4(),
    thumb: "person",
    title: "Video 3",
    channel: "Channel 3",
    views: "142 mil",
    date: "6 horas",
  },
  {
    id: v4(),
    thumb: "person",
    title: "Video 4",
    channel: "Channel 4",
    views: "873 mil",
    date: "4 dias",
  },
];

export const Main = () => {
  return (
    <div className="overflow-y-auto pt-24 pb-16 px-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 main-container">
      {videos.map((video) => (
        <div className="rounded-xl cursor-pointer mb-4" key={video.id}>
          <div className="bg-gray-300 rounded-xl hover:rounded-none w-full h-48"></div>
          <div className="flex gap-2 pt-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined">{video.thumb}</span>
            </div>
            <div>
              <h2 className="font-semibold text-xl">{video.title}</h2>
              <div className="text-white/50 text-sm flex flex-col">
                <span className=" hover:text-white ">{video.channel}</span>
                <span>
                  {video.views} visualizações - há {video.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
