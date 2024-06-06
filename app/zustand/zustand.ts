import {create} from 'zustand';

export const myStore = create((set) => ({
  menuOpen: false,
  testing: "false",
  collectionsPopup: "",
  // handleMenuClick:()=>set({menuOpen:(current:boolean)=>!current}),
  handleMenuClick: () => set((state: any) => ({ menuOpen: !state.menuOpen })),
  handleMenuClose: () => set((state: any) => ({ menuOpen: false })),
  handlecollectionPopup: (popupSelection:any , e:any) =>
    set((state: any) => ({
      collectionsPopup:
        state.collectionsPopup === popupSelection ? "" : popupSelection,
    })),
}));