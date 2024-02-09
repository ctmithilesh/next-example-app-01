// Server Side Rendered Page 
import axios from 'axios'
import React from 'react'
import ListOfProducts from '../components/ListOfProducts';
import Image from 'next/image';

export const metadata = {
    title: "Products",
    description: "List of Products",
    keywords: ["amazon", "apple", "samsung"]
}
async function getProducts() {

    let data = null;
    await axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res.data)
            data = res
        })
        .catch(err => {
            console.log(err)
        })

    return data;
}

const Page = async () => {
    const products = await getProducts()
    const myData = products.data
    console.log('products', products)
    const productsCondition = myData != null && myData.length > 0
    return (
        <div>
            <h1>From Products Page </h1>
            {productsCondition ? myData.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4">
                    <ListOfProducts item={item} />
                </div>

            )) : null}
        </div>
    )
}

export default Page
