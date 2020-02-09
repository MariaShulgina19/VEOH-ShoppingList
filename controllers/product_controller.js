const product_model = require('../models/product-model');
const product_views = require('../views/product-views');

 const list_model = require('../models/list-model');
// const list_views = require('../views/list-views');

const get_products = (req, res, next) => {
    const user = req.user;
    const list_id = req.params.id;
    list_model.findOne({
        _id: list_id
     }).then((list) => {
        req.list = list; 

    list.populate('products')
        .execPopulate()
        .then(() => {
            console.log('list:', list); //check
            let data = {
                user_name: user.name,
                list_text: list.text, 
                list_id: list._id,//n<me??--> list_text :list.text
                products: list.products
            };
            let html = product_views.products_view(data);
            res.send(html);
        });
    });
};

const post_delete_product = (req, res, next) => {
    const user = req.user;
    const product_id_to_delete = req.body.product_id;
    const list_id_to_delete_product=req.body.list_id_to_delete_product;
    id=list_id_to_delete_product

    list_model.findOne({
        _id: list_id_to_delete_product
     }).then((list) => {
          req.list = list;

    //Remove product from list.products
    const updated_products = list.products.filter((product_id) => {
        return product_id != product_id_to_delete;
    });
    user.products = updated_products;

    //Remove product object from database
    list.save().then(() => {
        product_model.findByIdAndRemove(product_id_to_delete).then(() => {
            res.redirect('/list/' + id);
        });
    });
});
};

const get_product = (req, res, next) => {
    const product_id = req.params.id;
    product_model.findOne({
        _id: product_id
    }).then((product) => {
        let data = {
            text: product.text,
            //amount: product.amount
        };
        let html = product_views.product_view(data);
        res.send(html);
    });
};

//add product
const post_add_product = (req, res, next) => {
    const user = req.user;
    const list_id_prod= req.body.list_id_prod; 
    id=list_id_prod; 
    list_model.findOne({
        _id: list_id_prod
     }).then((list) => {
          req.list = list;

    let new_product = product_model({
        text: req.body.product , //product_name
        amount: req.body.product_amount,  // check later how to add more
        picture: req.body.image_url
    });
    new_product.save().then(() => {
        console.log('product saved');
        list.products.push(new_product);
        list.save().then(() => {
            return res.redirect('/list/'+ id);
        });
    });
});
};


module.exports.get_products = get_products;
module.exports.get_product = get_product;
module.exports.post_add_product = post_add_product;
module.exports.post_delete_product = post_delete_product;