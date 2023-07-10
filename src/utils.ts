export function getCharSize(str: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isChinese(str[i])) {
      count += 2;
    } else {
      count++;
    }
  }
  return count;
}

//判断是否为中文
function isChinese(temp: any) {
  const re = /[^\u4e00-\u9fa5]/;
  if (re.test(temp)) return false;
  return true;
}
