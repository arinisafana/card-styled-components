
const from = () => {
    return (
    <>
        <div className="flex flex-col items-center justify-center p-10">
                <h2 className="text-white text-3xl font-medium">Done: 0</h2>
            <div className="flex flex-col items-right justify-center">
                <p className="text-white">Add todo</p>
                <input type="text" className="w-96 bg-transparent border rounded border-gray-200 mb-1"/>
                <button className="bg-teal-200 w-fit px-2 py-1 rounded">
                    ADD TASK
                </button>
            </div>
        </div>
    </>
    )
}

export default from