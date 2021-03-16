
import SearchIcon from '../search.svg'

export const Search = () => {
    return (
        <div className="bg-white col-span-1 md:col-span-2 shadow p-4 h-16 flex">
            <input className="h-8 w-screen border shadow-sm rounded p-2 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent" type="text" placeholder="Github Username" />
            <button className="bg-blue-400 h-8 flex mx-2 hover:bg-blue-300 transition-all duration-700 rounded text-white p-2 pl-4 pr-4 place-content-center">
                <img alt="" src={SearchIcon} className="mr-2 fill-current text-white" />
                <p className="font-semibold text-xs">Search</p>
            </button>
        </div>
    )
}