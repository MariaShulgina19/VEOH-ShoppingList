const products_view = ((data) => {
    let html = `
    <html>
    <body>
        <h1> Here is note for ${data.user_name}! <h1>
        <br>
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;


    data.products.forEach((product) => { //added list id,
        html += product.text;
        html += `
            <form action="delete-product" method="POST">
                <input type="hidden" name="product_id" value="${product._id}">
                 <input type="hidden" name="product_list_id" value="${list._id}"> 
                <button type="submit">Delete product</button>
            </form>
            `;
    });

    html += `
        <form action="/add-product" method="POST">
            <input type="text" name="product">
            <button type="submit">Add product</button>
        </form>
    </html>
    </body>
    `;
    return html;
});


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