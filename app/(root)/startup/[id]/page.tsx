
import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'
export const experimental_ppr = true;
const StartupPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })
    if (!post) return notFound()
    return (
        <>
            <section className="w-full bg-primary min-h-[230px] flex pattern justify-center items-center flex-col py-10 px-6">
                <p className='bg-secondary px-6 py-3 font-workSans font-bold rounded-sm uppercase relative tag-tri'>{formatDate(post?._createdAt)}</p>
                <h1 className='text-uppercase bg-black px-6 py-3 font-workSans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>{post.title}</h1>
                <p className="font-workSans font-medium mt-4 text-[20px] text-white max-w-5xl text-center break-words">{post.description}</p>
            </section>
        </>
    )
}

export default StartupPage
