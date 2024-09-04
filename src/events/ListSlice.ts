import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TList } from "../types";
import { getRandomColor, getUniqId } from "../utils";
import { AppDispatch } from ".";

type TInitialState = {
  list: TList[];
  isDeleteEvent: boolean;
  deletedCard: boolean;
};

const initialState: TInitialState = {
  list: [],
  isDeleteEvent: false,
  deletedCard: false,
};

const ListSlice = createSlice({
  name: "InteractiveList",
  initialState: initialState,
  reducers: {
    generateCard: (state: TInitialState) => {
      state.list.unshift({ color: getRandomColor(), id: getUniqId() });
      state.isDeleteEvent = false;
      state.deletedCard = false;
    },

    setDeleteEvent: (state: TInitialState, action: PayloadAction<boolean>) => {
      state.isDeleteEvent = action.payload;
    },

    removeCard: (state: TInitialState) => {
      state.deletedCard = true;
      state.list.pop();
    },
  },
});

export const deleteCard = () => (dispatch: AppDispatch) => {
  dispatch(ListSlice.actions.setDeleteEvent(true));

  setTimeout(() => {
    dispatch(ListSlice.actions.removeCard());
    dispatch(ListSlice.actions.setDeleteEvent(false));
  }, 400);
};

export default ListSlice;
