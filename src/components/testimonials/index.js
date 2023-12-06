import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("testimonial", (editor, opts = {}) => {
  let options = {
    label: "Testimonial",
    name: "testimonial",
    category: "Custom",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
