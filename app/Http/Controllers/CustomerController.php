<?php
namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return response()->json($customers);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email',
            'phone' => 'required|string|max:15',
            'address' => 'required|string|max:500',
        ]);

        $customer = Customer::create($validatedData);
        return response()->json(['message' => 'Client créé avec succès', 'customer' => $customer]);
    }

    public function show($id)
    {
        $customer = Customer::find($id);

        if (!$customer) {
            return response()->json(['message' => 'Client non trouvé']);
        }

        return response()->json($customer);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);

        if (!$customer) {
            return response()->json(['message' => 'Client non trouvé']);
        }

        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:customers,email,' . $id,
            'phone' => 'sometimes|string|max:15',
            'address' => 'sometimes|string|max:500',
        ]);

        $customer->update($validatedData);
        return response()->json(['message' => 'Client mis à jour avec succès', 'customer' => $customer]);
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);

        if (!$customer) {
            return response()->json(['message' => 'Client non trouvé']);
        }

        $customer->delete();
        return response()->json(['message' => 'Client supprimé avec succès']);
    }
}

