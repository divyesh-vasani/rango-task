"use client";
import { useState } from "react";
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
import { Bar } from "react-chartjs-2";
import Modal from "../common/Modal/Modal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const FunnelChartEarrings = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof funnelData>("rings");

  const funnelData = {
    rings: [
      {
        stage: "Products Shown",
        value: 120,
        percentage: 100,
        dropoff: 0,
        dropoffReason: null,
        color: "#012F48",
      },
      {
        stage: "Shortlisted",
        value: 95,
        percentage: 79,
        dropoff: 21,
        dropoffReason: "Inventory Issue",
        color: "#012F48",
      },
      {
        stage: "Finalised",
        value: 70,
        percentage: 74,
        dropoff: 26,
        dropoffReason: "Design Preference",
        color: "#012F48",
      },
      {
        stage: "Checkout",
        value: 50,
        percentage: 71,
        dropoff: 29,
        dropoffReason: "Size/Fit Issue",
        color: "#012F48",
      },
      {
        stage: "Net Revenue",
        value: 45,
        percentage: 90,
        dropoff: 10,
        dropoffReason: "Refunds/Returns",
        color: "#16A34A",
      },
    ],
    bracelet: [
      {
        stage: "Products Shown",
        value: 100,
        percentage: 100,
        dropoff: 0,
        dropoffReason: null,
        color: "#012F48",
      },
      {
        stage: "Shortlisted",
        value: 80,
        percentage: 80,
        dropoff: 20,
        dropoffReason: "Inventory Issue",
        color: "#012F48",
      },
      {
        stage: "Finalised",
        value: 60,
        percentage: 75,
        dropoff: 25,
        dropoffReason: "Style Preference",
        color: "#012F48",
      },
      {
        stage: "Checkout",
        value: 38,
        percentage: 63,
        dropoff: 37,
        dropoffReason: "Price Concern",
        color: "#012F48",
      },
      {
        stage: "Net Revenue",
        value: 35,
        percentage: 92,
        dropoff: 8,
        dropoffReason: "Refunds/Returns",
        color: "#16A34A",
      },
    ],
    pendant: [
      {
        stage: "Products Shown",
        value: 140,
        percentage: 100,
        dropoff: 0,
        dropoffReason: null,
        color: "#012F48",
      },
      {
        stage: "Shortlisted",
        value: 110,
        percentage: 79,
        dropoff: 21,
        dropoffReason: "Inventory Issue",
        color: "#012F48",
      },
      {
        stage: "Finalised",
        value: 82,
        percentage: 75,
        dropoff: 25,
        dropoffReason: "Design Issue",
        color: "#012F48",
      },
      {
        stage: "Checkout",
        value: 60,
        percentage: 73,
        dropoff: 27,
        dropoffReason: "Payment Abandonment",
        color: "#012F48",
      },
      {
        stage: "Net Revenue",
        value: 55,
        percentage: 92,
        dropoff: 8,
        dropoffReason: "Refunds/Returns",
        color: "#16A34A",
      },
    ],
    chain: [
      {
        stage: "Products Shown",
        value: 90,
        percentage: 100,
        dropoff: 0,
        dropoffReason: null,
        color: "#012F48",
      },
      {
        stage: "Shortlisted",
        value: 65,
        percentage: 72,
        dropoff: 28,
        dropoffReason: "Inventory Issue",
        color: "#012F48",
      },
      {
        stage: "Finalised",
        value: 45,
        percentage: 69,
        dropoff: 31,
        dropoffReason: "Style Preference",
        color: "#012F48",
      },
      {
        stage: "Checkout",
        value: 30,
        percentage: 67,
        dropoff: 33,
        dropoffReason: "Price Issue",
        color: "#012F48",
      },
      {
        stage: "Net Revenue",
        value: 28,
        percentage: 93,
        dropoff: 7,
        dropoffReason: "Refunds/Returns",
        color: "#16A34A",
      },
    ],
    bangles: [
      {
        stage: "Products Shown",
        value: 130,
        percentage: 100,
        dropoff: 0,
        dropoffReason: null,
        color: "#012F48",
      },
      {
        stage: "Shortlisted",
        value: 100,
        percentage: 77,
        dropoff: 23,
        dropoffReason: "Inventory Issue",
        color: "#012F48",
      },
      {
        stage: "Finalised",
        value: 72,
        percentage: 72,
        dropoff: 28,
        dropoffReason: "Design Issue",
        color: "#012F48",
      },
      {
        stage: "Checkout",
        value: 50,
        percentage: 69,
        dropoff: 31,
        dropoffReason: "Size/Fit Issue",
        color: "#012F48",
      },
      {
        stage: "Net Revenue",
        value: 46,
        percentage: 92,
        dropoff: 8,
        dropoffReason: "Refunds/Returns",
        color: "#16A34A",
      },
    ],
    silver925: [
      {
        stage: "Products Shown",
        value: 160,
        percentage: 100,
        dropoff: 0,
        dropoffReason: null,
        color: "#012F48",
      },
      {
        stage: "Shortlisted",
        value: 120,
        percentage: 75,
        dropoff: 25,
        dropoffReason: "Inventory Issue",
        color: "#012F48",
      },
      {
        stage: "Finalised",
        value: 88,
        percentage: 73,
        dropoff: 27,
        dropoffReason: "Design Preference",
        color: "#012F48",
      },
      {
        stage: "Checkout",
        value: 62,
        percentage: 70,
        dropoff: 30,
        dropoffReason: "Price Issue",
        color: "#012F48",
      },
      {
        stage: "Net Revenue",
        value: 58,
        percentage: 94,
        dropoff: 6,
        dropoffReason: "Refunds/Returns",
        color: "#16A34A",
      },
    ],
  };

  const currentData = funnelData[activeTab];

  const data = {
    labels: currentData.map((item) => item.stage),
    datasets: [
      {
        label: "Main Stage",
        data: currentData.map((item) => item.percentage),
        backgroundColor: currentData.map((item) => item.color),
        borderColor: currentData.map((item) => item.color),
        borderWidth: 0,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
        maxBarThickness: 20,
      },
      {
        label: "Dropoff",
        data: currentData.map((item) => Math.abs(item.dropoff)),
        backgroundColor: currentData.map((item) =>
          item.dropoff > 0
            ? "rgba(239, 68, 68, 0.7)"
            : item.dropoff < 0
            ? "rgba(34, 197, 94, 0.7)"
            : "transparent"
        ),
        borderColor: currentData.map((item) =>
          item.dropoff > 0
            ? "#ef4444"
            : item.dropoff < 0
            ? "#22c55e"
            : "transparent"
        ),
        borderWidth: 0,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
        maxBarThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (context) => currentData[context[0].dataIndex].stage,
          label: (context) => {
            const index = context.dataIndex;
            const item = currentData[index];
            const datasetLabel = context.dataset.label;

            if (datasetLabel === "Main Stage") {
              return [`${item.value} Products`, `${item.percentage}%`];
            } else if (datasetLabel === "Dropoff" && item.dropoff !== 0) {
              return [
                `${Math.abs(item.dropoff)}% ${
                  item.dropoff > 0 ? "dropoff" : "recovery"
                }`,
                `Reason: ${item.dropoffReason}`,
              ];
            }
            return "";
          },
        },
      },
      datalabels: {
        color: "#111827",
        anchor: "center",
        align: "right",
        clamp: true,
        offset: 12,
        font: { weight: "bold", size: 12 },
        formatter: (value, context) => {
          const datasetIndex = context.datasetIndex;
          const index = context.dataIndex;
          const item = currentData[index];

          if (datasetIndex === 0 && value > 0) return `${item.percentage}%`;
          if (datasetIndex === 1 && value > 0)
            return item.dropoff > 0
              ? `${item.dropoff}% dropoff\n${item.dropoffReason}`
              : `${Math.abs(item.dropoff)}% recovery`;
          return "";
        },
        textAlign: "center",
      },
    },
    scales: {
      x: { stacked: true, grid: { display: false }, ticks: { display: false } },
      y: {
        stacked: true,
        beginAtZero: true,
        min: 0,
        max: 100,
        reverse: true,
        position: "left",
        grid: { color: "#e5e7eb" },
        ticks: {
          callback: function (value) {
            const currencyValues = [
              "₹0",
              "₹25K",
              "₹50K",
              "₹75K",
              "₹100K",
              "₹125K",
              "₹150K",
              "₹175K",
              "₹200K",
            ];
            const index = Math.floor(
              (value / 100) * (currencyValues.length - 1)
            );
            return currencyValues[index] || "";
          },
          color: "#6b7280",
          font: { size: 10 },
        },
      },
    },
  };

  const gradientPlugin = {
    id: "gradientPlugin",
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { top },
        scales: { y },
      } = chart;
      ctx.save();
      const meta = chart.getDatasetMeta(0);
      meta.data.forEach((bar, index) => {
        if (index < meta.data.length - 1) {
          const curr = bar;
          const next = meta.data[index + 1];
          const currValue = currentData[index].percentage;
          const nextValue = currentData[index + 1].percentage;

          const x1Left = curr.x - curr.width / 2;
          const x1Right = curr.x + curr.width / 2;
          const y1 = y.getPixelForValue(currValue);

          const x2Left = next.x - next.width / 2;
          const x2Right = next.x + next.width / 2;
          const y2 = y.getPixelForValue(nextValue);

          const gradient = ctx.createLinearGradient(x1Left, y1, x2Right, y2);
          gradient.addColorStop(0, "rgba(1, 47, 72, 0.3)");
          gradient.addColorStop(1, "rgba(1, 47, 72, 0.1)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(x1Left, top);
          ctx.lineTo(x1Left, y1);
          ctx.lineTo(x2Left, y2);
          ctx.lineTo(x2Left, top);
          ctx.closePath();
          ctx.fill();
        }
      });
      ctx.restore();
    },
  };

  return (
    <section className="mb-20">
      <div className="flex items-center gap-6 mb-4">
        <div className="shrink-0">
          <span className="text-[#737373] text-xs font-medium mb-1 block">
            Explore by Products
          </span>
          <h2 className="text-lg font-medium">
            20 products cause 10% revenue loss from inventory issues.
          </h2>
        </div>
        <div className="grow flex gap-4 justify-end">
          <ul className="flex bg-[#F5F5F5] rounded-[10px] p-1">
            {Object.keys(funnelData).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab as keyof typeof funnelData)}
                  className={`px-4 py-1 font-medium text-sm cursor-pointer capitalize rounded-[8px] ${
                    activeTab === tab
                      ? "bg-white text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <div className="custom-btn flex justify-center items-center ml-4">
            <Modal buttonIcon={<CalendarFold size={16} />} title="Shadcn modal"/>
          </div>
        </div>
      </div>

      <div className="card p-4">
        {/* Top Labels */}
        <div className="flex justify-evenly mb-4 px-8">
          {currentData.map((item, index) => (
            <div key={index} className="text-center" style={{ width: "160px" }}>
              <div className="text-sm text-gray-600 font-medium mb-1">
                {item.stage}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {item.value}
                {item.stage !== "Net Revenue" && (
                  <span className="text-sm font-normal text-gray-500 ml-1">
                    Products
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ height: "400px" }}>
          <Bar data={data} options={options} plugins={[gradientPlugin]} />
        </div>
      </div>
    </section>
  );
};

export default FunnelChartEarrings;
