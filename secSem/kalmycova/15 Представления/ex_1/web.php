<?php
use Illuminate\Support\Facades\Route;
// !!! не забудьте подключить контроллер
use App\Http\Controllers\MainController; // ПОДКЛЮЧЕНИЕ КОНТРОЛЛЕРА


// регистрируем маршрут http://host/music
Route::get ('/music', [MainController::class, 'acMusic']);
// -------------------------------------