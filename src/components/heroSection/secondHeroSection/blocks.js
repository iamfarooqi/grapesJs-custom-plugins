/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
    const style = `<style>
  .home{
    background-image: url(https://www.mexatk.com/wp-content/uploads/2017/02/%D8%B5%D9%88%D8%B1-%D9%85%D9%83%D8%A7%D8%AA%D8%A8-2017-4.jpg);
     background-size:cover;
     height: 100vh;
     position: relative;
     text-align: center;
 }
 .home-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    }
    .home-desc{
        color: wheat;
        margin: 10px;
        letter-spacing: 2px;
        line-height: 25px;
    }
    .home .btn{
    width: 150px;
    padding: 15px 0;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    }
    .title{
        color:#ffffff;
        font-size: 3rem;
        text-transform: uppercase;
    }
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.7);
        }
        .button-group{
            display: flex;
            justify-content: space-around;
            width: 50%;
            margin: auto;
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
        content: ` <div class="home">
    <div class="overlay">
      <div class="home-content">
        <h1 class="title">we are creative acenyl</h1>
        <p class="home-desc">
          You asked, Font Awesome delivers with 41 shiny new icons in version
          4.7. Want to request new icons? Here's how. Need vectors or .
        </p>
        <span class="button-group">
        <button class="btn">get started !</button>
        <button class="btn">learn more !</button>
        </span>
      </div>
    </div>
  </div> ${style}`,
    });
};
