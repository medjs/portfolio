export default function HeaderHero(){
    return(
        <section className="absolute top-0 flex flex-wrap w-full justify-between h-screen text-white bg-gradient-to-bl from-indigo-900 to-black items-center md:flex">
            <div className=" w-full flex justify-center bg-yellow-500 md:w-1/2">
                <p>This is image placement</p>
            </div>
            <div className="w-full flex justify-center bg-gray-500 md:w-1/2">
                <h1>Header Hero</h1>
            </div>
        </section>
    )
}