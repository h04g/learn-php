<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use App\Http\Requests\ProductStoreRequest;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Product::all();

        return response()->json([
            'products' => $products
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        //
        try{
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            // Create Product
            Product::create([
                'name' => $request->name,
                'image'=> $imageName,
                'description' => $request->description,

            ]);

            //Save Image IN Storage Folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            return response()->json([
                'message'=>"Product Successfully Create"
            ]);


        }catch(\Exception $e){
            return response()->json([
                'message'=> 'Something went wrong'
            ], 500);

        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        //Product Deatils
        $product = Product::find($id);
        if(!$product){
            return response()->json([
                'message'=> 'Products Not Found'
            ],404);


           
        }
        return response()->json([
            'product'=> $product
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductStoreRequest $request, $id)
    {
        //
        try {
            //Find products
            $product = Product::find($id);
            if(!$product){
                return response()->json([
                    'message'=> 'Product Not Found'
                ], 404);
            }

            echo "request: $request->name";
            echo "description: $request->description";

            $product->name = $request->name;
            $product->description = $request->description;



            return response()->json([
                'message'=> 'Product Updated'
            ], 200);

        } catch (\Exception $e){
            return response()->json([
                'message'=> 'Something went wrong'
            ], 500);
        }

        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
