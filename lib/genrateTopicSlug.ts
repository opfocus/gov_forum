

export function generateSlug(input: string) {
  // 将字符串转为小写，并去除首尾空格
  const lowerCaseInput = input.toLowerCase().trim();

  // 替换非字母数字字符为短横线
  const slug = lowerCaseInput.replace(/[^a-zA-Z0-9]+/g, '-');

  // 去除多余的短横线
  const topicSlug = slug.replace(/^-+|-+$/g, '');

  return topicSlug;
}