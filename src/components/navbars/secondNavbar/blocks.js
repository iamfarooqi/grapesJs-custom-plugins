/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>/* Google Fonts - Poppins */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
  
  
  .nav {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 200px;
    background: #4a98f7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .nav,
  .nav .nav-links {
    display: flex;
    align-items: center;
  }
  .nav {
    justify-content: space-between;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .nav .logo {
    font-size: 22px;
    font-weight: 500;
  }
  .nav .nav-links {
    column-gap: 20px;
    list-style: none;
  }
  .nav .nav-links a {
    transition: all 0.2s linear;
  }
  .nav.openSearch .nav-links a {
    opacity: 0;
    pointer-events: none;
  }
  .nav .search-icon {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .nav .search-box {
    position: absolute;
    right: 250px;
    height: 45px;
    max-width: 555px;
    width: 100%;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s linear;
  }
  .nav.openSearch .search-box {
    opacity: 1;
    pointer-events: auto;
  }
  .search-box .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    left: 15px;
    color: #4a98f7;
    transform: translateY(-50%);
  }
  .search-box input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: #fff;
    padding: 0 15px 0 45px;
  }
  
  .nav .navOpenBtn,
  .nav .navCloseBtn {
    display: none;
  }
  
  /* responsive */
  @media screen and (max-width: 1160px) {
    .nav {
      padding: 15px 100px;
    }
    .nav .search-box {
      right: 150px;
    }
  }
  @media screen and (max-width: 950px) {
    .nav {
      padding: 15px 50px;
    }
    .nav .search-box {
      right: 100px;
      max-width: 400px;
    }
  }
  @media screen and (max-width: 768px) {
    .nav .navOpenBtn,
    .nav .navCloseBtn {
      display: block;
    }
    .nav {
      padding: 15px 20px;
    }
    .nav .nav-links {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100%;
      max-width: 280px;
      width: 100%;
      padding-top: 100px;
      row-gap: 30px;
      flex-direction: column;
      background-color: #11101d;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease;
      z-index: 100;
    }
    .nav.openNav .nav-links {
      left: 0;
    }
    .nav .navOpenBtn {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    .nav .navCloseBtn {
      position: absolute;
      top: 20px;
      right: 20px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    .nav .search-box {
      top: calc(100% + 10px);
      max-width: calc(100% - 20px);
      right: 50%;
      transform: translateX(50%);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
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
    content: `   <nav class="nav">
    <i class="uil uil-bars navOpenBtn"></i>
    <a href="#" class="logo">CodingLab</a>

    <ul class="nav-links">
        <i class="uil uil-times navCloseBtn"></i>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>

    <i class="uil uil-search search-icon" id="searchIcon"></i>
    <div class="search-box">
        <i class="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
    </div>
</nav> ${style}`,
  });
};
