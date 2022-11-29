<?php

namespace App\Http\Controllers\Api\Crud;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    public function list(Request $request)
    {
        $data = User::all();

        return response()->json($data);
    }
}
