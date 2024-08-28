"use client";
import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";

import ActionCard from "../global/ActionCard";
import BadgeCard from "../global/BadgeCard";
import { mBadges } from "@/config/mock";
import BadgeSlider from "./BadgeSlider";

const BadgeSection = () => {
  const [widthParent, setWidthParent] = useState(0);
  const scrollContainerRef = useRef(null);

  return (
    <section className="flex flex-col gap-16">
      <h6 className="hidden md:block">Badges</h6>

      <div className="bg-elevation-1 rounded-24 p-16 flex flex-col gap-12">
        <div className="w-full">
          <BadgeSlider />
        </div>

        <div className="flex items-center flex-col lg:flex-row gap-8 justify-between">
          <span className="mr-auto">
            <span className="text-primary font-semibold">How to Earn: </span>
            Complete the actions for the badge, no specific order needed.
          </span>
          <div className="flex items-center gap-8 w-full lg:w-fit">
            <span className="badge bg-elevation-3 w-full text-center lg:w-fit">
              1/3 Completed
            </span>
            <span className="badge bg-primary-disable/20 text-primary-hover w-full text-center lg:w-fit">
              Total Earning: 3,000
            </span>
          </div>
        </div>

        <div className="flex gap-16 flex-col md:flex-row">
          <ActionCard
            title="Action"
            text="Provide at lezNK/ETH"
            isCompleted={true}
          />
          <ActionCard
            title="Action"
            text="Provide at lezNK/ETH"
            isCompleted={false}
          />
          <ActionCard
            title="Action"
            text="Provide at least $100 Liquidity to WBTC/ETH"
            isCompleted={false}
          />
        </div>

        <div className="flex gap-4 py-8">
          <div className="bg-primary-disable h-4 w-full rounded-full"></div>
          <div className="bg-elevation-3 h-4 w-full rounded-full"></div>
          <div className="bg-elevation-3 h-4 w-full rounded-full"></div>
        </div>
      </div>

      <div className="w-full rounded-12 overflow-hidden bg-elevation-1">
        <div className="flex items-center  px-16 py-10 text-primary bg-elevation-3 border-b border-elevation text-12">
          Community Badges
        </div>
        <div className="p-16">
          <div
            className="w-full pb-24 overflow-x-auto"
            ref={scrollContainerRef}
          >
            <div className="flex items-center gap-8 flex-none md:w-fit w-full flex-wrap md:flex-nowrap justify-center">
              {mBadges.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="cursor-pointer w-180"
                    onClick={() => {
                      console.log(scrollContainerRef.current);
                      if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTo({
                          left: i * 188,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <BadgeCard
                      key={i}
                      title={item.title}
                      text={item.text}
                      actionAmount={item.actionAmount}
                      image={item.image}
                      status={item.status}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgeSection;
