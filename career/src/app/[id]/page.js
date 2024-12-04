'use client'


import { useParams } from "next/navigation";

const Page = () => {

    const params = useParams();

    console.log(params)

    return (
        <div>
        here {params['id']}
        </div>
    )
}

export default Page;