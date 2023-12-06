/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>

  *{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  .nav-class{
    font-family: montserrat;
    background: #0082e6;
    height: 80px;
    width: 100%;
  }
  .logo{
   width: 80px;
   margin-left: 50px;
  }
  .nav-class ul{
    float: right;
    margin-right: 20px;
  }
  .nav-class ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  }
  .nav-class ul li a{
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
  }
  a.active,a:hover{
    background: #1b9bff;
    transition: .5s;
  }
  .checkbtn{
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
  }
  #check{
    display: none;
  }
  @media (max-width: 952px){
    label.logo{
      font-size: 30px;
      padding-left: 50px;
    }
    .nav-class ul li a{
      font-size: 16px;
    }
  }
  @media (max-width: 858px){
    .checkbtn{
      display: block;
    }
    ul{
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #2c3e50;
      top: 80px;
      left: -100%;
      text-align: center;
      transition: all .5s;
    }
    .nav-class ul li{
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }
    .nav-class ul li a{
      font-size: 20px;
    }
    a:hover,a.active{
      background: none;
      color: #0082e6;
    }
    #check:checked ~ ul{
      left: 0;
    }
  }
  
  
  
  </style>
  `;
  bm.add(opts.name, {
    label: `
    <i class="fa fa-arrows-h"></i>
    <div class="gjs-block-label">
      ${opts.label}
    </div> 
    `,
    category: opts.category,
    content: ` <nav class="nav-class">
    <img class="logo" src="https://codetheweb.blog/assets/img/icon2.png">
    <ul>
      <li><a class="active" href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </nav> ${style}`,
  });
};
