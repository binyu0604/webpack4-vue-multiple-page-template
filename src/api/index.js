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
      score: mockData(3, "number"),
      comment: mockData(3, "number"),
      id: mockData(20, "number"),
      title: mockData(15),
      host: mockData(10),
      by: mockData(10, "string", "EN"),
      time: mockData(5, "number"),
      type
    })
  }
  return temp;
}

export const getDetailData = (params = {}) => {
  return {
    id: params.id,
    title: mockData(20),
    detail: mockData(2000),
    author: mockData(10, "string", "EN"),
    time: mockData(8, "number")
  }
}