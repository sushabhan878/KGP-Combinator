import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartupCard = ({ post }: { post: StartupCardType }) => {
    return (
        <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-pink-400 transition-all duration-500 hover:shadow-yellow-100 hover:bg-pink-50 group'>
            <div className='flex justify-between items-center'>
                <p className='font-workSans font-medium text-[16px] bg-yellow-200 px-4 py-2 rounded-full group-hover:bg-white-100'>
                    {formatDate(post._createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-pink-500' />
                    <span className='font-workSans font-medium text-[16px] text-black'>{post.viewa}</span>
                </div>
            </div>
            <div className='flex justify-between items-center mt-5 gap-5'>
                <div className='gap-1'>
                    <Link href={`/user/${post.author?._id}`}>
                        <p className='font-workSans font-medium text-[16px] text-black line-clamp-1'>{post.author?.name}</p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                        <h3 className='font-workSans font-semibold text-[26px] text-black line-clamp-1'>{post.title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${post.author?._id}`}>
                    <img src="https://placehold.co/48x48" alt="Placeholder" height={48} width={48} className='rounded-full' />
                </Link>
            </div>
            <Link href={`/startup/${post._id}`}>
                <p className='font-workSans font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>{post.description}</p>
                <img src={post.image} alt="Placeholder" className='w-full h-[164px] rounded-[10px] object-cover' />
            </Link>
            <div className='flex justify-between items-center gap-3 mt-5'>
                <Link href={`/?query=${post.category.toLowerCase()}`}>
                    <p className='font-workSans font-medium text-[16px] text-black'>{post.category}</p>
                </Link>
                <Button className='rounded-full bg-gray-900 font-medium text-[16px] text-white px-5 py-3' asChild>
                    <Link href={`/startup/${post._id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard
