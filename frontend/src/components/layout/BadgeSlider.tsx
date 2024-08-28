import { useRef, useState, useEffect } from "react";
import { StackedCarousel } from "react-stacked-center-carousel";

import { mBadges } from "@/config/mock";
import IconBack from "@/assets/icons/IconBack";
import IconNext from "@/assets/icons/IconNext";

import BadgeCard from "../global/BadgeCard";

const BadgeSlider = () => {
  const [widthParent, setWidthParent] = useState(0);

  const refParent = useRef<any>(null);
  const refCarousel = useRef<any>(null);
  useEffect(() => {
    setWidthParent(refParent.current.offsetWidth);
    return () => {};
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidthParent(refParent.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [refParent]);
  return (
    <div className="flex w-full">
      <div
        className="bg-elevation-3 rounded-full p-12 cursor-pointer flex items-center"
        onClick={() => refCarousel?.current.goBack()}
      >
        <IconBack />
      </div>
      <div className="w-full px-16" ref={refParent}>
        <StackedCarousel
          ref={refCarousel}
          slideComponent={Card}
          slideWidth={180}
          carouselWidth={widthParent - 32}
          data={mBadges}
          currentVisibleSlide={Math.max(
            Math.floor(widthParent / 300) * 2 - 1,
            1
          )}
          maxVisibleSlide={9}
          useGrabCursor
        />
      </div>
      <div
        className="bg-elevation-3 rounded-full p-12 cursor-pointer flex items-center"
        onClick={() => refCarousel?.current.goNext()}
      >
        <IconNext />
      </div>
    </div>
  );
};

export const Card = (props: any) => {
  const { data, dataIndex, swipeTo, slideIndex } = props;
  const item = data[dataIndex];
  const isCenterSlide = props.isCenterSlide;

  const handleCardClick = () => {
    swipeTo(slideIndex);
  };

  return (
    <div
      className="select-none flex flex-col gap-8 cursor-pointer "
      // onClick={handleCardClick}
    >
      <div className="bg-elevation-1">
        <div className="content w-180">
          <BadgeCard
            title={item.title}
            text={item.text}
            actionAmount={item.actionAmount}
            image={item.image}
            status={item.status}
          />
        </div>
      </div>
      <div className="bg-elevation-1 rounded-12">
        <div className="content">
          {isCenterSlide ? (
            <div className="text-center bg-elevation-2 p-6 rounded-12 text-12">
              <div className="text-primary">Reward Details</div>
              <span>Liquidity Provision to ETH/USDC</span>
            </div>
          ) : (
            <div className="text-center bg-elevation-2 flex flex-col gap-6 p-10 rounded-12">
              <div className="w-full bg-secondary/60 h-8 rounded-full"></div>
              <div className="flex items-center gap-6">
                <div className="w-full bg-secondary/60 h-8 rounded-full"></div>
                <div className="w-full bg-secondary/60 h-8 rounded-full"></div>
                <div className="w-full bg-secondary/60 h-8 rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BadgeSlider;
