import { myStore } from "@/app/zustand/zustand";
import { body } from "./elements";
const handlecollectionPopup = myStore(
  (state: any) => state.handlecollectionPopup
);

body?.addEventListener("click", () => {
  handlecollectionPopup("");
});
