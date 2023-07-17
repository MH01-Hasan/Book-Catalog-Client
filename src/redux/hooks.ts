/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
