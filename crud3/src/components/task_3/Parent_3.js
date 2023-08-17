import React from "react";

const Parent3 = () => {
  const list = [
    {
      client_id: 11,
      client_name: "Network 18",
      credit_experience: "",
      resource_count: 24,
      year: 2022,
      quarter: "1",
      tds_cut: 1,
      tds_submited: 1,
    },
    {
      client_id: 411,
      client_name: "Niveus Solutions Pvt Ltd",
      credit_experience: "",
      resource_count: 22,
      year: 2023,
      quarter: "1",
      tds_cut: 0,
      tds_submited: 1,
    },
    {
      client_id: 732,
      client_name: "iorta technologyyy",
      credit_experience: "green",
      resource_count: 12,
      year: 2023,
      quarter: "3",
      tds_cut: 0,
      tds_submited: 0,
    },
    {
      client_id: 739,
      client_name: "portail",
      credit_experience: "green",
      resource_count: 9,
      year: 2023,
      quarter: "3",
      tds_cut: 0,
      tds_submited: 0,
    },
    {
      client_id: 744,
      client_name: "saidham",
      credit_experience: "",
      resource_count: 9,
      year: 2023,
      quarter: "3",
      tds_cut: 0,
      tds_submited: 0,
    },
    {
      client_id: 126,
      client_name: "Augmont Goldtech Pvt. Ltd.",
      credit_experience: "",
      resource_count: 7,
      year: 2022,
      quarter: "1",
      tds_cut: 1,
      tds_submited: 1,
    },
    {
      client_id: 744,
      client_name: "saidham",
      credit_experience: "",
      resource_count: 6,
      year: 2023,
      quarter: "4",
      tds_cut: 0,
      tds_submited: 0,
    },
    {
      client_id: 726,
      client_name: "Soft Tech",
      credit_experience: "green",
      resource_count: 1,
      year: 2023,
      quarter: "3",
      tds_cut: 1,
      tds_submited: 0,
    },
    {
      client_id: 682,
      client_name: "Ravi CEO",
      credit_experience: "orange",
      resource_count: 1,
      year: 2023,
      quarter: "3",
      tds_cut: 0,
      tds_submited: 0,
    },
    {
      client_id: 742,
      client_name: "Asskared",
      credit_experience: "orange",
      resource_count: 1,
      year: 2023,
      quarter: "3",
      tds_cut: 0,
      tds_submited: 0,
    },
    {
      client_id: 740,
      client_name: "augmont1",
      credit_experience: "red",
      resource_count: 1,
      year: 2023,
      quarter: "3",
      tds_cut: 0,
      tds_submited: 0,
    },
  ];
  const anotherList = list.reduce((acc, curr) => {
    if (acc[curr.client_name]) {
      acc[curr.client_name].push(curr);
    } else {
      acc[curr.client_name] = [curr];
    }
    return acc;
  }, {});
  //   console.log("Object.keys(anotherList)", Object.keys(anotherList));
  //   console.log(Object.keys(anotherList).length);
  let quarters = [];
  for (let i = 0; i <= Object.keys(anotherList).length - 1; i++) {
    for (let j = 0; i < 4; i++) {
      if (Object.values(anotherList)[i][j].quarter == i) {
        continue;
      } else {
        console.log(
          "Object.values(anotherList)[i][j].quarter",
          Object.values(anotherList)[i][j].quarter
        );
        Object.entries(anotherList)[i].push({ quarter: j + 1 });
      }
    }
  }

  console.log("anotherList", anotherList);
  return <div></div>;
};

export default Parent3;
