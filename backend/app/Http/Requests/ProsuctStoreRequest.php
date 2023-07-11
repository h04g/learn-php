<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProsuctStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if(request()->isMethod(post)){
            return [
                'name' => 'required|string|max:258',
                'image' => 'required|image|mines:jpg, png,gif,svg|max:2048',
                'description' => 'required|string'

            ];

        }else{
            return [
                'name' => 'required|string|max:258',
                'image' => 'nullable|image|mines:jpg, png,gif,svg|max:2048',
                'description' => 'required|string'
            ];

        };
    }
    public function message(){
        if (request()->isMethod('post')){
            return [
                'image.required' => 'image is required! ',
                'name.required' => 'name is required!  ',
                'description.required' => 'description is required! '
            ];
        }else{
            return [  
                'name.required' => 'name is required! ',
                'description.required' => 'description is required! '
            ];

        }
    }
}
