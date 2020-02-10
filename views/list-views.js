const lists_view = ((data) => {
    let html = `
    <html>
    <head>
    <link rel="stylesheet" href="/css/style.css">
    </head> 
    <body>
         <div class="list-views" >

            <h1> SHOPPING LIST application </h1>
            
            <h2> Welcome  ${data.user_name}! <h2>
           
           
            <form  style="display:inline" action="/add-list" method="POST">
                <input class=input2 type="text" name="list" value="new list name">
                <button class=button2 type="submit">Add new list</button>
            </form>
            <form  style="display:inline" action="/logout" method="POST">
                <button class=button2 type="submit">Log out</button>
            </form>
            <h2> All lists: <h2>
        </div>
        `;

        
    data.lists.forEach((list) => {
        html += `
        
        <div class="list-views2" > 
        
        <h3> ${list.text} <br> </h3>
        
        
        
            <form  style="display:inline" action="check-list" method="POST">
                <input type="hidden" name="list_id_check" value="${list._id}">
                <button class=button3 type="submit">Check list</button>
            </form>
            
            <form style="display:inline" action="delete-list" method="POST">
                <input type="hidden" name="list_id" value="${list._id}">
                <button  class=button3 type="submit">Delete list</button>
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


const list_view = (data) => {
    let html = `
    <html>
    <body>
        List text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

module.exports.lists_view = lists_view;
module.exports.list_view = list_view;