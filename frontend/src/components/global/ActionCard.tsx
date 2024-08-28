import React from "react";

type Props = {
  title: string;
  text: string;
  isCompleted: boolean;
};
const ActionCard: React.FC<Props> = ({ title, text, isCompleted }) => {
  return (
    <div className="w-full rounded-12 overflow-hidden bg-elevation-2">
      <div className="flex items-center justify-between px-16 py-6 bg-elevation-3 border-b border-elevation">
        <span className="font-medium">{title}</span>
        {isCompleted && <span className="badge bg-status-success/10 text-status-success">Completed</span>}
      </div>
      <div className="p-16 pt-8">{text}</div>
    </div>
  );
};

export default ActionCard;
