let bagItems=[];
displayItemsonHomePage();
let bagItemstr=localStorage.getItem('bagItems');
bagItems=bagItemstr?JSON.parse(bagItemstr):[];
displayBagIcons();
function addToBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcons();
};
function displayBagIcons(){
    let bagItemCount=document.querySelector('.count');
   if (bagItems.length>0){ bagItemCount.innerText=bagItems.length;
    bagItemCount.style.visibility='visible';
   }
   else{
    bagItemCount.style.visibility='hidden';
   }
}
function displayItemsonHomePage(){
let itemsContainerElement = document.querySelector('.items_container');
if(!itemsContainerElement){return;}
const item=[

    {
    id:'1',
    item_image:'../web dev images/1.png',
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
}
]
let s='';
item.forEach(item=>{
    s+= `
    <div class="item">
        <img class="item_image"src="${item.item_image}" alt="item img">
        <div class="ratings">${item.ratingStar}⭐|${item.noOfReviews}</div>
        <div class="company">${item.company}</div>
        <div class="product_name">${item.product_name}</div>
        <div class="price">
            <span class="current_price">Rs${item.current_price}</span>
            <span class="original_price">Rs${item.original_price}</span>
            <span class="discount">(${item.discount}% OFF)</span>
        </div>
        <button class="add" onclick="addToBag(${item.id})">Add to Bag</button></div>`
});
itemsContainerElement.innerHTML=s;


let itemsContainerElement2 = document.querySelector('.items_container2');
const itemA=[
    {
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
let r='';
itemA.forEach(itemA=>{
    r+= `
    <div class="item">
        <img class="item_image"src="${itemA.item_image}" alt="item img">
        <div class="ratings">${itemA.ratingStar}⭐|${itemA.noOfReviews}</div>
        <div class="company">${itemA.company}</div>
        <div class="product_name">${itemA.product_name}</div>
        <div class="price">
            <span class="current_price">Rs${itemA.current_price}</span>
            <span class="original_price">Rs${itemA.original_price}</span>
            <span class="discount">(${itemA.discount}% OFF)</span>
        </div>
        <button class="add" onclick="addToBag(${itemA.id})">Add to Bag</button></div>`
});
itemsContainerElement2.innerHTML=r;}
