
import "client-only"

export type URLIngredients = {
  tagRoute: string;
  categoryRouter: string;
  category: string;
  subCategory: string;
  id: string;
  tagName: string;
  excipients: string;
  sort: string;
};

export function generateNextURL(obj:URLIngredients) {
  let url = '';
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key as keyof URLIngredients] !== "") {
      url +='/' + obj[key as keyof URLIngredients] ;
    }
  }
  return url
}
