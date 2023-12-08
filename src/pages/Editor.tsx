import React, { useState, useEffect, useRef } from 'react';
//@ts-ignore
import grapesjs from 'grapesjs';
//@ts-ignore
import gjsPresetWebPage from 'grapesjs-preset-webpage';
import testimonial from '../components/testimonials';
import firstNavbar from '../components/navbars/firstNavbar';
import secondNavbar from '../components/navbars/secondNavbar';

export default function Editor() {
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      plugins: [firstNavbar, secondNavbar, testimonial],
      pluginsOpts: {
        gjsPresetWebPage: {},
        firstNavbar: {},
        secondNavbar: {},
        testimonial: {},
      },
    });
    setEditor(editor);
  }, []);
  return <div id="editor" />;
}
