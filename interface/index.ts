
  type Image = any;

export interface FancyButtonInterface {
  text:string,
  className?:string,
  borderNone?:false | true,
  accent?:"dark" | "light",
}

export interface NavbarLinksInterface {
  link:string,
  text:string
}

export interface CategoriesInterface {
  text:string,
  image:Image,
  link:string,
}

export interface CollectionsInterface {
  Name:string,
  Image:Image,
  Decription:string,
  Sizes:any[],
  Link:"",
  Category:string
}

export interface CategoriesMenuInterface {
  Name: string;
}
export interface MainCategoriesInterface {
  imageBg:Image,
  title:string
}
export interface BlogsInterface {
  Image:Image,
  Date:string,
  Category:string,
  Title:string,
  Description:string
}
export interface BrandsInterface {
  Image:Image,
};

export interface CollectionsCardInterface {
  filterAttribute?:string;
}

export interface MenuLinksInterface {
  link: string;
  text: string;
  subMenu:string[]
}