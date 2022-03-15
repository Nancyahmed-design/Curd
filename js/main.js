// //CRUD operation
// // C =>Create
// // R =>Dispaly
// // U =>update
// // D =>Delete
// // S =>Search

var productNameInput = document.getElementById("productName");//input kolo
var productPriceInput =document.getElementById("productPrice");//input kolo
var productCategoryInput =document.getElementById("productCategory");//input kolo
var productDescInput=document.getElementById("productDesc");//input kolo
// console.log(productNameInput ,productPriceInput ,productCategoryInput,productDescInput);
 
// localStorage.setItem("name","Nancy Ahmed");
// alert(localStorage.getItem("hambozo"));
// localStorage.removeItem("name");
// var x =localStorage.length();
// console.log(x);
// localStorage.clear();//formate localstorage


var productContainer ;
if( localStorage.getItem("products") == null){
    productContainer = [];
}
else{
    productContainer = JSON.parse(localStorage.getItem("products"));
    dispalyProduct();
}
 function addProduct(){
   
    var product = {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value
    }
    // console.log(product);
    productContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productContainer) );
    console.log(productContainer);
    dispalyProduct();
    clearProduct();
 }

 function dispalyProduct() {
     var cartonna=``;
     for(var i=0;i<productContainer.length;i++){
            cartonna += `<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td> <button class="btn btn-warning">update</button></td>
            <td> <button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>

        </tr>`
     }
     document.getElementById('demo').innerHTML=cartonna;
 }
 function clearProduct(){
    productNameInput.value='';
    productPriceInput.value='';
    productCategoryInput.value='';
    productDescInput.value='';
 }

function deleteProduct(productIndex){
    productContainer.splice(productIndex,1);
    localStorage.setItem("products", JSON.stringify(productContainer) );

    dispalyProduct();
}
//  var productContainer =[
//     {name: 'oppo', price: '3000', category: 'mobile', desc: 'very goood'},
//     {name: 'toshiba', price: '5000', category: 'mobile', desc: 'very goood'}
//     {name: 'huawei', price: '3000', category: 'mobile', desc: 'good'}

//  ]
// /////////////////////////////////////////////////////////////////////////////////////////////

