"use client"
import { useState } from "react"

export default function Home() {
  // state define

  
  const [toDo, setToDo] = useState([{ topic: "Start your work", id: 1 },
   ]);

   const [input_val, setInput] = useState("");

   const [id, setId] = useState(0);
// function
const  itemAdd = () => {


  let obj: any = toDo.find(item => item.id == id)

if (obj) {
  
  let new_arr = toDo.filter (item => item.id !== obj.id)

  setToDo ([...new_arr,{topic:input_val,id:id}]);
  setInput ("");
  setId(0);
  return
}
  setToDo ([...toDo,{topic:input_val,id:id}]);
  setInput ("");
  setId(0);
};

const item_Edit = (id:any) =>{
  let obj: any = toDo.find(item => item.id == id)
setInput (obj.topic);
setId (obj.id);}

const itemDelete = (id: any ) => {

  let new_arr = toDo.filter (item => item.id !== id)
  setToDo ([...new_arr]);

}

return (
  <div className="bg-violet-200	">
    <div className="max-w-4xl mx-auto p-4 bg-violet-200		">
      <h1 className="text-center text-[40px] underline">Next.js ToDo App</h1>
      {/*  start input div */}
      <div className="flex justify-between gap-2 mt-5">
        <input
        
        type="text"
        value={input_val}
           onChange={(event)=> setInput(event.target.value)}
        className="w-[55%]  bg-slate-200 text-lg p- ml-3 border-b focus:outline-none " placeholder="Write Content" />

        <input 
        type="Number"
        value={id}
        onChange={(event:any) => setId(event.target.value)}
        
        className="w-[25%]  bg-slate-200 text-lg p-2 ml-3 border-b focus:outline-none " placeholder=" put id " />


        <button  onClick={itemAdd}  className=" bg-blue-500 hover:bg-slate-800 w-[20%] text-yellow-100 p-2 rounded-md "> add more

        </button>
      </div>
      {/*  end input div */}
      {/*  heading*/}

      <h2 className="text-center text-[35px] underline mt-6">ToDo List</h2>

      {/*  Topics List*/}

      <div className="grid grid-cols-1 gap-4 mt-5">
        {/* grid item */}
        {toDo.map((item:any,index:any) => {
          return(
          <div className="bg-violet-400		 p-4" key={index}>
          <div className="flex justify-between   bg-white shadow rounded-full ">
            <span className="ml-1 my-auto">{index+1}</span>
            <span onClick={() => itemDelete (item.id)} className="mr-2  cursor-pointer my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 currentColor text-gray-800">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
            </svg>
            </span>

          </div>
          {/* Div for Data */}
          <div className="text-center underline font-bold	font-weight: 700 mt-5 text-[19px] bg-slate-100 rounded-md">{item.topic} </div>
          <div ><h2 onClick={() => item_Edit(item.id)} className="text-right  mt-2 font-bold  cursor-pointer  " key={index}>edit </h2>
          <h3 className=" text-right text-black">{item.id}</h3>
          </div>
        </div>)
        })}
        

      </div>



      {/*div for data*/}




    </div>


    </div>
  )
};
