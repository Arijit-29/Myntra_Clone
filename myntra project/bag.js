let bagItemObjects = JSON.parse(localStorage.getItem('bagItems')) || [];
product=[
    {
        id:'1',
        item_image:'/web dev images/1.png',
        ratingStar:4.5,
        noOfReviews:1400,
        company:'boohooMAN',
        product_name:'Trend Forward Collection',
        current_price:600,
        original_price: 1000,
        discount:40
    },{
        id:'2',
        item_image:'/web dev images/2.png',
        ratingStar:4.3,
        noOfReviews:24,
        company:'CalvinKlein',
        product_name:'Must Have Collection',
        current_price:1300,
        original_price: 2599,
        discount:50
    },{
        id:'3',
        item_image:'/web dev images/3.png',
        ratingStar:4.1,
        noOfReviews:250,
        company:'ALDO',
        product_name:'Sneakers',
        current_price:960,
        original_price: 1599,
        discount:40
    },{
        id:'4',
        item_image:'/web dev images/4.png',
        ratingStar:5,
        noOfReviews:10,
        company:'THE COLLECTIVE outfits',
        product_name:'Stylish Fits',
        current_price:599,
        original_price: 999,
        discount:40
    },{
        id:'5',
        item_image:'/web dev images/5.png',
        ratingStar:4.2,
        noOfReviews:3500,
        company:'NAUTICA',
        product_name:'Trousers',
        current_price:700,
        original_price: 1399,
        discount:50
    },{
        id:'6',
        item_image:'/web dev images/6.png',
        ratingStar:0.0,
        noOfReviews:0,
        company:'DOROTHY PERKINS',
        product_name:'Sexy Heels',
        current_price:840,
        original_price: 1199,
        discount:30
    },{
        id:'7',
        item_image:'/web dev images/7.png',
        ratingStar:4.2,
        noOfReviews:388,
        company:'boohooMAN',
        product_name:'Polo T-shirts',
        current_price:460,
        original_price: 1599,
        discount:40
    },{
        id:'8',
        item_image:'/web dev images/8.png',
        ratingStar:4.2,
        noOfReviews:5200,
        company:'LeVIS',
        product_name:'T-shirts',
        current_price:171,
        original_price: 285,
        discount:40
    },{
       id:'9',
        item_image:'/web dev images/9.png',
        ratingStar:4.1,
        noOfReviews:800,
        company:'WoodLand',
        product_name:'Sturdy Kicks',
        current_price:699,
        original_price: 999,
        discount:30},{
        id:'10',
        item_image:'/web dev images/10.png',
        ratingStar:3.9,
        noOfReviews:1100,
        company:'Allen Solly',
        product_name:'Women Footwears',
        current_price:449,
        original_price: 599,
        discount:25
    
    },{
        id:'11',
        item_image:'/web dev images/11.png',
        ratingStar:4.3,
        noOfReviews:400,
        company:'MANGO',
        product_name:'Stunning Footwear',
        current_price:240,
        original_price: 600,
        discount:60
    },{
        id:'12',
        item_image:'/web dev images/12.png',
        ratingStar:4.9,
        noOfReviews:1300,
        company:'MANGO',
        product_name:'Trendiest fits',
        current_price:700,
        original_price: 1000,
        discount:30
    },{
        id:'13',
        item_image:'/web dev images/1.jpg',
        ratingStar:4.0,
        noOfReviews:585,
        company:'LeVIS',
        product_name:'Women Wears',
        current_price:400,
        original_price: 1000,
        discount:60
    },{
        id:'14',
        item_image:'/web dev images/2.jpg',
        ratingStar:5,
        noOfReviews:2472,
        company:`D'Decor`,
        product_name:'Home decor',
        current_price:1499,
        original_price: 4999,
        discount:70
    },{
        id:'15',
        item_image:'/web dev images/3.jpg',
        ratingStar:4.1,
        noOfReviews:250,
        company:'MaarTeeni',
        product_name:'Sleepwears',
        current_price:350,
        original_price: 500,
        discount:30
    },{
        id:'16',
        item_image:'/web dev images/4.jpg',
        ratingStar:3.2,
        noOfReviews:109,
        company:'NIKE',
        product_name:'footwear',
        current_price:399,
        original_price: 999,
        discount:60
    },{
        id:'17',
        item_image:'/web dev images/5.jpg',
        ratingStar:5.0,
        noOfReviews:2500,
        company:'GIVA',
        product_name:'Jewellery',
        current_price:3540,
        original_price: 17700,
        discount:80
    },{
        id:'18',
        item_image:'/web dev images/6.jpg',
        ratingStar:0.0,
        noOfReviews:0,
        company:'RAYMONDS',
        product_name:'Men wears',
        current_price:479,
        original_price: 1199,
        discount:60
    },{
        id:'19',
        item_image:'/web dev images/7.jpg',
        ratingStar:4.3,
        noOfReviews:400,
        company:'RAYMONDS',
        product_name:'Suits',
        current_price:999,
        original_price: 1999,
        discount:50
    },{
        id:'20',
        item_image:'/web dev images/8.jpg',
        ratingStar:4.2,
        noOfReviews:5200,
        company:'Duckbag',
        product_name:'HandBags',
        current_price:89,
        original_price: 299,
        discount:70
    },{
        id:'21',
        item_image:'/web dev images/9.jpg',
        ratingStar:2.1,
        noOfReviews:13,
        company:'MaarTeeni',
        product_name:'Innerwear',
        current_price:699,
        original_price: 999,
        discount:30
    }
]
onload();
function onload(){
loadBagItemObject();
displayBagItems();
displayBagSummary();
}
function displayBagSummary(){
    let bagsummaryElement=document.querySelector('.bag_summary');
    let totalItem=bagItemObjects.length;
    let totalMRP=0;
    let totalDiscount=0;
    bagItemObjects.forEach(bagItems=>{
        totalMRP+=bagItems.original_price;
        totalDiscount+=bagItems.original_price-bagItems.current_price;
    })
let finalPayment=totalMRP-totalDiscount+99;
    bagsummaryElement.innerHTML=`
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni"><a class="order" href="https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gclid=CjwKCAiAjp-7BhBZEiwAmh9rBZ7kURYsjecRoPLSyxWS8lH5tVeM0OnZdZ6LnJqkbgquWv9lSa7wCRoCJOkQAvD_BwE">PLACE ORDER</a></div>
  </button>`;
}
function loadBagItemObject(){
bagItemObjects=bagItems.map(itemId=>
{
    for(let i=0;i<product.length;i++){
        if(itemId==product[i].id){
            return product[i];
        }
    }
}
)
console.log(bagItemObjects);
}
function displayBagItems(){
    let containerElement=document.querySelector('.bag_items_container');
    let innerHTML='';
    bagItemObjects.forEach(bagItems => {
        innerHTML+=generateItem(bagItems);
    });
    containerElement.innerHTML=innerHTML;
}
function removeFromBag(itemID){
   bagItems= bagItems.filter(BagitemID=>BagitemID!=itemID);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   loadBagItemObject();
   displayBagIcons();
   displayBagItems();
   displayBagSummary();
}
function generateItem(product){
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${product.item_image}">
    </div>
    <div class="item-right-part">
      <div class="company">${product.company}</div>
      <div class="item-name">${product.product_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${product.current_price}</span>
        <span class="original-price">Rs ${product.original_price}</span>
        <span class="discount-percentage">(${product.discount}% OFF)</span>
      </div>
    <div class="remove-from-cart" onclick="removeFromBag(${product.id})">X</div>
  </div>
    
    
    `;
}