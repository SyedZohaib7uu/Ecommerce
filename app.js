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
    <button onclick="addNum('${item.idx}', '${item.img}', ${item.price}, '${item.title}')"  id="kmn" class="btn btn-primary">Purchase</button>
         
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
            <button onclick="addNum('${item.idx}', '${item.img}', ${item.price}, '${item.title}')"  id="kmn" class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
</div></div></div></div>
        `
    })
    var row = document.getElementById("row").innerHTML=clutter
  }
  var cart = []; // Initialize an empty array to store cart items
var counter =0
  function addNum(cardIndex, img,pri,ti) {
      counter = counter + 1; // Increment counter
      document.getElementById("jkl").innerHTML = counter; // Update counter display
  
      // Create a new item object for the cart
      var addCart = {
    img:img,
    pri:pri,
    ti:ti
   }
   cart = [
    ...cart,addCart
   ]
   updateCartDisplay()
  }
 
  // Clear previous cart display
  var cartContainer = document.getElementById("stored-cart");
  cartContainer.innerHTML = "<h3>Your Cart Is Empty</h3>";
  function updateCartDisplay() {
  var totalAmount =0
cartContainer.innerHTML=""
  // Iterate over the cart array and display each item
  cart.forEach(function(item) {
    totalAmount = totalAmount+item.pri
      var itemElement = document.createElement("div");
      itemElement.innerHTML = `
      
      <br>
      <div id="line">
            <div id="imgj">
                <img src="${item.img}" alt=""/>

            </div>
          <h3>${item.ti}</h3>
          <h3>Rs.${item.pri}</h3>
        </div>
        
        `;
        cartContainer.appendChild(itemElement);
      });
      var totalElement = document.createElement("div");
    totalElement.textContent = `Total Amount: Rs.${totalAmount}`;
    cartContainer.appendChild(totalElement);

    // Add payment button
    var paymentButton = document.createElement("button");
    paymentButton.textContent = "Payment";
    paymentButton.className = "btn btn-danger bottom-0";
    paymentButton.id = "mita";
    paymentButton.onclick = function() {
      counter=0
      document.getElementById("jkl").innerHTML = counter;
      // Call function to handle payment
      cart = [];
      // Update the cart display
      updateCartDisplay();
    };
    cartContainer.appendChild(paymentButton);
}
 