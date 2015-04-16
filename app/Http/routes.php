<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use App\Book;

$app->get('/', function() use ($app) {
	return view('index');
});


$app->get('/api/status', function() 
{
    return response()->json([
        'version' => '0.0.1', 
        'status' => 'working'
    ]);
});

$app->get('books', function() 
{
    $books = Book::all();

    return response()->json($books);
});

$app->get('books/{id}', function($id)
{
    $book = Book::find($id);

    return response()->json($book);
});

$app->post('books', function() 
{
    $target_path = 'upload/images/';
    $book = new Book;
    // TODO : move the upload file to images folder
    $file_name = md5(rand());

    if (Request::hasFile('coverImage')) {
        $upload_file = Request::file('coverImage');
        $ext_file_name = $upload_file->getClientOriginalExtension();
        $file_name = "$file_name.$ext_file_name" ;

        $upload_file->move($target_path,$file_name);
    }
    $book->coverImage = $target_path.$file_name;
    $book->title = Request::input('title');
    $book->author = Request::input('author');
    $book->releaseDate = Request::input('releaseDate');

    $book->save();

    return response()->json($book);
});

$app->put('books/{id}', function($id)
{
    $book = Book::find($id);

    $book->title = Request::input('title');
    $book->author = Request::input('author');
    $book->releaseDate = Request::input('releaseDate');

    $book->save();

    return response()->json($book);
});

$app->delete('books/{id}', function($id)
{
    $book = Book::find($id);

    $book->delete();

    return '';
});


