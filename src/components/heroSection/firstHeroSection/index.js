import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("firstHeroSection", (editor, opts = {}) => {
  let options = {
    label: "First Hero Section",
    name: "first-hero-section",
    category: "Hero Sections",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
