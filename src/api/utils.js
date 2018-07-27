export const mockData = (count, type = "string") => {
  // 代码健壮性 未做异常处理
  if (type === "string") {
    const arr = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    let currentCount = ~~(count / 2);
    let tempStr = "";
    for (let i = 0; i < currentCount; i++) {
      tempStr += arr[~~(Math.random() * arr.length)]
    }
    return tempStr
  } else if (type === "number") {
    return Math.random().toString().slice(2, 2 + count)
  }
}