const product_model = require('../models/product-model');
const product_views = require('../views/product-views');

// const list_model = require('../models/list-model');
// const list_views = require('../views/list-views');

const get_products = (req, res, next) => {
    const user = req.user;
    user.populate('products')
        .execPopulate()
        .then(() => {
            console.log('user:', user); //check
            let data = {
                user_name: user.name,
                products: list.products
            };
            let html = product_views.products_view(data);
            res.send(html);
        });
};

const post_delete_product = (req, res, next) => {
    const user = req.user;
    const product_id_to_delete = req.body.product_id;

    //Remove product from list.products
    const updated_products = user.products.filter((product_id) => {
        return product_id != product_id_to_delete;
    });
    user.products = updated_products;

    //Remove product object from database
    list.save().then(() => {
        product_model.findByIdAndRemove(product_id_to_delete).then(() => {
            res.redirect('/');
        });
    });
};

const get_product = (req, res, next) => {
    const product_id = req.params.id;
    product_model.findOne({
        _id: product_id
    }).then((product) => {
        let data = {
            text: product.text
        };
        let html = product_views.product_view(data);
        res.send(html);
    });
};

const post_product = (req, res, next) => {
    const user = req.user;
    let new_product = product_model({
        text: req.body.product
    });
    new_product.save().then(() => {
        console.log('product saved');
        list.products.push(new_product);
        list.save().then(() => {
            return res.redirect('/');
        });
    });
};


module.exports.get_lproducts = get_products;
module.exports.get_product = get_product;
module.exports.post_product = post_product;
module.exports.post_delete_product = post_delete_product;