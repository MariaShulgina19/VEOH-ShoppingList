const express = require('express');
const PORT = process.env.PORT || 8080;
const body_parser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

//Controllers
const auth_controller = require('./controllers/auth_controller');
const list_controller = require('./controllers/list_controller');
const product_controller = require('./controllers/product_controller');

let app = express();

app.use(body_parser.urlencoded({
    extended: true 
}));

app.use(session({
    secret: '1234qwerty',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000000
    }
}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

const is_logged_handler = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
};

//Serve Static files
app.use('/css', express.static('css'))

//Auth
app.use(auth_controller.handle_user);
app.get('/login', auth_controller.get_login);
app.post('/login', auth_controller.post_login);
app.post('/register', auth_controller.post_register);
app.post('/logout', auth_controller.post_logout);



//lists
app.get('/', is_logged_handler, list_controller.get_lists);
app.post('/delete-list', is_logged_handler, list_controller.post_delete_list);
//app.get('/list/:id', is_logged_handler, list_controller.get_list);
app.post('/add-list', is_logged_handler, list_controller.post_list);
app.post('/check-list', is_logged_handler, list_controller.post_check_list);
app.post('/list/go_back',is_logged_handler, list_controller.post_back_to_list);

//products
app.get('/list/:id', is_logged_handler, product_controller.get_products);
app.post('/list/delete-product', is_logged_handler, product_controller.post_delete_product);
//app.get('/product/:id', is_logged_handler, product_controller.get_product);
app.post('/list/add-product', is_logged_handler, product_controller.post_add_product);

app.use((req, res, next) => {
    res.status(404);
    res.send(`
        page not found
    `);
});

//Shutdown server CTRL + C in terminal
const mongoose_url = 'mongodb+srv://mariaS:MCcUDOIaDWDsnL8l@cluster0-ws0n9.mongodb.net/test?retryWrites=true&w=majority';
//const mongoose_url = 'mongodb+srv://memoappdb:kcggD3xODFWO7xZs@cluster0-i69qr.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoose_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Mongoose connected');
    console.log('Start Express server');
    app.listen(PORT);
});