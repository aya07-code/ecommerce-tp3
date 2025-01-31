<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('order_details', 'order_products');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('order_products', 'order_details');
    }
};
