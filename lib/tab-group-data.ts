export type Item = {
  name: string;
  slug?: string;
  segment?: string;
  parallelRoutesKey?: string;
};


export const homeItems:Item[] = [
  {
    name: "Categories",
    slug: "categories",
    segment: "categories",
  },
  {
    name:"Latest",
    slug: "latest",
    segment: "latest",
  },
  {
    name: "Unread",
    slug: "unread",
    segment: "unread",
  },
  {
    name: "Top",
    slug: "top",
    segment:'top',
  }
]