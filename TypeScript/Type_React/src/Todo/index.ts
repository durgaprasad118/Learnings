import { atom } from "recoil";
import { TodoType } from "./Types";
export const todoAtom = atom<TodoType[]>({
  key: "todoAtom",
  default: [],
});
