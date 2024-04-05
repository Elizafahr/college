<?php

namespace App\Http\Controllers;
use App\Http\UsersController;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Controllers\Controller;


class MainController extends Controller
{




    // обработчик маршрута http://hostcontroller/smth/{параметр}
    public function showEmployee()
    {
        $employee = [
            ['name' => 'Иван', 'age' => 33, 'salary' => 50000],
            ['name' => 'Олег', 'age' => 14, 'salary' => 6000],
            ['name' => 'Анна', 'age' => 22, 'salary' => 77000],
            ['name' => 'Ольга', 'age' => 23, 'salary' => 10000],
        ];


        return view('layout', ['employee' => $employee]);
    }

    public function userAge($userAge)
    {
        return view("page")->with(["userAge" => $userAge]);
    }
}
