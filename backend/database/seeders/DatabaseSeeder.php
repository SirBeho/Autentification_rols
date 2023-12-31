<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Person;
use App\Models\Rolpagege;
use App\Models\User;
use Illuminate\Database\Seeder;

use function Laravel\Prompts\multiselect;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void      
    {
        Person::factory()->create([
            'name' => "benjamin",
            'lastname' => "tavarez",
            'phone' => "8098892235",
            'born' =>"1998/03/13",
            
        ]);

        $user = User::factory()->create([
            'person_id'=> Person::inRandomOrder()->first()->id,
            'email' => 'admin@gmail.com',
            'password' => 'admin',
        ]);

      
        
        $this->call(PersonSeeder::class);
        $this->call(RolSeeder::class);
        $user->rol_id = 1;
        $user->save();
        $this->call(UserSeeder::class);
        $this->call(PageSeeder::class);
        $this->call(RolPageSeeder::class);
        // $this->call(LogSeeder::class);
    }
}
