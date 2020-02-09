const products_view = ((data) => {
    let html = `
    <html>
    <body>
        <h1> Here is list ${data.list_text} for ${data.user_name}! <h1>
        <br>
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;


    data.products.forEach((product) => { //<img src="${product.picture}"  width="100px" heigth="100px" >
        html += `<br>
        <div> 
        <p> 
        <h2> ${product.text} <br> </h2>
        <img src="${product.picture}"  width="300px" heigth="300px" >
        
         </p>
        <p>   Amount: ${product.amount} psc.   </p>
        </div>
        `
        // product.text;
        // html += `<br>`;
        // html += product.amount,
        // html += ` psc.`; //new
         html += `
        <form action="delete-product" method="POST">
        <input type="hidden" name="product_id" value="${product._id}">
        <input type="hidden" name="list_id_to_delete_product" value="${data.list_id}">
        <button type="submit">Delete product</button>
            </form>
            `;
    });
    //<input type="text" name="list_id_prod" value="${list._id}"> 
   // <input type="text" name="image_url" value="https://www.theflavor"></input>
    html += `
        <form action="add-product" method="POST">
            <input type="text" name="product">
            <input type="number" name="product_amount">
            
            <input type="text" name="image_url" value="https://cdn.pixabay.com/photo/2020/02/05/15/19/zoo-4821484_960_720.jpg">
            
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