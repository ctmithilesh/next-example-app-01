/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import axios from 'axios';
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [product, setData] = useState(null)
    const params = useParams()
    const { id } = params;
    const productCondition = product != null && product.length > 0
    useEffect(() => {

        getSingleProduct()

    }, [product != null])

    async function getSingleProduct() {
        const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(result)
        setData([result.data])

    }



    return (
        <>
            {productCondition ? product.map((item, index) => (
                <div className="shadow-xl card w-96 bg-base-100" key={index}>
                    <figure className="px-10 pt-10">
                        <Image
                            src={item.image}
                            alt="Shoes"
                            className="rounded-xl"
                            width="250"
                            height="250"
                        />
                    </figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">
                                $ {item.price}
                            </button>
    
                        </div>
                    </div>
                </div>



            )) : <span>Loading.... </span>}


        </>



    )
}

export default Page
