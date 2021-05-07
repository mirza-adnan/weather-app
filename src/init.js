import {getSearch, displayData, handleKeyboard, removeAnimation} from "./modules/display";

export default function init () {
  removeAnimation();
  getSearch();
  handleKeyboard();
  displayData("Dhaka");
}