<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class AwesomeComponentController extends BaseController
{
    public function index()
    {
        return view('index');
    }
}
