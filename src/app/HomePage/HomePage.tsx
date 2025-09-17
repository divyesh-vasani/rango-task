import { ApiResponse } from "../../types/api";
import DataTable from "../DataTable/DataTable";
import FunnelChartEarrings from "../FunnelChartEarrings/FunnelChartEarrings";
import KpiCards from "../KpiCards/KpiCards"
import PurchasePurposeChart from "../PurchasePurposeChart/PurchasePurposeChart"


const HomePage = async() => {
  const data = await fetch("https://dummyjson.com/products");
  const kpis: ApiResponse = await data.json();
  return (
    <div><KpiCards kpis={kpis} /><PurchasePurposeChart kpis={kpis}/><FunnelChartEarrings/><DataTable kpis={kpis} /></div>
  )
}

export default HomePage
