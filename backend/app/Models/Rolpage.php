<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rolpage extends Model
{
    use HasFactory;

    protected $table="rol_page";

    protected $fillable = [
       
        'page_id',
        'rol_id',
        'description',    
        'create_by',      
        'update_by' 
    ];

  



    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class, 'page_id');
    }

    public function rol(): BelongsTo
    {
        return $this->belongsTo(Rol::class, 'rol_id');
    }

    public function create_by(): BelongsTo
    {
        return $this->belongsTo(User::class, 'create_by');
    }

    public function update_by(): BelongsTo
    {
        return $this->belongsTo(User::class, 'update_by');
    }

    
}
