import { INCREMENT, DECREMENT } from "../constants/action_types";

export const incrementValue = () => ({
    type: INCREMENT
});

export const decrementValue = () => ({
  type: DECREMENT
});