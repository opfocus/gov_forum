import { subCategories } from "@/lib/sub-categories";

export const fetchCategoryById = (id: number, categories:any[]) => {
  let matchedCategory = categories?.find(
    (category: any) => category.id === id,
  );
  if (matchedCategory !== undefined)
    return {
      id: matchedCategory.id,
      color: matchedCategory.color,
      href: `/c/${matchedCategory.slug}/${matchedCategory.id}`,
    };
  matchedCategory = subCategories.find(
    (subCategory: any) => subCategory.id === id,
  );
  let parentCategory = categories?.find(
    (category: any) => category.id === matchedCategory.id,
  );
  return {
    id: matchedCategory?.id,
    color: matchedCategory?.color,
    href: `/c/${parentCategory?.slug}/${matchedCategory?.slug}/${matchedCategory?.id}`,
  };
};