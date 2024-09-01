import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Loader from "../../components/common/Loader/Loader";
import CoinInfo from "./CoinInfo/CoinInfo";
import LineChart from "./LineChart/LineChart";
import SelectDays from "../DetailsPage/SelectDays/SelectDays";
import "./DetailsPage.css";
import { coinObject } from "../../functions/Covertbjects";
import List from "../List/List";
import { getCoinData } from "../../functions/getCoinData";
import getCoinPrice from "../../functions/getCoinPrice";
import { convertDate } from "../../functions/ConvertDate";
import { settingChartData } from "../../functions/settingChartData";

function DetailsPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(60);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id, days]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days);
      if (prices && prices.length > 0) {
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(58,128,233,0.1)",
              pointRadius: 0,
            },
          ],
        });
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);

    const prices = await getCoinPrice(id, days);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setDays(event.target.value);
  };

  return (
    <div className="DetailsPage">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="DetailsPage_list">
            <List coin={coinData} />
          </div>
          <div className="DetailsPage_list">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default DetailsPage;
