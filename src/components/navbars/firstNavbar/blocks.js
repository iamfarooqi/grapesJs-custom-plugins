/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>

    
  .first-nav {
    height: 50px;
    width: 100%;
    background-color: #4d4d4d;
    position: relative;
  }
  
  .first-nav > .first-nav-header {
    display: inline;
  }
  
  .first-nav > .first-nav-header > .first-nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
  }
  
  .first-nav > .first-nav-btn {
    display: none;
  }
  
  .first-nav > .first-nav-links {
    display: inline;
    float: right;
    font-size: 18px;
  }
  
  .first-nav > .first-nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
  }
  
  .first-nav > .first-nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .first-nav > #first-nav-check {
    display: none;
  }
  
  @media (max-width:600px) {
    .first-nav > .first-nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .first-nav > .first-nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .first-nav > .first-nav-btn > label:hover,.first-nav  #first-nav-check:checked ~ .first-nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .first-nav > .first-nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .first-nav > .first-nav-links {
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
    .first-nav > .first-nav-links > a {
      display: block;
      width: 100%;
    }
    .first-nav > #first-nav-check:not(:checked) ~ .first-nav-links {
      height: 0px;
    }
    .first-nav > #first-nav-check:checked ~ .first-nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
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
    content: `  <div class="first-nav">
    <input type="checkbox" id="first-nav-check">
    <div class="first-nav-header">
        <div class="first-nav-title">
            JoGeek
        </div>
    </div>
    <div class="first-nav-btn">
        <label for="first-nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>

    <div class="first-nav-links">
        <a href="//github.io/jo_geek" target="_blank">Github</a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
        <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
    </div>
</div> ${style}`,
  });
};
