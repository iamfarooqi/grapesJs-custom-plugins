/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>

    
  .nav {
    height: 50px;
    width: 100%;
    background-color: #4d4d4d;
    position: relative;
  }
  
  .nav > .nav-header {
    display: inline;
  }
  
  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
  }
  
  .nav > .nav-btn {
    display: none;
  }
  
  .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
  }
  
  .nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
  }
  
  .nav > .nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .nav > #nav-check {
    display: none;
  }
  
  @media (max-width:600px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
    }
    .nav > .nav-links > a {
      display: block;
      width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }
  </style>
  `;
  bm.add(opts.name, {
    label: `
    
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
  <p>
  ${opts.label}
  </p>
    </div> 
    `,
    category: opts.category,
    content: `  <div class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
        <div class="nav-title">
            JoGeek
        </div>
    </div>
    <div class="nav-btn">
        <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>

    <div class="nav-links">
        <a href="//github.io/jo_geek" target="_blank">Github</a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
        <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
    </div>
</div> ${style}`,
  });
};
