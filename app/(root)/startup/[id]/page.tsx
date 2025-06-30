import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
import markdownit from "markdown-it"
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';
const md = markdownit()
export const experimental_ppr = true;
const StartupPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })
    if (!post) return notFound()
    const parsedContent = md.render(post?.pitch || "")
    return (
        <>
            <section className="w-full bg-primary min-h-[230px] flex pattern justify-center items-center flex-col py-10 px-6">
                <p className='bg-secondary px-6 py-3 font-workSans font-bold rounded-sm uppercase relative tag-tri'>{formatDate(post?._createdAt)}</p>
                <h1 className='text-uppercase bg-black px-6 py-3 font-workSans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>{post.title}</h1>
                <p className="font-workSans font-medium mt-4 text-[20px] text-white max-w-5xl text-center break-words">{post.description}</p>
            </section>
            <section className='px-6 py-10 max-w-7xl mx-auto'>
                <img src={post.image} alt="Thumbnail" className='w-full h-auto rounded-xl' />
                <div className='space-y-5 max-w-4xl mt-10 mx-auto'>
                    <div className='flex-between gap-5'>
                        <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                            <img src={post?.author?.image} alt="Avatar" width={64} height={64} className='rounded-full drop-shadow-lg' />
                            <div>
                                <p className='font-workSans font-medium text-[20px] text-black'>{post?.author?.name}</p>
                                <p className='font-workSans font-medium text-[16px] text-black-300'>@{post?.author?.username}</p>
                            </div>
                        </Link>
                        <p className='font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full'>{post?.category}</p>
                    </div>
                    <h3 className='text-[30px] font-bold text-black'>Pitch Details</h3>
                    {parsedContent ? (
                        <article className='font-workSans prose max-w-4xl break-all' dangerouslySetInnerHTML = {{__html: parsedContent}}/>
                                
                    ) : (
                        <p className='font-workSans text-black-100 text-sm font-normal'>No Details Provided.</p>
                    )}
                </div>
                <hr className='devider' />
                {/* Editor selected startups /// TODO */}
                <Suspense fallback={<Skeleton className='bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3' />}>
                    <View/>
                </Suspense>
            </section>
        </>
    )
}

export default StartupPage
