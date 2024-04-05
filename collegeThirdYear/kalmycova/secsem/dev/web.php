<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController; // ПОДКЛЮЧЕНИЕ КОНТРОЛЛЕРА
use App\Http\Controllers\PostController; // ПОДКЛЮЧЕНИЕ КОНТРОЛЛЕРА
use App\Http\Controllers\Page; // ПОДКЛЮЧЕНИЕ КОНТРОЛЛЕРА
use App\Http\Controllers\Test; // ПОДКЛЮЧЕНИЕ КОНТРОЛЛЕРА
use App\Http\Controllers\Employee; // ПОДКЛЮЧЕНИЕ КОНТРОЛЛЕРА
use App\Http\Controllers\UsersController;

// обработчик маршрута http://hostController/pages/all/
Route::get('/pages/all', [Page::class, 'showAll']);

// пример: http://hostcontroller/employee
Route::get('/employee', [MainController::class, 'showEmployee']);

// пример: http://hostcontroller/user/11
Route::get('/user/{userAge}', [MainController::class, 'userAge']);



// // пример: http://hostcontroller/posts
// Route::get('/posts', [UsersController::class, 'show']);






// пример: http://hostcontroller/users
Route::get('/users', [UsersController::class, 'show']);







// пример: http://hostcontroller/usersFiltr
Route::get('/usersFiltr', [UsersController::class, 'showFiltr']);



// пример: http://hostcontroller/post/all
Route::get('/post/all', [PostController::class, 'getAll']);




// пример: http://hostcontroller/post/:1
Route::get('/posts/:{id}', [PostController::class, 'getOne']);


// пример: http://hostcontroller/post/all/:id/
Route::get('/post/all/:{order?}', [PostController::class, 'getAllOrder'])->where('order', 'id|title|date');

// пример: http://hostcontroller/post/all/:id/:desc
Route::get('/post/all/:{order?}/:{dir?}', [PostController::class, 'getAllOrderSec'])
    ->where('order', 'id|title|date')
    ->where('dir', 'asc|desc');




// пример: http://hostcontroller/post/new
Route::get('/post/new', [PostController::class, 'newPost'])->name('newPost');
Route::post('/post/save', [PostController::class, 'savePost'])->name('savePost');


// пример: http://hostcontroller/posts/:1
Route::get('/posts/:{id}', [PostController::class, 'change']);



//15
// пример: http://hostcontroller/post/edit/4
Route::match(['get', 'put'], 'post/edit/{id}', [PostController::class, 'editPost']);


// // пример: http://hostcontroller/post/new/edit
// Route::get('/post/new/edit', [PostController::class, 'newPost'])->name('newPost');
// Route::post('/post/save', [PostController::class, 'savePost'])->name('savePost');

//15
// пример: http://hostcontroller/post/del/:4
Route::get('/post/del/:{id}', [PostController::class, 'delPostSec']);


//15
// пример: http://hostcontroller/post/deleted
Route::get('/post/deleted', [PostController::class, 'getDeletedPost']);

//15
// пример: http://hostcontroller/post/deleted/:117
Route::get('/post/deleted/:{id}', [PostController::class, 'restorePost']);

