import React from 'react'

async function useFetch() {
  let data = await fetch('https://dummyjson.com/products');
  return data.json();
}

export default useFetch
