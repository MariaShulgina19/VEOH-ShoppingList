const products_view = ((data) => {
    let html = `
    <html>
    <body>
        <h1> SHOPPING LIST application </h1>
         <h2> ${data.user_name}, here is list of ${data.list_text} for you! <h2>
         <br>
            <form style="display:inline" action="/logout" method="POST">
                <button type="submit">Log out</button>
            </form>
            
            <form style="display:inline" action="go_back" method="POST">
                <button type="submit">Back to lists </button>
            </form>`;


    data.products.forEach((product) => { //<img src="${product.picture}"  width="100px" heigth="100px" >
        html += `<br>
        <div> 
        <p> 
            <h2> ${product.text} <br> </h2>
            <img src="${product.picture}"  width="100px" heigth="100px" >
        
         </p>
        <p>   Amount: ${product.amount} psc.   </p>
        </div>
        `
        
         html += `
        <form action="delete-product" method="POST">
        <input type="hidden" name="product_id" value="${product._id}">
        <input type="hidden" name="list_id_to_delete_product" value="${data.list_id}">
        <button type="submit">Delete product</button>
            </form>
            `;
    });
   
    html += `
        <h2> Add new product:  <h2>
        <form action="add-product" method="POST">
            product name:<input type="text" name="product">
            amount: <input type="number" name="product_amount">
            
            image:<input type="text" name="image_url" value="https://cdn.pixabay.com/photo/2020/02/05/15/19/zoo-4821484_960_720.jpg">
            
            <input type="hidden" name="list_id_prod" value="${data.list_id}">  
            <button type="submit">Add product</button>
        </form>
    </html>
    </body>
    `;
    return html;
});

//if need to check one particular product, not in use
const product_view = (data) => {
    let html = `
    <html>
    <body>
        product text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

module.exports.products_view = products_view;
module.exports.product_view = product_view;