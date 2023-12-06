import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("navbar", (editor, opts = {}) => {
  let options = {
    label: "Navbar",
    name: "navbar",
    category: "Custom",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
