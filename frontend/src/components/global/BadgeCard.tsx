import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  actionAmount: number;
  image: string;
  text: string;
  status: boolean;
};

const BadgeCard: React.FC<Props> = ({ title, actionAmount, image, text, status }) => {
  return (
    <div
      className={`w-full rounded-12 overflow-hidden bg-elevation-3 text-12 font-medium ${
        status ? "border border-status-success" : ""
      }`}
    >
      <div className="flex items-center text-primary p-8 bg-elevation-2">
        {title}
        {actionAmount > 0 && (
          <span className="ml-auto text-secondary">
            {actionAmount} Action{actionAmount > 1 ? "s" : ""}
          </span>
        )}
      </div>
      <div className={`flex items-center justify-center p-24`}>
        <Image
          src={image}
          alt=""
          width={64}
          height={64}
          draggable={false}
          className={`w-64 h-64 rounded-full flex-none select-none lazy-box ${
            status ? "grayscale-0 border-4 border-status-success" : "grayscale"
          }`}
        ></Image>
      </div>
      <div className="bg-status-success/10 text-status-success p-8 text-center">{text}</div>
    </div>
  );
};

export default BadgeCard;
