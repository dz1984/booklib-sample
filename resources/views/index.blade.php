<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Book Library</title>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <div id="books">
            <form id="addBook" action="#">
                <div>
                    <label for="coverImage">封面圖檔: </label>
                    <input id="coverImage" type="file" />
                    <label for="title">書名: </label>
                    <input id="title" type="text" />
                    <label for="author">作者: </label>
                    <input id="author" type="text" />
                    <label for="releaseDate">出版日期: </label>
                    <input id="releaseDate" type="text" />
                    <label for="keywords">關鍵字: </label>
                    <input id="keywords" type="text" />
                    <button id="add">增加</button>
                </div>
            </form>
        </div>
        <script data-main="js/app.js" src="js/lib/require.js"></script>
    </body>
</html>