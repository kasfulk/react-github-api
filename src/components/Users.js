/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable array-callback-return */
export const Users = ({ data }) => {
    data.map((value, index) => {
        console.log(index, value.login)
    })

    return (
        <div className="test">
            {data.map(data => (
                <div className="px-2 flex items-center justify-between my-4">
                    <div className="w-16"><br />
                        <img className="w-12 h-12 border-white border-2 shadow rounded-full" src={data.avatar_url} alt="" />
                    </div>
                    <div className="flex-1 pl-2">
                        <div className="text-gray-800 font-semibold">
                            {data.login}
                        </div>
                        <div className="text-gray-700 font-thin">
                            {data.html_url}
                        </div>
                    </div>
                    <div className="text-gray-600">20 Posts</div>
                </div>
            ))}
        </div>
    )


}