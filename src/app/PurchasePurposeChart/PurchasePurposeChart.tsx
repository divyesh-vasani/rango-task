"use client";
import { ApiResponse } from "@/types/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CalendarFold } from "lucide-react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const PurchasePurposeChart = ({ kpis }: { kpis: ApiResponse }) => {
  console.log({ kpis });
  const [activeTab, setActiveTab] = useState(
    kpis?.products?.[0]?.category || ""
  );
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Rings",
        data: [1112, 1000, 1000, 2155, 1000, 1000],
        backgroundColor: "rgba(250, 204, 21, 0.4)", // yellow with 60% opacity
      },
      {
        label: "Bracelets",
        data: [1112, 1000, 1000, 2913, 1532, 1000],
        backgroundColor: "rgba(216, 180, 254, 0.4)", // purple with 60% opacity
      },
      {
        label: "Other",
        data: [3209, 1000, 1000, 3262, 1633, 1000],
        backgroundColor: "rgba(209, 213, 219, 0.4)", // gray with 60% opacity
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 14, // Font size affects overall legend size
            weight: "bold",
          },
          color: "#737373",
        },
      },
      tooltip: { enabled: true },
      datalabels: {
        color: "#000",
        anchor: "center",
        align: "center",
        font: {
          weight: "normal" as const,
        },
        formatter: (value: number) => value.toLocaleString(),
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          borderDash: [2, 2],
        },
      },
      y: {
        stacked: true,
        position: "right" as const,
        grid: {
          borderDash: [2, 2],
        },
      },
    },
  };
  return (
    <section className="mb-10">
      <div className="flex gap-4">
        <div className="flex flex-col grow">
          <div className="flex items-center gap-6 mb-4">
            <div className="shrink-0">
              <span className="text-muted text-xs font-medium mb-1 block">
                Purchase Purpose Trends
              </span>
              <h2 className="text-lg font-medium">₹90,092,090</h2>
            </div>
            <div className="grow flex gap-4 justify-end">
              <div className="custom-btn flex justify-center items-center">
                <span>
                  <CalendarFold size={16} />
                </span>
              </div>
            </div>
          </div>
          <div className="card p-4 grow">
            <Bar
              key="purchase-chart"
              data={data}
              options={options}
              className="!w-full !h-auto"
            />
          </div>
        </div>
        <div className="max-w-[300px]">
          <div className="card p-3">
            <ul className="flex bg-[#F5F5F5] rounded-[10px] p-1">
              {kpis?.products
                ?.filter(
                  (product, index, array) =>
                    array.findIndex((p) => p.category === product.category) ===
                    index
                )
                ?.slice(0, 3)
                ?.map((product, index) => {
                  return (
                    <li key={product?.id || index}>
                      <button
                        onClick={() => setActiveTab(product?.category)}
                        className={`px-4 py-1 font-medium text-sm cursor-pointer capitalize ${
                          activeTab === product?.category
                            ? "bg-white rounded-[8px]"
                            : "text-foreground"
                        }`}
                      >
                        {product?.category}
                      </button>
                    </li>
                  );
                })}
            </ul>
            <ul className="mt-4">
              {kpis?.products?.map((tabData) => {
                return (
                  activeTab === tabData?.category && (
                    <li
                      key={tabData?.id}
                      className="flex gap-2 mb-6 last:mb-0  "
                    >
                      <div className="max-w-[40px] max-h-[40px] overflow-hidden p-1 rounded-md bg-[#ececec]">
                        <img src={tabData?.thumbnail} alt={tabData?.title} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm">
                          {tabData?.title}
                        </span>
                        <span className="line-clamp-1 text-xs text-[#737373] font-medium">
                          {tabData?.description}
                        </span>
                      </div>
                    </li>
                  )
                );
              })}
              {/* {activeTab === "tab1" && <div>Content for Tab 1</div>}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && <div>Content for Tab 3</div>} */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchasePurposeChart;
