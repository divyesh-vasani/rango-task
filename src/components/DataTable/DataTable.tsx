"use client";

import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ApiResponse } from "../../types/api";
import {
  CalendarFold,
  ChevronsDown,
  ChevronsUp,
  CircleMinus,
  MapPin,
  MessageCircleWarning,
  Search,
} from "lucide-react";
import { useState } from "react";
import Modal from "../common/Modal/Modal";

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

interface DataTableProps {
  kpis: ApiResponse;
}

const DataTable = ({ kpis }: DataTableProps) => {
  const [quickFilterText, setQuickFilterText] = useState("");

  const columnDefs = [
    {
      headerName: "Product",
      field: "title",
      flex: 2,
      cellRenderer: (params: any) => {
        return (
          <div className="flex items-center gap-3">
            <div className="max-w-9 max-h-9 overflow-hidden p-1 rounded-md bg-[#ececec]">
              <img src={params.data.thumbnail} alt={params.data.title} />
            </div>
            <span className="font-medium text-sm">{params.data.title}</span>
          </div>
        );
      },
    },
    { headerName: "Feedback", field: "description", flex: 2 },
    { headerName: "Available in #Stores", field: "stock", flex: 1 },
    {
      headerName: "Sentiment",
      field: "sentiment",
      flex: 1,
      cellRenderer: (params: any) => {
        const sentiments = ["Positive", "Neutral", "Negative"];
        const colors = [
          "text-green-600 bg-[#DCFCE7] py-0.5 px-2 rounded-lg text-xs font-medium",
          "text-[#CA8A04] bg-[#FEF9C3] py-0.5 px-2 rounded-lg text-xs font-medium",
          "text-[#EA580C] bg-[#FFEDD5] py-0.5 px-2 rounded-lg text-xs font-medium",
        ];
        const randomSentiment = sentiments[params.node.rowIndex % 3];
        const colorClass = colors[params.node.rowIndex % 3];
        return (
          <div className={`${colorClass} flex items-center gap-1`}>
            <span>
              {randomSentiment === "Positive" && <ChevronsUp size={12} />}
              {randomSentiment === "Negative" && <ChevronsDown size={14} />}
              {randomSentiment === "Neutral" && <CircleMinus size={14} />}
            </span>
            <span>{randomSentiment}</span>
          </div>
        );
      },
    },
    {
      headerName: "Issue, If Any",
      field: "issue",
      flex: 1,
      cellRenderer: (params: any) => {
        const issues = [
          "Inventory Issue",
          "Seasonal",
          "Inventory shortage",
          "Discontinued SKU",
        ];
        const issue = issues[params.node.rowIndex % 4];
        return (
          <div className="border border-[#E5E5E5] text-xs font-semibold px-2 py-1 rounded-lg">
            <span>{issue}</span>
          </div>
        );
      },
    },
  ];

  const rowData =
    kpis?.products?.slice(0, 6).map((product) => ({
      ...product,
      description: "Love the cost to value of this",
    })) || [];

  return (
    <section className="mb-10">
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
          <div className="flex relative items-center gap-4 max-w-[345px] w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Products & Services"
              value={quickFilterText}
              onChange={(e) => setQuickFilterText(e.target.value)}
              className="pl-10 pr-3 py-2 border shadow-xs bg-white border-[#E5E5E5] rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="custom-btn flex items-center gap-1.5">
            <Modal
              buttonIcon={<MapPin size={14} />}
              title="Shadcn modal"
              buttonValue="Location"
            />
          </div>
          <div className="custom-btn flex items-center gap-1.5">
            <span>
              <MessageCircleWarning size={16} />
            </span>
            <span className="font-medium text-sm">Issue Type</span>
            <span className="bg-blue-700 text-xs font-semibold flex w-5 h-4 justify-center items-center rounded-full text-white">
              8
            </span>
          </div>
          <div className="custom-btn flex justify-center items-center">
            <span>
              <CalendarFold size={16} />
            </span>
          </div>
        </div>
      </div>
      <div className="card p-4" style={{ height: "auto", width: "100%" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          domLayout="autoHeight"
          rowHeight={50}
          className="custom-ag-grid"
          quickFilterText={quickFilterText}
        />
      </div>
    </section>
  );
};

export default DataTable;
