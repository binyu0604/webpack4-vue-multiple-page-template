export const mockData = (count, type = "string", language = "CN") => {
  // 未考虑代码健壮性 未做异常处理
  if (type === "string") {
    const arr = language === "CN" ? ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"] : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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