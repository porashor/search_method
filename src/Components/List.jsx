import React, { useState } from 'react'
import { data } from '../data/data'

const List = () => {
    const [search, setSearch] = useState("")
    const stFa = search
    function filttr(item){
        console.log(item)
        console.log(search.toLowerCase())
        return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search)
    }
  return (
    <div className='w-[70%] mx-auto py-10 px-4 bg-black/10'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search' />
        <table className='border border-yellow-500 w-full'>
            <tbody>
            <tr className='border border-yellow-500'>
                <th className='border border-yellow-500'>Name</th>
                <th className='border border-yellow-500'>Email</th>
                <th className='border border-yellow-500'>Phone</th>
            </tr>
            {data.filter(filttr).map((item)=>(
            <tr key={item.id} className='border border-yellow-500'>
                <td className='border border-yellow-500'>{item.first_name + " " + item.last_name}</td>
                <td className='border border-yellow-500'>{item.email}</td>
                <td className='border border-yellow-500'>{item.phone}</td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default List
