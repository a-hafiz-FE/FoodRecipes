import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import {
  createNewProduct,
  fetchAllProducts,
  deleteProduct,
  updateProduct,
} from '../../Services/apiServices'

const Products = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const mutation = useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      // show success toast
      toast("Created Product", {
        duration: 2000,
        position: 'top-right',
        style: {
          backgroundColor: "#60dc78",
          color: "#000",
          padding: 20,
        },
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },

        // Additional Configuration
        removeDelay: 1000,

        // Toaster instance
        toasterId: 'default',
      });
    },
    onError: (error) => {
      // show error toast
    }
  })

  const mutationDelete = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => {
      // show success toast
      toast(`Product Deleted`, {
        duration: 2000,
        position: 'top-right',
        style: {
          backgroundColor: "#60dc78",
          color: "#000",
          padding: 20,
        },
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },

        // Additional Configuration
        removeDelay: 1000,

        // Toaster instance
        toasterId: 'default',
      });
    },
  });

  const mutationUpdate = useMutation({
    mutationFn: (id) => updateProduct(id),
    onSuccess: (id) => {
      // show success toast
      toast(`Product ${id} Updated`, {
        duration: 2000,
        position: 'top-right',
        style: {
          backgroundColor: "#60dc78",
          color: "#000",
          padding: 20,
        },
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },

        // Additional Configuration
        removeDelay: 1000,

        // Toaster instance
        toasterId: 'default',
      });
    },
  });

  const { data: products, error } = useQuery({
    queryKey: ["productsData"],
    queryFn: fetchAllProducts,
    select: (res) => res.products ?? [],
  });

  console.log(products)


  return (
    <div className='bg-gray-300'>
      <Toaster />

      <section className='flex justify-center'>
        <section className='bg-gray-400 rounded-2xl p-10 flex flex-col gap-4 items-center justify-center'>
          <input
            type="text"
            className='bg-white rounded-2xl px-4 py-2'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className='bg-white rounded-2xl px-4 py-2'
            placeholder='Number'
            value={number}
            onChange={(e) => setNumber(e.target.value)} />
          {
            <button
              type='submit'
              className='cursor-pointer border border-amber-100 mt-10 hover:bg-amber-300 hover:border-amber-700 box-border rounded-2xl p-2 bg-amber-500'
              onClick={() => mutation.mutate({ id: new Date().toDateString, name: name, number: parseInt(number, 10) })}
            >
              Create Product
            </button>
          }
        </section>
      </section>

      <section className='grid grid-cols-3 gap-8 px-20 pt-10 pb-40'>
        {products?.map(product => (
          <div key={product.id} className='bg-gray-200 flex flex-col justify-between rounded-2xl p-2 border border-gray-800'>
            <div className='border rounded-2xl mb-2 bg-white/50'>
              <img src={product.thumbnail} alt="thumnail" className='' />
            </div>
            <h4 className='text-start text-2xl'>{product.title}</h4>
            <p className='text-red-600 mb-2'>{product.price}</p>
            <p className='text-black/40 text-sm'>{product.description}</p>

            <div className='flex mt-4 justify-between'>
              <button
                className='border rounded-lg px-6 py-1 cursor-pointer bg-gray-400'
              >
                Edit
              </button>
              <button
                className='border rounded-lg px-4 py-1 cursor-pointer bg-red-500/50'
                onClick={() => mutationDelete.mutate(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Products