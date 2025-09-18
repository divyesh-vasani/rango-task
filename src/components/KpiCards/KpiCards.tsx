import { Product, ApiResponse } from "../../types/api";
import { TrendingUp } from "lucide-react";

// Server Component - no useEffect needed
const KpiCards = ({ kpis }: { kpis: ApiResponse }) => {
  
  const totalProductsShown = kpis?.products?.length;
  const totalSold =
    kpis?.products?.reduce(
      (sum: number, product: Product) => sum + product.stock,
      0
    ) || 0;
  const conversionRate = ((totalSold / totalProductsShown) * 100).toFixed(1);
  const totalRevenue =
    kpis?.products?.reduce(
      (sum: number, product: Product) => sum + product.price * product.stock,
      0
    ) || 0;
  const aov = (totalRevenue / totalProductsShown).toFixed(2);
  const asp = (totalRevenue / totalSold).toFixed(2);

  return (
    <section className="mb-10">
      <div className="mb-2">
        <h3 className="font-medium text-lg">KPI’s</h3>
      </div>
      <div>
        <ul className="grid grid-cols-5 gap-4">
          <li className="card p-3">
            <span className="text-xs font-medium mb-3 block">
              Total Products Shown
            </span>
            <h1 className="text-3xl font-medium mb-1">{totalProductsShown}</h1>
            <div className="flex items-center gap-1 font-light">
              <span>
                <TrendingUp className="fill-success stroke-success" />
              </span>
              <div className="text-xs">
                <span className="text-[#737373]">
                  <span className="text-success">12%</span> from last month
                </span>
              </div>
            </div>
          </li>
          <li className="card p-3">
            <span className="text-xs font-medium mb-3 block">
              Total Sold
            </span>
            <h1 className="text-3xl font-medium mb-1">{totalSold}</h1>
            <div className="flex items-center gap-1 font-light">
              <span>
                <TrendingUp className="fill-success stroke-success" />
              </span>
              <div className="text-xs">
                <span className="text-[#737373]">
                  <span className="text-success">12%</span> from last month
                </span>
              </div>
            </div>
          </li>
          <li className="card p-3">
            <span className="text-xs font-medium mb-3 block">
              Conversion Rate
            </span>
            <h1 className="text-3xl font-medium mb-1">{conversionRate}%</h1>
            <div className="flex items-center gap-1 font-light">
              <span>
                <TrendingUp className="fill-success stroke-success" />
              </span>
              <div className="text-xs">
                <span className="text-[#737373]">
                  <span className="text-success">12%</span> from last month
                </span>
              </div>
            </div>
          </li>
          <li className="card p-3">
            <span className="text-xs font-medium mb-3 block">
              AOP Shown/Customer
            </span>
            <h1 className="text-3xl font-medium mb-1">${aov}</h1>
            <div className="flex items-center gap-1 font-light">
              <span>
                <TrendingUp className="fill-success stroke-success" />
              </span>
              <div className="text-xs">
                <span className="text-[#737373]">
                  <span className="text-success">12%</span> from last month
                </span>
              </div>
            </div>
          </li>
          <li className="card p-3">
            <span className="text-xs font-medium mb-3 block">
              ASP
            </span>
            <h1 className="text-3xl font-medium mb-1">${asp}</h1>
            <div className="flex items-center gap-1 font-light">
              <span>
                <TrendingUp className="fill-success stroke-success" />
              </span>
              <div className="text-xs">
                <span className="text-[#737373]">
                  <span className="text-success">12%</span> from last month
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default KpiCards;
