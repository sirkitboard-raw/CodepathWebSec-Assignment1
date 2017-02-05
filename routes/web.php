<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Http\Request;
use App\ValidationFunctions;

Route::get('/', function () {
    $data = ["values" => [], "errors" => []];
    return view('welcome', compact('data'));
});

Route::post('/', function (Request $request) {
    $validationErrors = [];
    // dd($request->all());
    if(ValidationFunctions::validateFirstName($request->input('first_name')) === false) {
        $validationErrors['first_name'] = "First name must be between 2 - 255 characters";
    } else if(ValidationFunctions::validateFirstName($request->input('first_name')) === 0) {
        $validationErrors['first_name'] = "First name can only contain letters and the following symbols: , - ' . ";
    }

    if(ValidationFunctions::validateLastName($request->input('last_name')) === false) {
        $validationErrors['last_name'] = "Last name must be between 2 - 255 characters";
    } else if(ValidationFunctions::validateFirstName($request->input('last_name')) === 0) {
        $validationErrors['last_name'] = "Last name can only contain letters and the following symbols: , - ' . ";
    }

    if(ValidationFunctions::validateUsername($request->input('username')) === false) {
        $validationErrors['username'] = "Username must be between 8 - 255 characters";
    } else if(ValidationFunctions::validateFirstName($request->input('username')) === 0) {
        $validationErrors['username'] = "Username can only contain letters, numbers and the following symbols: _";
    } else {
        $user = DB::table('users')->where('username', '=', $request->input('username'))->first();
        if($user) {
            $validationErrors['username'] = "This username is already used, please use a different one";
        }
    }

    if(ValidationFunctions::validateEmail($request->input('email')) == false) {
        $validationErrors['email'] = "Email must be a valid email";
    }

    if(count($validationErrors) == 0) {
        DB::table('users')->insert([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'username' => $request->input('username'),
            'email' => $request->input('email')
        ]);
        return view('success');
    }

    $data = [
        "values" => $request->all(),
        "errors" => $validationErrors,
    ];
    return view('welcome', compact('data'));
});
