<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategorie extends Model
{
    use HasFactory;
    public function product()
    {
        return $this->belongsToMany(Product::class);
    }
    public function categorie()
    {
        return $this->belongsToMany(Categorie::class);
    }
}
