import {
  Blog1,
  Blog2,
  Blog3,
  Brands1,
  Brands2,
  Brands3,
  Brands4,
  Brands5,
  Brands6,
  BurgerKingo,
  ChickedSandwich,
  ChocolateSandwich,
  Coocoo,
  DBQBurger,
  DBQPizza,
  DominosPizza,
  FrenchFries,
  MainCategoriesImage1,
  MainCategoriesImage2,
  MainCategoriesImage3,
  categories01,
  categories02,
  categories03,
} from "@/constants/exports";
import {
  BlogsInterface,
  BrandsInterface,
  CategoriesInterface,
  CategoriesMenuInterface,
  CollectionsInterface,
  MainCategoriesInterface,
  MenuLinksInterface,
  NavbarLinksInterface,
} from ".";

export const NavbarLinks: NavbarLinksInterface[] = [
  {
    text: "HOME",
    link: "",
  },
  {
    text: "MENU",
    link: "",
  },
  {
    text: "PAGES",
    link: "",
  },
  {
    text: "BLOG",
    link: "",
  },
  {
    text: "SHOP",
    link: "",
  },
];

export const Categories: CategoriesInterface[] = [
  {
    text: "Maxican Pizza",
    image: categories01,
    link: "",
  },
  {
    text: "Soft Drinks",
    image: categories02,
    link: "",
  },
  {
    text: "French Fry",
    image: categories03,
    link: "",
  },
];

export const CollectionsData: CollectionsInterface[] = [
  {
    Name: "Pizza Kingo",
    Category: "PIZZA",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "25.00" },
      { size: "Small", price: "25.00" },
    ],
    Image: BurgerKingo,
  },
  {
    Name: "French Fries",
    Category: "French Fries",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: FrenchFries,
  },
  {
    Name: "BBQ Pizza TinTin",
    Category: "PIZZA",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: DBQPizza,
  },
  {
    Name: "BBQ Burger TinTin",
    Category: "SANDWICH",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: DBQBurger,
  },
  {
    Name: "Chocolate Pizza",
    Category: "PIZZA",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: ChocolateSandwich,
  },
  {
    Name: "Coco Drink",
    Category: "DRINKS",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: Coocoo,
  },
  {
    Name: "Dominos Pizza",
    Category: "PIZZA",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: DominosPizza,
  },
  {
    Name: "Chicken Sandwich",
    Category: "SANDWICH",
    Link: "",
    Decription: "Gorgonzola, mozzarella, taleggio Red onions, capers, olives",
    Sizes: [
      { size: "Large", price: "25.00" },
      { size: "Medium", price: "22.00" },
      { size: "Small", price: "18.00" },
    ],
    Image: ChickedSandwich,
  },
];

export const CategoriesMenu: CategoriesMenuInterface[] = [
  {
    Name: "ALL",
  },
  {
    Name: "French Fries",
  },
  {
    Name: "PIZZA",
  },
  {
    Name: "DRINKS",
  },
  {
    Name: "SANDWICH",
  },
];

export const MainCategoriesData: MainCategoriesInterface[]=[
  {
    imageBg:MainCategoriesImage1,
    title:"PIZZA"
  },
  {
    imageBg:MainCategoriesImage2,
    title:"DRINKS"
  },
  {
    imageBg:MainCategoriesImage3,
    title:"BURGER"
  },
]

export const BlogsData: BlogsInterface[] = [
  {
    Date: "24,April 2023",
    Title: "Do You Think About Cheese Pizza Recipes?",
    Description:
      "Pizzhen an unknown printer took a galley of type and scrambled it to make a type specimen bookIt hasey survived",
    Category: "Pizza",
    Image: Blog1,
  },
  {
    Date: "14,April 2023",
    Title: "Chicken Strips With New Ingridents Made.",
    Description:
      "Pizzhen an unknown printer took a galley of type and scrambled it to make a type specimen bookIt hasey survived",
    Category: "Pizza",
    Image: Blog2,
  },
  {
    Date: "24,April 2023",
    Title: "Hot Chessyraw Pasta Make Creator Fact.",
    Description:
      "Pizzhen an unknown printer took a galley of type and scrambled it to make a type specimen bookIt hasey survived",
    Category: "Burger",
    Image: Blog3,
  },
];


export const BrandsData:BrandsInterface[]=[
  {
    Image:Brands1
  },
  {
    Image:Brands2
  },
  {
    Image:Brands3
  },
  {
    Image:Brands4
  },
  {
    Image:Brands5
  },
  {
    Image:Brands6
  },
];

export const MenuLinks: MenuLinksInterface[] = [
  {
    text: "HOME",
    link: "",
    subMenu: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5", "Home 6"],
  },
  {
    text: "MENU",
    link: "",
    subMenu: [
      "Default Menu (Woo)",
      "Food Menu Plugin Grid",
      "Food Menu Plugin Filter",
      "Food Menu Plugin Slider",
    ],
  },
  {
    text: "PAGES",
    link: "",
    subMenu: ["Pages", "Gallery Page", "Team Page", "Event Page"],
  },
  {
    text: "BLOG",
    link: "",
    subMenu: ["Blog 1", "Blog 2", "Single Page", "Element"],
  },
  {
    text: "SHOP",
    link: "",
    subMenu: [
      "Shop",
      "Cart",
      "Checkout",
      "BBQ Pizza TinTin",
    ],
  },
];