import React, { useState, useEffect, useRef } from 'react';
//@ts-ignore
import grapesjs from 'grapesjs';
//@ts-ignore
import gjsPresetWebPage from 'grapesjs-preset-webpage';
import navbar from '../components/navbar';
import testimonial from '../components/testimonials';

export default function Editor() {
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      plugins: [navbar, testimonial],
      pluginsOpts: {
        gjsPresetWebPage: {},
        navbar: {},
        testimonial: {},
      },
    });
    setEditor(editor);
  }, []);
  return <div id="editor" />;
}
