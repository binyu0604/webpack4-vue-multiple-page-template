import {
  mockData
} from "./utils";

export const getListData = (params = {}) => {
  const {
    type,
    count,
    page,
    start
  } = params;

  let temp = [];
  for (let i = 0; i < count; i++) {
    temp.push({
      score: mockData(2, "number"),
      comment: mockData(2, "number"),
      title: mockData(15),
      host: mockData(10),
      by: mockData(3),
      time: mockData(5),
      type
    })
  }
  return temp;

}