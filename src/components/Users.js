/* eslint-disable react/jsx-no-comment-textnodes */

/* eslint-disable array-callback-return */
export const Users =(props) =>{
    const {datas} = props
    datas.map((value,index)=>{
        console.log(index,value.login)
    })

        return (
            <div>
                {datas.map(data => {
                       <div class="px-2 flex items-center justify-between my-4">
                        <div class="w-16"><br />
                        <img class="w-12 h-12 border-white border-2 shadow rounded-full" src="{data.avatar_url}"  alt=""/>
                        </div>
                        <div class="flex-1 pl-2">
                            <div class="text-gray-800 font-semibold">
                                {data.login}
                            </div>
                            <div class="text-gray-700 font-thin">
                                {data.html_url}
                            </div>
                        </div>
                        <div class="text-gray-600">20 Posts</div>
                        </div>
                    })}
            </div>
        )

    
}