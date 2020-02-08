const login_view = () => {
    let html = `
    <html>
    <body>
        <h1> DREAM LIST application </h1>
        <br>
        <form action="/login" method="POST">
            <input type="text" name="user_name">
            <button type="submit">Come in</button>
        </form>
        <form action="/register" method="POST">
            <input type="text" name="user_name">
            <button type="submit">Join the team</button>
        </form>
    </body>
    <html>
    `;

    return html;
}

module.exports.login_view = login_view;