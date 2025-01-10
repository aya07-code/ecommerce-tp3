<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Order;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        Customer::factory(10)->create();
        Product::factory(20)->create();
        Order::factory(15)->create();
    }
}
