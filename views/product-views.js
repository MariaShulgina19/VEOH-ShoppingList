const products_view = ((data) => {
    let html = `
    <html>
    <head>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
    <div class="list-views" >
            <h1> SHOPPING LIST application </h1>
            <h2> ${data.user_name}, here is list of ${data.list_text} for you! <h2>
            <br>
            
        
            <form style="display:inline" action="go_back" method="POST">
                <button class=button2 type="submit">Back to lists </button>
            </form>
            <form style="display:inline" action="/logout" method="POST">
                <button  class=button2 type="submit">Log out</button>
                <br>
            </form>
            <p>product name:    amount:   image:<p>

             <form action="add-product" method="POST">
                <input class=input2 type="text" name="product" value="new name">
                <input class=input2 type="number" name="product_amount" value="1">
                
                <input class=input2 type="text" name="image_url" value="https://cdn.pixabay.com/photo/2020/02/05/15/19/zoo-4821484_960_720.jpg">
                
                <input type="hidden" name="list_id_prod" value="${data.list_id}">  
                <button class=button2 type="submit">Add new product</button>
            </form>
            </div>`;

    data.products.forEach((product) => { 
        html += `
         
        <div class="list-views2">
        
            <h2> ${product.text} <br> </h2>
           
            <img src="${product.picture}"  class="image1">
        

       
            Amount:<input class=input2 type="number" name="product" value="${product.amount}"> psc/kg.   
        
                <form style="display:inline" action="delete-product" method="POST">
                    <input type="hidden" name="product_id" value="${product._id}">
                    <input type="hidden" name="list_id_to_delete_product" value="${data.list_id}">
                    <button class=button2 type="submit">Delete product</button>
                    <br>
                    </form>
                    <br>
                </div>
        `;
             });
   
    html += `
       
    </html>
    </body>
    `;
    return html;
});

//if need to check one particular product, not in use
// const product_view = (data) => {
//     let html = `
//     <html>
//     <body>
//         product text: ${data.text}
//     </body>
//     </html>
//     `;
//     return html;
// };

module.exports.products_view = products_view;
// module.exports.product_view = product_view;