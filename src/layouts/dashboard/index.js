/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Axios for API call
import axios from "axios";

// use state
import React, {useState , useEffect} from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import { Switch } from "@material-ui/core";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import {
  useMaterialUIController,
  setTempData,
  setHumData,
  setLandhumData,
  setLightData,
  setPumpData
} from "context";

// Dashboard components 
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const [controller, dispatch] = useMaterialUIController();
  const {tempData} = controller;

  // const { sales, tasks } = reportsLineChartData;
  const TEMPERATURE_URL = "https://io.adafruit.com/api/v2/LeCaoMinhTri/feeds/temperature/data?limit=24"; 
  const HUMIDITY_URL = "https://io.adafruit.com/api/v2/LeCaoMinhTri/feeds/humidity/data?limit=24";
  const LANDHUMIDITY_URL = "https://io.adafruit.com/api/v2/LeCaoMinhTri/feeds/landhumidity/data?limit=24";
  const LIGHT_URL = "https://io.adafruit.com/api/v2/LeCaoMinhTri/feeds/light/data?limit=24";
  const PUMP_URL = "https://io.adafruit.com/api/v2/LeCaoMinhTri/feeds/pump/data?limit=24";

  // const [temperature, getID] = useState(0);
  const [tempList, getTempList] = useState([]);
  const [humidityList, getHumidityList] = useState([]);
  const [landHumidityList, getLandHumidityList] = useState([]);
  const [lightStatus, getLightStatus] = useState(false);
  const [pumpStatus, getPumpStatus] = useState(false);


  const postData = (value, device) => {
    let config = {
      headers: {
        "X-AIO-Key": "aio_rYtk07C7EtBL0ysNDvHKg6a7z6eb"
      }
    }

    let data = {
      'value': value
    }
    axios.post(`https://io.adafruit.com/api/v2/LeCaoMinhTri/feeds/${device}/data`, data, config).then(console.log("hi"))
  }


  const getIDs = () => {
    axios.get(TEMPERATURE_URL).then((response) => {
      // const id = response.data[response.data.length - 1].value;
      const mytempList = response.data.map( x => x.value); // Get the 
      console.log("temp data: ", response.data)
      setTempData(dispatch, response.data);
      // getID(id);
      getTempList(mytempList);
    })
    .catch((error) => console.error(`error : ${error}`));

    axios.get(HUMIDITY_URL).then((response) => {
      // const id = response.data[response.data.length - 1].value;
      const myHumidityist = response.data.map( x => x.value); // Get the 
      setHumData(dispatch, response.data);
      // getID(id);
      getHumidityList(myHumidityist);
    })
    .catch((error) => console.error(`error : ${error}`));

    axios.get(LANDHUMIDITY_URL).then((response) => {
      // const id = response.data[response.data.length - 1].value;
      const myLandHumidityist = response.data.map( x => x.value); // Get the 
      setLandhumData(dispatch, response.data);
      // getID(id);
      getLandHumidityList(myLandHumidityist);
    })
    .catch((error) => console.error(`error : ${error}`));
  };

  const getLight = () => {
    axios.get(LIGHT_URL).then((response) => {
      // const id = response.data[response.data.length - 1].value;
      const myLightStatus = response.data[0].value; // Get the 
      setLightData(dispatch, response.data);
      // getID(id);
      getLightStatus(myLightStatus);
    })
    .catch((error) => console.error(`error : ${error}`));
  }

  const getPump = () => {
    axios.get(PUMP_URL).then((response) => {
      const myPumpStatus = response.data[0].value; 
      setPumpData(dispatch, response.data);
      getPumpStatus(myPumpStatus);
    })
    .catch((error) => console.error(`error : ${error}`));
  }

  const checkPump = () => {
    if (tempList[0] > 35 || tempList[0] < 18)
    // (landHumidityList[0] < 94 || landHumidityList[0] > 110
    //     || tempList[0] > 35 || tempList[0] < 18
    //     || humidityList[0] < 63 || humidityList[0] > 90
    // ) 
    {
      console.log("warning: ", tempList[0])
      postData(1, "pump");
    }
    // else
    // {
    //   postData(0, "pump");
    // }
  };

  const handleClickLight = () => {
    if (lightStatus == 0) {
      postData(1, "light");
    } else {
      postData(0, "light");
    }
  };

  const handleClickPump = () => {
    if (pumpStatus == 0) {
      postData(1, "pump");
    } else {
      postData(0, "pump");
    }
  };

  useEffect(() => {
    setInterval(() => {
      getIDs();
    }, 5000);
  } , []);

  useEffect(() => {
    setInterval(() => {
      getPump();
      getLight();
    }, 5000);
  } , []);

  useEffect(() => {
    checkPump()
  } , [tempList[0]]);

  const TemperatureData = {
    labels: [...Array(tempList.length).keys()].map(x => "hr".concat((x + 1).toString())),
    datasets: { label: "Temperature", data: tempList },
  };

  const HumidityData = {
    labels: [...Array(humidityList.length).keys()].map(x => "hr".concat((x + 1).toString())),
    datasets: { label: "Air Humidity", data: humidityList },
  };

  const LandHumidityData = {
    labels: [...Array(landHumidityList.length).keys()].map(x => "hr".concat((x + 1).toString())),
    datasets: { label: "Land Humidity", data: landHumidityList },
  };

  // const HumidityData = {
  //   labels: [...Array(tempList.length).keys()].map(x => "Day ".concat((x + 1).toString())),
  //   datasets: { label: "Temperature", data: humidityList },
  // };
  // const[amount, setAmount]=useState(0);

  // const fetchOnce = () => {
  //   var data;
  //   return axios.get("https://jsonplaceholder.typicode.com/photos")
  //   .then((response) => {
  //     const len = response.data.length;
  //     const clone = response.data.slice(len-10,len);
  //     // console.log(Array.from(clone)[0]['id'])
  //     data = clone[0]['id'];
  //     setAmount(data);
  //   });
  // }

  // fetchOnce();

  // console.log("this is the id the second time : " , temperature);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                bgColor={(tempList[0] > 35 || tempList[0] < 18) ? "linear-gradient(180deg, #eda891 30%, #ffffff)" : "white"}
                color="primary"
                icon="thermostat"
                title="Temperature (C)"
                count={tempList[0]}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                bgColor={(humidityList[0] < 59 || humidityList[0] > 90) ? "linear-gradient(180deg, #eda891 30%, #ffffff)" : "white"}
                icon="water"
                title="Air humidity"
                count={humidityList[0]}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                bgColor={(landHumidityList[0] < 990 || landHumidityList[0] > 1025) ? "linear-gradient(180deg, #eda891 30%, #ffffff)" : "white"}
                color="success"
                icon="yard"
                title="Land humidity"
                count={landHumidityList[0]}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                button="ok"
                handleClick={handleClickLight}
                value={lightStatus == 0 ? false : true}
                bgColor="white"
                color="dark"
                icon="light"
                title="Light"
                count = {lightStatus == 0 ? "Off" : "On"}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                button="ok"
                handleClick={handleClickPump}
                value={pumpStatus == 0 ? false : true}
                bgColor="white"
                color="dark"
                icon="egg"
                title="Pump"
                count = {pumpStatus == 0 ? "Off" : "On"}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Temperature data"
                  description="Temperature in the last 24 hours (Hour 1 is the latest)."
                  date="Updates every hour"
                  chart={TemperatureData}
                />
              </MDBox>
            </Grid>
          </Grid>

          <Grid container spacing={3} py={3}>           
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Air humidity data"
                  description="Air humidity in the last 24 hours (Hour 1 is the latest)."
                  date="Updates every hour"
                  chart={HumidityData}
                />
              </MDBox>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Land humidity data"
                  description="Land humidity in the last 24 hours (Hour 1 is the latest)."
                  date="Updates every hour"
                  chart={LandHumidityData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid> */}
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
