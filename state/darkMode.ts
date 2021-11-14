import { atom, useAtom } from "jotai";

const darkModeAtom = atom(false);

export function useDarkMode() {
  return useAtom(darkModeAtom);
}
