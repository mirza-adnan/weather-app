import {search, displayData, handleKeyboard, removeAnimation} from "./modules/display";

// function to initialise everything
export default function init () {
  removeAnimation();
  search();
  handleKeyboard();
  displayData("Dhaka");
}