<?php
namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('customer', 'products')->get();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'order_date' => 'required|date',
            'status' => 'required|string|max:50',
            'total' => 'required|numeric|min:0',
        ]);

        $order = Order::create($validatedData);

        if ($request->has('products')) {
            $order->products()->sync($request->products);
        }

        return response()->json(['message' => 'Commande créée avec succès', 'order' => $order]);
    }

    public function show($id)
    {
        $order = Order::with('customer', 'products')->find($id);

        if (!$order) {
            return response()->json(['message' => 'Commande non trouvée']);
        }

        return response()->json($order);
    }

    public function update(Request $request, $id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Commande non trouvée']);
        }

        $validatedData = $request->validate([
            'customer_id' => 'sometimes|exists:customers,id',
            'order_date' => 'sometimes|date',
            'status' => 'sometimes|string|max:50',
            'total' => 'sometimes|numeric|min:0',
        ]);

        $order->update($validatedData);

        if ($request->has('products')) {
            $order->products()->sync($request->products);
        }

        return response()->json(['message' => 'Commande mise à jour avec succès', 'order' => $order]);
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Commande non trouvée']);
        }

        $order->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}

