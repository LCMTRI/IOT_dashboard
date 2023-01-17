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
    landhumData
  } = controller;

  if (landhumData[0].created_at == undefined) {
    return {
      columns: [],
      rows: [],
    }
  } else {
  return {
    columns: [
      { Header: "Hour", accessor: "hour", align: "center" },
      { Header: "Time", accessor: "author", width: "50%", align: "center" },
      { Header: "Value", accessor: "function", align: "center" },
    ],

    rows: [
      {
        hour: 1,
        author: "07:12:03 (2022-05-25)",
        function: landhumData[0].value,
      },
      {
        hour: 2,
        author: "06:07:26 (2022-05-25)",
        function: landhumData[1].value,
      },
      {
        hour: 3,
        author: "05:08:09 (2022-05-25)",
        function: landhumData[2].value,
      },
      {
        hour: 4,
        author: "04:10:05 (2022-05-25)",
        function: landhumData[3].value,
      },
      {
        hour: 5,
        author: "03:07:03 (2022-05-25)",
        function: landhumData[4].value,
      },
      {
        hour: 6,
        author: "02:12:03 (2022-05-25)",
        function: landhumData[5].value,
      },
      {
        hour: 7,
        author: "01:07:26 (2022-05-25)",
        function: landhumData[6].value,
      },
      {
        hour: 8,
        author: "00:08:09 (2022-05-25)",
        function: landhumData[7].value,
      },
      {
        hour: 9,
        author: "23:10:05 (2022-05-24)",
        function: landhumData[8].value,
      },
      {
        hour: 10,
        author: "22:07:03 (2022-05-24)",
        function: landhumData[9].value,
      },
      {
        hour: 11,
        author: "21:12:03 (2022-05-24)",
        function: landhumData[10].value,
      },
      {
        hour: 12,
        author: "20:07:26 (2022-05-24)",
        function: landhumData[11].value,
      },
      {
        hour: 13,
        author: "19:08:09 (2022-05-24)",
        function: landhumData[12].value,
      },
      {
        hour: 14,
        author: "18:09:43 (2022-05-24)",
        function: landhumData[13].value,
      },
      {
        hour: 15,
        author: "17:11:31 (2022-05-24)",
        function: landhumData[14].value,
      },
      {
        hour: 16,
        author: "16:03:53 (2022-05-24)",
        function: landhumData[15].value,
      },
      {
        hour: 17,
        author: "15:10:07 (2022-05-24)",
        function: landhumData[16].value,
      },
      {
        hour: 18,
        author: "14:12:28 (2022-05-24)",
        function: landhumData[17].value,
      },
      {
        hour: 19,
        author: "13:05:30 (2022-05-24)",
        function: landhumData[18].value,
      },
      {
        hour: 20,
        author: "12:02:26 (2022-05-24)",
        function: landhumData[19].value,
      },
      {
        hour: 21,
        author: "11:08:06 (2022-05-24)",
        function: landhumData[20].value,
      },
      {
        hour: 22,
        author: "10:12:03 (2022-05-24)",
        function: landhumData[21].value,
      },
      {
        hour: 23,
        author: "09:07:05 (2022-05-24)",
        function: landhumData[22].value,
      },
      {
        hour: 24,
        author: "08:11:02 (2022-05-24)",
        function: landhumData[23].value,
      },
    ],
  };
}
}
