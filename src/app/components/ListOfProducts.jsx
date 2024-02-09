import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListOfProducts = ({ item }) => {
    return (
        <div className="shadow-xl card w-96 bg-base-100">
            <figure>
                <Image
                    src={item.image}
                    alt="Shoes"
                    width="250"
                    height="250"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="justify-end card-actions">
                    <Link className="btn btn-primary" href={`/products/${item.id}`}>
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListOfProducts
