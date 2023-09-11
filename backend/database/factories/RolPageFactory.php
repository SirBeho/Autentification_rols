<?php

namespace Database\Factories;

use App\Models\Page;
use App\Models\Person;
use App\Models\Rol;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rolpagege>
 */
class RolPageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'page_id'=>Page::inRandomOrder()->first()->id,
            'rol_id'=>Rol::inRandomOrder()->first()->id,
            'description' => fake()->text($maxNbChars = 20), 
            'create_by'=> User::inRandomOrder()->first()->id,     
            'update_by'=> User::inRandomOrder()->first()->id,   
        ];
    }
}
