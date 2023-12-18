/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
  .row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0;
}
.col-1{
    flex-basis: 40%;
    position: relative;
    margin-left: 50px;
}
.col-1 h2{
   font-size: 54px; 
}
.col-1 h3{
    font-size: 30px;
    color: #707070;
    font-weight: 100;
    margin: 20px 0 10pxs;
}
.col-1 p{
    font-size: 16px;
    color: #b7b7b7;
    font-weight: 100;
}
.col-1 h4{
    margin: 30px 0;
    font-size: 20px;
}
button{
    width: 140px;
    border: 0;
    padding: 12px 10px;
    outline: none;
    color: #fff;
    background: linear-gradient(to right,#fb5283,#ff3527 );
    border-radius: 6px;
    cursor: pointer;
    transition: width 0.5s;
}
button img{
    width: 30px;
    display: none;
}
button:hover img{
  display: block;
}
button:hover{
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.col-1::after{
    content: '';
    width: 10px;
    height: 57%;
    background: linear-gradient(#ff469f,#ff6062);
    position: absolute;
    left: -40px;
    top: 8px;
}
.col-2{
position: relative;
flex-basis: 60%;
display: flex;
align-items: center;
}
.col-2 .controller{
    width: 90%;
}
.color-box{
   position: absolute;
   right: 0;
   top: 0;
   background: linear-gradient(hsl(333, 100%, 66%),#ff575a);
   border-radius: 20px 0 0 20px;
   height: 100%;
   width: 80%;
   z-index: -1;
   transform: translateX(150px);
}
.add-btn img{
width: 35px;
margin-bottom: 5px;
}
.add-btn{
    text-align: center;
    color: #fff;
    cursor: pointer;
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
    content: ` <div class="row">
    <div class="col-1">
        <h2>Ps4 V2 <br>Dualshock 4</h2>
        <h3> Wireless Controller For Playstation 4</h3>
        <p> (Compatible/Generic)</p>
        <h4>$ 32.50</h4>
        <button type="button">Buy Now <img src=" https://i.postimg.cc/1Xtjc4L7/arrow.png"></button>
    </div>
    <div class="col-2">
        <img src="https://i.postimg.cc/jSNkhpFT/controller.png" class="controller">
        <div class="color-box"></div>
        <div class="add-btn">
            <img src=" https://i.postimg.cc/FRhqzTG4/add.png">
            <p> <small>Add to Cart</small></p>
        </div>
    </div>
</div> ${style}`,
  });
};
