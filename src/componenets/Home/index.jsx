import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const {todo,expens,money} =useSelector((s) =>s)
 const [name,setName] = useState("")
 const [price,setPrice] = useState("")
 const dispatch = useDispatch()

const error =  (massage) => { toast.error(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

 const addToDo = () => {
    if (name.trim() === ""|| price.trim() === ""){
        error("Konul burunuz bosh orunductar kalbasyn!!!")
    }else if (money < price) {
       error("Karajat jetishsiz!!")
    } else {
     let newProduct = {
            id:todo.length ? todo [todo.length -1 ].id + 1 : 1,
            text:name,
            many: price,
        }
        dispatch({type:"ADD_TODO",payload : newProduct})
        setName("")
        setPrice("")
    }
 }
  

const deleteProduct = (data) => {
    dispatch({type : "DELETE_PRODUCT",payload: data})

}

 const onKeyDown = (e) => {
    if (e.key === "Enter"){
        addToDo()
    }
 }



    return (
 <div className='container'>

 <div className="hero">
 <div className="hero3">
        <div className="hero4">
            <h3>cash</h3>
            <h3>{money}$</h3>
        </div>
    </div>
    <div className="hero1">
        <div className="hero2">
            <h2>expenses!</h2>
            <h2>{expens}$</h2>
        </div>
    </div>
 </div>
  

     <div className="flex items-center justify-center  flex-col gap-10">
     <div className=" w-[700px] mx-auto mt-14 flex items-center justify-center flex-col gap-[10px]">
         <div class="relative z-0 w-[60%] mb-5 group ">
      <input onKeyDown={(e) => onKeyDown(e)}
       value={name}
       onChange={(e) => setName(e.target.value)}
       type="text" 
      name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label 
      for="floating_email"
       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">text</label>
        </div> 
        <div class="relative z-0 w-[60%] mb-5 group">
      <input 
      onKeyDown={(e) => onKeyDown(e)}
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      type="price" 
      name="floating_price" id="floating_price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label
       for="floating_price" 
       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
  </div>
        
  <button onClick={() => addToDo()}
   type="button" 
  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">add</button>

   </div>  
   



   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
              
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
        <tbody>
            {
                todo.map((el) => (
                    
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
                </th> */}
                <td class="px-6 py-4">
                    {el.text}
                </td>
              
                <td class="px-6 py-4">
                    {el.many}$
                </td>
                <td class="px-6 py-4 text-right">
<button  onClick={() => deleteProduct(el)}
type="button"
class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">delete</button>
</td>
</tr>
          

                ))
            }
        </tbody>

    </table>
    <ToastContainer />
</div>
     </div>
 
         </div>
    );
};

export default Home;