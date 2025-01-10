<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    use HasFactory;
    public function product()
    {
        return $this->belongsToMany(Product::class);
    }

    public function option()
    {
        return $this->belongsToMany(Option::class);
    }
}
