import React from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const GeneratePage = async ({ params, searchParams }) => {
const data = await getData()
console.log('data', data);

  return (
    <div>
      <h1>GeneratePage</h1>
      <div>
        <p>Industry type: {params.slug}</p>
        <p>Keyword: {searchParams.keyword}</p>
        <p>Naming style: {searchParams.namingStyle}</p>
      </div>

      <div>
        {data.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GeneratePage