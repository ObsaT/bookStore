import '@/styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import BookModel from '@/models/bookModel'
const Book = (data: BookModel, id: number) => {
    return (
        <Link href="/This is book">
        <div className='card bg-red-200  flex flex-col border-1  justify-center items-center'>
            <div className='card-img flex justify-center items-center'>
              <Image src={data.coverImage} alt='book' width={187} height={180}   />
            </div>
            <div className='bg-white w-full p-4 space-y-2 '>
                <div className='kr'>
                레이블라우스
                </div>
                <div className='flex item-center justify-between pt-2'>
                 <div className='pr-txt'>{data.discountRate}%</div>
                 <div className='bk-price'>
                    {data.price} <span className='kr'>원</span> 
                 </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
export default Book