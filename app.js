document.addEventListener("DOMContentLoaded", function() {
const carts = [
    // men
    { idx:1, id:10, title: 'Men1', gender:"men", img: "image.png", price: 190, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:2,id:20,title: 'Men2',gender:"men", img: 'image copy.png', price: 1992, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:3,id:30,title: 'Men3',gender:"men", img: 'image copy 2.png', price: 1999, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:4,id:40,title: 'Men4',gender:"men", img: 'image copy 3.png', price: 1989, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:5,id:50,title: 'Men5',gender:"men", img: 'image copy 4.png', price: 2009, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
// women
    { idx:6,id:60,title: 'Women1',gender:"women", img: 'image copy 5.png', price: 1987, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:7,id:70,title: 'Women2',gender:"women", img: 'image copy 6.png', price: 1986, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."  },
    { idx:8,id:80,title: 'Women3',gender:"women", img: 'image copy 7.png', price: 2011,dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:9,id:90,title: 'Women4',gender:"women", img: 'image copy 8.png', price: 1981, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."  },
    { idx:10,id:100,title: 'Women5',gender:"women", img: 'image copy 9.png', price: 1981, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."  },
    // child
    { idx:11,id:110,title: 'Child1',gender:"child", img: 'image copy 10.png', price: 1987, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    {idx:12,id:120, title: 'Child2',gender:"child", img: 'image copy 11.png', price: 1986, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:13,id:130,title: 'Child3',gender:"child", img: 'image copy 12.png', price: 2011, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:14,id:140,title: 'Child4',gender:"child", img: 'image copy 13.png', price: 1981, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
    { idx:15,id:150,title: 'Child5',gender:"child", img: 'image copy 14.png', price: 1981, dec: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
  ];
  

  var ap = document.getElementById("op")
  var allc = document.getElementById("allc")
  var mc =document.getElementById("mc")
  var wc =document.getElementById("wc")
  var cc =document.getElementById("cc")
  allc.addEventListener("click",function(){
    
    displayProduct(carts)
  })
  mc.addEventListener("click",function(){
    mencloth = carts.filter(p=>p.gender==="men")
    displayProduct(mencloth)
  })
  wc.addEventListener("click",function(){
    womencloth = carts.filter(p=>p.gender==="women")
    displayProduct(womencloth)
  })
  cc.addEventListener("click",function(){
    childcloth = carts.filter(p=>p.gender==="child")
    displayProduct(childcloth)
  })
  displayProduct(carts)
})
  function displayProduct(pro){
    var clutter = "";
    pro.forEach(item=>{
        clutter+=`
        
      <div class="col">
      <div class="card h-100">
          <img style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal${item.idx}" src="${item.img}" class="card-img-top" alt="...">
     
<div class="modal fade" id="exampleModal${item.idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Image</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
   <img width="100%" src="${item.img}"/>
</div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
</div>
</div>
</div>
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.dec}</p>
    <br>
    <h4 style"color:red;">Rs.${item.price}</h4>
    <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal${item.id}">Details</button>
      </div>
    </div>
</div>
</div>
</div>
<div class="modal fade" id="exampleModal${item.id}" tabindex="-1"aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog"><div class="modal-content" style="padding: 30px;">
        <button style="right: 0;position: absolute; " type="button" class="btn-close"data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="modal-body">
    <div class="col">
        <div class="card h-100">
          <img src="${item.img}" class="card-img-top" alt="...">
          
          <div class="card-body">
          <br>
        <h4 style"color:red;">Rs.${item.price}</h4>

            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.dec}</p>
            <br>
            <button class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
</div></div></div></div>
        `
    })
    var row = document.getElementById("row").innerHTML=clutter
  }


     
   