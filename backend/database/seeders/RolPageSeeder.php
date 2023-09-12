<?php

namespace Database\Seeders;

use App\Models\Rolpage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rolpage::factory(2)->create();
    }
}
