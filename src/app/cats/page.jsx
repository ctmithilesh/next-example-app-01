'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [catImg, setData] = useState(null)

  useEffect(() => {
    fetchCat()
  }, [])

  async function fetchCat() {
    const result = await axios.get('https://api.thecatapi.com/v1/images/search')
    console.log(result.data)
    setData(result.data)
  }
  const catCondition = catImg != null && catImg.length > 0

  return (
    <div>
      <h3>Cat Image </h3>
      {catCondition ? catImg.map((item, index) => (
        <div key={index}>
          <Image
            src={item.url}
            width="250"
            height="250"
            alt="img"
          />
        </div>

      )) : <span>loading....</span>}

      <button onClick={() => fetchCat()} class="btn btn-primary">
        Get Cat Image
      </button>
    </div>
  )

}

export default Page
