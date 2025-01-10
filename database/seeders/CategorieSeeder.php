<?php
use App\Models\Category;
use App\Models\Product;

Category::factory(5)->create()->each(function ($category) {
    $category->products()->createMany([
        ['name' => 'Produit 1', 'price' => 100, 'stock' => 10],
        ['name' => 'Produit 2', 'price' => 200, 'stock' => 20],
    ]);
});
