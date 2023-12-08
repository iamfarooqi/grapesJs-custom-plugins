import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("firstNavbar", (editor, opts = {}) => {
  let options = {
    label: "First Navbar",
    name: "first-navbar",
    category: "Navbars",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
