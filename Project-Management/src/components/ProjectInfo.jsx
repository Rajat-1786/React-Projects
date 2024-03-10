export default function ProjectInfo({handleOnReset}){
    return (
        <div className="mt-24 text-center w-2/3">
            <button className="w-full text-right px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" onClick={handleOnReset}>Save</button>
            <form className="mt-4 text-left">
                <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                <input type="title" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ></input>
                <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                <input type="text" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
                <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                <input type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
            </form> 
        </div>
    )
}