const login_view = () => {
    let html = `
    <html>
    <body>
        <div class="auth-views">
            <h1> SHOPPING LIST application </h1>
            <br>
                <form action="/login" method="POST">
                    <input type="text" name="user_name">
                    <button type="submit">Come in</button>
                </form>

                <form action="/register" method="POST">
                      <input type="text" name="user_name">
                      <button type="submit">Register me</button>
                </form>
        </div>
    </body>
    <html>
    `;

    return html;
}

module.exports.login_view = login_view;