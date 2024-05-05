export type Item = {
  name: string;
  slug?: string;
  segment?: string;
  parallelRoutesKey?: string;
};


  export {homeItems, aboutItems}

 const homeItems:Item[] = [
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

const aboutItems:Item[] = [
  {
    name: "About",
    slug: "about",
    segment: "about",
  },
  {
    name:"FAQ",
    slug: "faq",
    segment: "faq",
  },
  {
    name: "Terms of Service",
    slug: "tos",
    segment: "tos",
  },
  {
    name: "Privacy",
    slug: "privacy",
    segment:'privacy',
  }
]