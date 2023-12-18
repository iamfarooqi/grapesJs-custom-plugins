/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
  .navbar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: #000 solid 1px;
    padding: 10px 0;
}
.logo{
    width: 50px;
    cursor:pointer;
    margin-left: 20px;
}
.menu-icon{
  width: 25px;
  cursor: pointer;
  display: none;
}

nav ul li{
  list-style: none;
  display: inline-block;
  margin-right: 30px;
}
nav ul li a{
text-decoration: none;
color: #000;
font-size: 14px;
}
nav ul li a:hover{
  color: #ff5ea2;
}
  </style>
  `;
  bm.add(opts.name, {
    label: `
      <div class="component-svg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
  <p>
  ${opts.label}
  </p>
    </div> 
    `,
    category: opts.category,
    content: `   <div class="navbar">
    <img src=" https://i.postimg.cc/hv53CcnD/logo.png" class="logo">
    <nav>
        <ul id="menulist">
            <li> <a href="#">Game Controllers</a></li>
            <li> <a href="#">VR Accessories</a></li>
            <li> <a href="#">Media Remotes</a></li>
            <li> <a href="#">Others</a></li>

        </ul>
    </nav>
    <img src=" https://i.postimg.cc/hPXYXz8f/menu.png" class="menu-icon">
</div> ${style}`,
  });
};
