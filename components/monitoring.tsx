import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Card } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export default function Monitoring() {
  return (
    <div className="flex gap-4">
      <Card className="p-4 w-[70%]">
        <h1 className="text-xl font-semibold">Monitoring</h1>
        <div className="flex items-center mt-1">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2" />
          <p className="text-sm text-muted-foreground">Constrution site 4</p>
        </div>
        <div className="pt-4">
          <div className="rounded-lg overflow-hidden relative">
            <div className="absolute py-1 px-3 bg-slate-700 bg-opacity-60 rounded-2xl flex items-center mt-2 ml-2">
              <span className="flex h-2 w-2 rounded-full bg-red-600 mr-1.5" />
              <p className="text-xs">Live</p>
            </div>
            <video width="100%" autoPlay loop muted>
              <source src="/main.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
            <h1 className="text-md font-semibold">Suspicious activities</h1>
            <ScrollArea className="mt-2">
              <div className="flex gap-4">
                {["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"].map(
                  (item) => (
                    <div>
                      <div className="relative h-[100px] w-[150px] rounded-sm overflow-hidden">
                        <Image src={item} fill objectFit="cover" />
                      </div>
                      <p className="text-xs mt-1 ">30 mins ago</p>
                    </div>
                  )
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </Card>
      <Card className="flex-1 w-[30%] p-4 ">
        <h1 className="text-xl font-semibold">Other monitors</h1>
        <div className="flex items-center mb-4 mt-1">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2" />
          <p className="text-sm text-muted-foreground">5 active monitors</p>
        </div>
        <div className="flex flex-col gap-2">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <button
              key={item}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
              )}
            >
              <div className="flex gap-4">
                <div className="rounded-sm overflow-hidden w-[80%]">
                  <video width="100%" autoPlay loop muted>
                    <source src="/main.mp4" type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{`Monitor ${
                        item + 1
                      }`}</div>
                      <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Your browser does not support the video tag.
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
