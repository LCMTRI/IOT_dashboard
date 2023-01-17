/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useMaterialUIController } from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function Data() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    lightData
  } = controller;

  if (lightData[0].created_at == undefined) {
    return {
      columns: [],
      rows: [],
    }
  } else {
  return {
    columns: [
      { Header: "Hour", accessor: "hour", align: "center" },
      { Header: "Time", accessor: "author", width: "50%", align: "center" },
      { Header: "Value", accessor: "function", width: "30%", align: "center" },
    ],

    rows: [
      {
        hour: 1,
        author: "07:12:03 (2022-05-25)",
        function: (lightData[0].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 2,
        author: "06:07:26 (2022-05-25)",
        function: (lightData[1].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 3,
        author: "05:08:09 (2022-05-25)",
        function: (lightData[2].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 4,
        author: "04:10:05 (2022-05-25)",
        function: (lightData[3].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 5,
        author: "03:07:03 (2022-05-25)",
        function: (lightData[4].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 6,
        author: "02:12:03 (2022-05-25)",
        function: (lightData[5].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 7,
        author: "01:07:26 (2022-05-25)",
        function: (lightData[6].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 8,
        author: "00:08:09 (2022-05-25)",
        function: (lightData[7].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 9,
        author: "23:10:05 (2022-05-24)",
        function: (lightData[8].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 10,
        author: "22:07:03 (2022-05-24)",
        function: (lightData[9].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 11,
        author: "21:12:03 (2022-05-24)",
        function: (lightData[10].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 12,
        author: "20:07:26 (2022-05-24)",
        function: (lightData[11].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 13,
        author: "19:08:09 (2022-05-24)",
        function: (lightData[12].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 14,
        author: "18:09:43 (2022-05-24)",
        function: (lightData[13].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 15,
        author: "17:11:31 (2022-05-24)",
        function: (lightData[14].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 16,
        author: "16:03:53 (2022-05-24)",
        function: (lightData[15].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 17,
        author: "15:10:07 (2022-05-24)",
        function: (lightData[16].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 18,
        author: "14:12:28 (2022-05-24)",
        function: (lightData[17].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 19,
        author: "13:05:30 (2022-05-24)",
        function: (lightData[18].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 20,
        author: "12:02:26 (2022-05-24)",
        function: (lightData[19].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 21,
        author: "11:08:06 (2022-05-24)",
        function: (lightData[20].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 22,
        author: "10:12:03 (2022-05-24)",
        function: (lightData[21].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 23,
        author: "09:07:05 (2022-05-24)",
        function: (lightData[22].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
      {
        hour: 24,
        author: "08:11:02 (2022-05-24)",
        function: (lightData[23].value == 1 || lightData[0].value == "LIGHT:ON") ? "On" : "Off",
      },
    ],
  };
}
}
