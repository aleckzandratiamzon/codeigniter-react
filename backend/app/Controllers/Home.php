<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return view('welcome_message');
    }

    public function sample()
    {
        return $this->response->setJSON(['message' => 'Hello World']);
    }
}
