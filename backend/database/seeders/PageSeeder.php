<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        

        Page::factory()->create([
            'url'=> "/person",
            'name' => "Person",
            'description'=>" ",
            'icon' => "users",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);

        Page::factory()->create([
            'url'=> "/log",
            'name' => "Log",
            'description'=>" ",
            'icon' => "nota",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);

        Page::factory()->create([
            'url'=> "/user",
            'name' => "User",
            'description'=>" ",
            'icon' => "myprofile",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);

        Page::factory()->create([
            'url'=> "/link",
            'name' => "Link",
            'description'=>" ",
            'icon' => "link",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);

        Page::factory()->create([
            'url'=> "/rol",
            'name' => "Rol",
            'description'=>" ",
            'icon' => "permissions",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);

        Page::factory()->create([
            'url'=> "https://github.com/SirBeho?tab=repositories",
            'name' => "GitHub",
            'description'=>" ",
            'icon' => "github",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);
        Page::factory()->create([
            'url'=> "https://www.linkedin.com/in/benjamin-tavarez-cruceta-052aa623b/",
            'name' => "Linkedin",
            'description'=>" ",
            'icon' => "linkedin",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);
        Page::factory()->create([
            'url'=> "https://www.freelancer.es/u/BenjaminTavarez",
            'name' => "FreeLancer",
            'description'=>" ",
            'icon' => "facebook",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);
        Page::factory()->create([
            'url'=> "https://github.com/SirBeho/Autentification_rols",
            'name' => "Autentification",
            'description'=>" ",
            'icon' => "github",
            'type' => " ",
            'create_by'=> 1,      
            'update_by'=> 1 
        ]);
    }
}
