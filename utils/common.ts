export const matchCategory = (id: number, categories: any[]) => {
  const cate = categories.find((item: any) => item.id === id);
  return cate ? cate : "category not found";
};
