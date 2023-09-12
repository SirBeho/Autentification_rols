<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','logout','me']]);
        
    }

    public function login(Request $request)
    {

        $credentials = request(['email', 'password']);

        $validator = validator($request->all(), [
            'email'=> 'required|email',
            'password'=> 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }




        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Usuario o contraseña incorrecta'], 401);
        }

        return $this->respondWithToken($token);

    }

    public function me()
    {   
        $data = auth()->user();
        $data->load('person'); 
    
        return response()->json(['message' => $data]);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    



   
}