<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <!--<meta name="csrf-token" content="{{ csrf_token() }}" />-->
        <title>Book Library</title>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <div id="books">
            <form id="addBook" action="#">
                <div>
                    <label for="coverImage">CoverImage: </label>
                    <input id="coverImage" type="file" />
                    <label for="title">Title: </label><input id="title" type="text" /> <label for="author">Author: </label><input id="author" type="text" /> <label for="releaseDate">Release date: </label>
                    <input id="releaseDate" type="text" />
                    <label for="keywords">Keywords: </label>
                    <input id="keywords" type="text" />
                    <button id="add">Add</button>
                </div>
            </form>
        </div>
        <script data-main="js/app.js" src="js/lib/require.js"></script>
    </body>
</html>