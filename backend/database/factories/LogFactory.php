<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Log>
 */
class LogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            
            'description' => fake()->text($maxNbChars = 10),
            'user_id'=>User::inRandomOrder()->first()->id,
            'ip' => fake()->ipv4(), 
            'so' => fake()->safeColorName(), 
            'browser' => fake()->userAgent()
        ];
    }
}
