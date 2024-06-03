import React from "react"
import {BsFillTrashFill} from "react-icons/bs"

const todo = () => {
    return (
        <>
        <div className="flex flex-col m-auto p-10 pb-0 items-center">
            <h1 className="text-white text-3xl font-semibold">Chores ToDo List</h1>
            <div>
                <ul className="text-white flex flex-col items-right justify-center p-10 pb-0 font-medium">

                    <li className="flex flex-row justify-between items-center mb-2">
                        <div className="space-x-4">
                            <input type="checkbox" id="first" name="first" className="appearance-none w-4 h-4 bg-transparent border-2 rounded border-emerald-500 checked:appearance-auto"/>
                            <label for="first">Create Guest Experience mobile check-in</label>
                        </div>
                        <BsFillTrashFill className="fill-red-400 border-2 rounded border-red-400 p-1 w-8 h-8"/>
                    </li>

                    <li className="flex flex-row justify-between items-center mb-2">
                        <div className="space-x-4"> 
                            <input type="checkbox" id="second" name="second" className="appearance-none w-4 h-4 bg-transparent border-2 rounded border-emerald-500 checked:appearance-auto"/>
                            <label for="second">Document current CI/CD process</label>
                        </div>
                        <BsFillTrashFill className="fill-red-400 border-2 rounded border-red-400 p-1 w-8 h-8"/>
                    </li>

                    <li className="flex flex-row justify-between items-center mb-2">
                        <div className="space-x-4">
                            <input type="checkbox" id="third" name="third" className="appearance-none w-4 h-4 bg-transparent border-2 rounded border-emerald-500 checked:appearance-auto"/>
                            <label for="third">Perform Code Review for final Pillow-Talk release</label>
                        </div>
                        <BsFillTrashFill className="fill-red-400 border-2 rounded border-red-400 p-1 w-8 h-8"/>
                    </li>

                    <li className="flex flex-row justify-between items-center mb-2">
                        <div className="space-x-4">
                            <input type="checkbox" id="fourth" name="fourth" className="appearance-none w-4 h-4 bg-transparent border-2 rounded border-emerald-500 checked:appearance-auto"/>
                            <label for="fourth" >Implement new Color Palette from Design Team</label>
                        </div>
                        <BsFillTrashFill className="fill-red-400 border-2 rounded border-red-400 p-1 w-8 h-8"/>
                    </li>

                    <li className="flex flex-row justify-between items-center mb-2">
                        <div className="space-x-4">
                            <input type="checkbox" id="fifth" name="fifth" className="appearance-none w-4 h-4 bg-transparent border-2 rounded border-emerald-500 checked:appearance-auto"/>
                            <label for="fifth" >Fix image uploading process for guest check-in</label>
                        </div>
                        <BsFillTrashFill className="fill-red-400 border-2 rounded border-red-400 p-1 w-8 h-8"/>
                    </li>

                    <li className="flex flex-row justify-between items-center mb-2">
                        <div className="space-x-4">
                            <input type="checkbox" id="sixth" name="sixth" className="appearance-none w-4 h-4 bg-transparent border-2 rounded border-emerald-500 checked:appearance-auto"/>
                            <label for="sixth">Provide on-boarding documentation</label>
                        </div>
                        <BsFillTrashFill className="fill-red-400 border-2 rounded border-red-400 p-1 w-8 h-8"/>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default todo