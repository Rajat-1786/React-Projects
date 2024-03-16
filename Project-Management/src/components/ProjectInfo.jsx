import { useState } from "react";
export default function ProjectInfo({handleOnReset}){
    
    const [project, setProject] = useState({
        Title:'',
        Description:'',
        DueDate:''
    });

    function handleOnChange(fieldName,newVal){
        setProject((PrevProject) => {
            return {
                ...PrevProject,
                [fieldName]: +newVal
            }
        });
    }

    function handleOnSave(){
        //create an api to save the project details display is on the side panel use this method to call the API.
    }

    

    return (
        <div className="mt-24 text-center w-2/3">
            <form className="mt-4 text-left">
                <div className="flex justify-end">
                    <button className="w-half mr-2 px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800" onClick={handleOnReset}>Cancel</button>
                    <button className="w-half px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800" onClick={handleOnSave}>Save</button>
                </div>

                <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                <input type="title" 
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" 
                    onChange={() => handleOnChange('Title', event.target.value)}>
                </input>

                <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                <input type="text" 
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    onChange={() => handleOnChange('Description', event.target.value)}>
                </input>

                <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                <input type="date" 
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    onChange={() => handleOnChange('DueDate',event.target.value)}>
                </input>

            </form> 
        </div>
    )
}