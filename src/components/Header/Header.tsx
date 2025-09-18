import { Dot, Share } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center gap-2">
        <div className="text-2xl shrink-0 font-semibold mt-3.5 mb-[18px]">
          Product Insights
        </div>
        <div className="grow">
          <ul className="flex justify-end items-center gap-4">
            <li className="flex items-center">
              <span><Dot size={26} fill="#16A34A" stroke="#16A34A"/></span>
              <span className="text-success font-medium text-xs ">
                Updated on 22 Oct 2024, 12:23 IST
              </span>
            </li>
            <li>
              <select name="demo" id="demo" className="custom-btn font-medium text-xs">
                <option value="one">All India Stores</option>
                <option value="teo">All India Two</option>
                <option value="three">All India three</option>
              </select>
            </li>
            <li>
              <button className="custom-btn flex items-center gap-2">
                <span className="font-medium text-sm">Export Data</span>
                <span><Share size={16}/></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
