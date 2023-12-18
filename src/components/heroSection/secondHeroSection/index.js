import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("secondHeroSection", (editor, opts = {}) => {
  let options = {
    label: "Second Hero Section",
    name: "second-hero-section",
    category: "Hero Sections",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
