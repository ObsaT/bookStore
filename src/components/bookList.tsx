
import { useRouter } from 'next/navigation'
import Book from '@/components/book'
import { bookListSelector } from "@/app/state/selector/bookSelector";
import { userState } from "@/app/state/atoms/bookState";
import Image from "next/image";
import { useRecoilValue } from 'recoil';
const BookList = () => {
  const books = useRecoilValue(bookListSelector);
  const userImage = useRecoilValue(userState);
  const { data } = books;
  const router = useRouter()
  const refresh = () => {
    router.replace('/');
  };
  return (
    <>
      <div>
        <div className="flex bg-white md:py-4 p-4 md:p-0 w-full  justify-between">
          <div className="flex justify-center"></div>
          <div className="flex justify-center items-center">
            <span className='header-txt'>Books</span>
          </div>
          <button onClick={refresh} className="flex justify-center pr-2" >
            <div className="flex rounded-full w-30 h-30 overflow-hidden bg-red-200">
              <Image src={userImage}  width={30} height={30} alt="userimage" / >
            </div>
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2 w-full justify-center  items-center">
            {data.map((dt, index) => {
              return (<div key={index}>
                <Book {...dt} />
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )

}
export default BookList
