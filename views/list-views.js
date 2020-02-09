const lists_view = ((data) => {
    let html = `
    <html>
    <body>
        <h1> Welcome dear  ${data.user_name}! <h1>
        <br>
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;


    data.lists.forEach((list) => {
        html += ` <div> 
        <p> 
        <h2> ${list.text} <br> </h2>
        
        
        
        <form style="display:inline" action="check-list" method="POST">
            <input type="hidden" name="list_id_check" value="${list._id}">
            <button type="submit">Check list</button>
        </form>

        <form style="display:inline" action="delete-list" method="POST">
            <input type="hidden" name="list_id" value="${list._id}">
            <button type="submit">Delete list</button>
        </form>
            `;
    });

    html += `
        <form action="/add-list" method="POST">
            <input type="text" name="list">
            <button type="submit">Add list</button>
        </form>
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