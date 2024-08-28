import React from "react";
import { useQuery } from "@apollo/client";

import IconLink from "@/assets/icons/IconLink";
import IconTransaction from "@/assets/icons/IconTransaction";
import IconBridged from "@/assets/icons/IconBridged";
import { GET_ACTIVITY } from "@/config/constants";
import {
  formattedDate,
  formattedTime,
  formattedTxID,
} from "@/utils/format.util";
import toast from "react-hot-toast";

const LastActivitySection = () => {
  const { loading, error, data } = useQuery(GET_ACTIVITY, {
    pollInterval: 5000,
  });

  return (
    <section className="flex flex-col gap-16">
      <h6 className="hidden md:block">Last Activities</h6>
      <table className="w-full rounded-12 overflow-hidden hidden md:inline-table">
        <thead>
          <tr className="bg-elevation-3 text-left border-b border-elevation ">
            <th className="w-1/4 px-24 py-12 text-12 font-medium">
              Activities
            </th>
            <th className="w-1/4 px-24 py-12 text-12 font-medium">Points</th>
            <th className="w-1/4 px-24 py-12 text-12 font-medium">Date</th>
            <th className="w-1/4 px-24 py-12 text-12 font-medium">TXID</th>
          </tr>
        </thead>
        <tbody>
          {loading || error ? (
            <>
              {[0, 1, 2, 3, 4, 5].map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="odd:bg-elevation-1 even:bg-elevation-2 border-y border-elevation"
                  >
                    <td className="px-24 py-16">
                      <div className="w-80 h-20 lazy-box rounded-full"></div>
                    </td>
                    <td className="px-24 py-16">
                      <div className="w-40 h-20 lazy-box rounded-full"></div>
                    </td>
                    <td className="px-24 py-16">
                      <div className="w-140 h-20 lazy-box rounded-full"></div>
                    </td>
                    <td className="px-24 py-16">
                      <div className="w-140 h-20 lazy-box rounded-full"></div>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              {data?.logs?.map((activity, i) => {
                return (
                  <tr
                    key={i}
                    className="odd:bg-elevation-1 even:bg-elevation-2 border-y border-elevation"
                  >
                    <td className="px-24 py-16 text-primary">
                      <div className="flex items-center gap-4">
                        {activity.type === "Transaction" ? (
                          <IconTransaction />
                        ) : (
                          <IconBridged />
                        )}
                        {activity.type}
                      </div>
                    </td>
                    <td className="px-24 py-16">
                      <span className="badge text-status-success bg-status-success/10">
                        +{activity.point}
                      </span>
                    </td>
                    <td className="px-24 py-16">
                      <div className="w-full flex items-center gap-4">
                        <span>
                          {formattedDate(new Date(activity.block_timestamp))}
                        </span>
                        <span className="badge bg-elevation-3">
                          {formattedTime(new Date(activity.block_timestamp))}
                        </span>
                      </div>
                    </td>
                    <td className="px-24 py-16">
                      <div className="w-full flex items-center gap-8">
                        <span>{formattedTxID(activity.transaction_hash)}</span>
                        <span
                          className="badge bg-elevation-3 cursor-pointer u-transition-color hover:bg-elevation"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              activity.transaction_hash
                            ).then(()=> {
                              toast.success('Copied successfully')
                            }).catch(()=> {
                              toast.error('Copy action failed')
                            })
                          }}
                        >
                          Copy
                        </span>
                        <a
                          href={`https://etherscan.io/tx/${activity.transaction_hash}`}
                          target="_blank"
                          className="ml-auto cursor-pointer hover:text-primary u-transition-color"
                        >
                          <IconLink />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
      <div className="flex flex-col rounded-12 overflow-hidden md:hidden">
        {loading || error ? (
          <>
            {[0, 1, 2, 3, 4, 5].map((item, i) => {
              return (
                <div
                  key={i}
                  className="odd:bg-elevation-1 even:bg-elevation-2 border-y border-elevation flex flex-col gap-12 p-12"
                >
                  <div className="flex items-center gap-8 justify-between">
                    <div className="w-80 h-20 lazy-box rounded-full"></div>
                    <div className="w-40 h-20 lazy-box rounded-full"></div>
                  </div>
                  <div className="w-140 h-20 lazy-box rounded-full"></div>
                  <div className="flex justify-end">
                    <div className="w-140 h-16 lazy-box rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {data?.logs?.map((activity, i) => {
              return (
                <div
                  key={i}
                  className="odd:bg-elevation-1 even:bg-elevation-2 border-y border-elevation flex flex-col gap-8 p-12"
                >
                  <div className="flex items-center gap-8 justify-between">
                    <div className="flex items-center gap-4 text-primary">
                      {activity.type === "Transaction" ? (
                        <IconTransaction />
                      ) : (
                        <IconBridged />
                      )}
                      {activity.type}
                    </div>
                    <span className="badge text-status-success bg-status-success/10">
                      +{activity.point}
                    </span>
                  </div>
                  <div className="flex gap-8 items-center">
                    <span>{formattedTxID(activity.transaction_hash)}</span>
                    <span
                      className="badge bg-elevation-3 cursor-pointer u-transition-color hover:bg-elevation"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          activity.transaction_hash
                        );
                      }}
                    >
                      Copy
                    </span>
                  </div>
                  <div className="text-right text-12 text-secondary/40">
                    {formattedDate(new Date(activity.block_timestamp))}{" "}
                    {formattedTime(new Date(activity.block_timestamp))}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default LastActivitySection;
