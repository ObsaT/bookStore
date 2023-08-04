import React from 'react'
import BookModel from '@/models/bookModel';
import '@/styles/globals.css'
import Image from 'next/image';
import img1 from '../../public/img1.png'
import img from '../../public/img.png'
import Link from 'next/link';
type Book = {
  book: BookModel
}
function BookDetail({ book }: Book) {
  return (
    <div className='flex w-full  items-center justify-center'>
      {/* <p>header</p> */}
      <div className='detail-container justify-center items-center p'>
        <div className='header-txt flex justify-between items-center p-4 bg-white w-full'>
          <Link href="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9478 20.1055L7.89561 12.0533L15.9478 4.00117" stroke="#313B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
          <div className='header '>Books</div>
          <div></div>
        </div>

        {/* <p>image</p> */}
        <div className='img-container p-4 justify-between items-center flex flex-col'>
          <div></div>
          <Image src={book.coverImage} height={50} width={187} alt='bookImage' />
          <svg width="50" height="6" viewBox="0 0 50 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M13.9916 2.44378e-05C15.6475 2.44378e-05 16.9847 1.34316 16.9784 3C16.972 4.65684 15.6245 5.99997 13.9686 5.99997C12.3127 5.99997 10.9754 4.65684 10.9818 3C10.9881 1.34316 12.3357 2.44378e-05 13.9916 2.44378e-05Z" fill="white" />
            <path opacity="0.5" d="M24.9908 -1.1942e-07C26.6467 -1.1942e-07 27.981 1.34312 27.971 2.99994C27.9609 4.65676 26.6104 5.99988 24.9545 5.99988C23.2986 5.99988 21.9643 4.65676 21.9744 2.99994C21.9844 1.34312 23.3349 -1.1942e-07 24.9908 -1.1942e-07Z" fill="white" />
            <path opacity="0.5" d="M47.0017 3.57408e-07C48.6576 3.57408e-07 49.9919 1.34312 49.9818 2.99994C49.9718 4.65676 48.6213 5.99988 46.9654 5.99988C45.3094 5.99988 43.9752 4.65676 43.9853 2.99994C43.9953 1.34312 45.3458 3.57408e-07 47.0017 3.57408e-07Z" fill="white" />
            <path opacity="0.5" d="M36.0002 3.57408e-07C37.6561 3.57408e-07 38.9903 1.34312 38.9803 2.99994C38.9703 4.65676 37.6197 5.99988 35.9638 5.99988C34.3079 5.99988 32.9737 4.65676 32.9837 2.99994C32.9937 1.34312 34.3442 3.57408e-07 36.0002 3.57408e-07Z" fill="white" />
            <path d="M2.99831 2.57492e-05C4.65422 2.57492e-05 5.99658 1.34317 5.99658 3.00002C5.99658 4.65687 4.65422 6.00002 2.99831 6.00002C1.34239 6.00002 0 4.65687 0 3.00002C0 1.34317 1.34239 2.57492e-05 2.99831 2.57492e-05Z" fill="white" />
          </svg>

        </div>
        {/* <p>discriptio</p> */}
        <div className='p-2'>
          <div className='font-bold'>
            {book.title}
          </div>
          <div className='text-xs'>
            Description of the book... <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className='flex justify-between pt-2 border-b-2 pb-4 border-gray-100'>
            <div className='font-bold text-red-700'>{book.discountRate}%</div>
            <div className='font-bold text-black-700'>
              {book.price} 원</div>
          </div>
          <div className='flex justify-between pt-4'>
            <div className='font-bold flex space-x-1 justify-center items-center'>
              <Image src={img} alt={'image'} /> <span>안녕 나 응애</span>  <div><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#01B99F" />
                <path d="M5.5947 8.38068L9.73969 4.19506C9.86849 4.065 10.0324 3.99997 10.2315 3.99997C10.4305 3.99997 10.5944 4.065 10.7232 4.19506C10.852 4.32512 10.9164 4.49066 10.9164 4.69166C10.9164 4.89266 10.852 5.0582 10.7232 5.18826L6.08648 9.87047C5.94597 10.0124 5.78204 10.0833 5.5947 10.0833C5.40735 10.0833 5.24343 10.0124 5.10292 9.87047L3.27631 8.02597C3.14751 7.8959 3.08311 7.73037 3.08311 7.52937C3.08311 7.32836 3.14751 7.16283 3.27631 7.03277C3.40511 6.90271 3.56904 6.83768 3.76809 6.83768C3.96715 6.83768 4.13107 6.90271 4.25987 7.03277L5.5947 8.38068Z" fill="white" />
              </svg>
              </div>
              <div className='text-gray-400 text-xs items-center'>1일전</div>
            </div>
            <div className='flex font-bold text-black-700 justify-center items-center '>
              <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="1.5" r="1.5" fill="#AFB9CA" />
                <circle cx="10.5" cy="1.5" r="1.5" fill="#AFB9CA" />
                <circle cx="1.5" cy="1.5" r="1.5" fill="#AFB9CA" />
              </svg>
            </div>
          </div>
        </div>
        {/* <p>kr</p> */}
        <div className='pl-10 text-sm'>
          <div>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
            우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
            아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
            괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
            꼭 봐주세용~!
          </div>
          <div className='flex space-x-2'>
            <div className='pt-2 flex items-center'>
              <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5003 6.89943C13.3725 6.00071 14.5872 5.48583 15.8934 5.4857L12.5003 6.89943ZM12.5003 6.89943C11.6279 6.00037 10.4132 5.4857 9.10655 5.4857C6.54389 5.4857 4.44404 7.49875 4.44404 9.99213C4.44404 12.2444 5.82703 14.274 7.45221 15.8871C9.08348 17.5064 10.9986 18.7457 12.1463 19.4185C12.2557 19.4828 12.3782 19.5143 12.5 19.5143C12.6218 19.5143 12.7442 19.4828 12.8535 19.4186L12.5003 6.89943ZM17.5479 15.8873C15.9167 17.5065 14.0015 18.7458 12.8537 19.4185L17.5479 15.8873ZM17.5479 15.8873C19.173 14.2742 20.556 12.2445 20.556 9.99213M17.5479 15.8873L20.556 9.99213M20.556 9.99213C20.556 7.49919 18.4567 5.48597 15.894 5.4857L20.556 9.99213ZM17.086 14.4095L17.2665 14.5729L17.086 14.4095C15.9476 15.6672 14.3689 16.9239 12.5003 18.0562C10.6317 16.9239 9.05317 15.6672 7.91451 14.4095C6.50392 12.8515 5.81864 11.366 5.81864 9.99213C5.81864 8.2563 7.28544 6.82894 9.10655 6.82894C10.2657 6.82894 11.3139 7.39868 11.9161 8.34836L11.9161 8.34839C12.0428 8.54813 12.265 8.66633 12.5003 8.66633C12.7352 8.66633 12.9578 8.54839 13.0844 8.34833C13.6863 7.3987 14.7348 6.82894 15.894 6.82894C17.7151 6.82894 19.1819 8.2563 19.1819 9.99213C19.1819 11.366 18.4964 12.8514 17.086 14.4095Z" fill="#AFB9CA" stroke="#AFB9CA" stroke-width="0.486919" />
                <path d="M26.6205 12.8366L25.9449 12.6631L26.2782 9.35356H29.6881V10.1342H26.9948L26.794 11.9418C26.9157 11.8718 27.0694 11.8064 27.255 11.7455C27.4437 11.6847 27.6598 11.6543 27.9033 11.6543C28.2106 11.6543 28.486 11.7075 28.7295 11.814C28.973 11.9175 29.1799 12.0666 29.3503 12.2614C29.5238 12.4561 29.6562 12.6905 29.7475 12.9644C29.8388 13.2383 29.8844 13.5441 29.8844 13.8819C29.8844 14.2014 29.8403 14.4951 29.752 14.7629C29.6668 15.0307 29.5375 15.2651 29.364 15.4659C29.1905 15.6637 28.9714 15.8174 28.7067 15.927C28.4449 16.0365 28.1361 16.0913 27.78 16.0913C27.5122 16.0913 27.2581 16.0548 27.0177 15.9817C26.7803 15.9057 26.5673 15.7915 26.3786 15.6394C26.193 15.4842 26.0408 15.2924 25.9221 15.0642C25.8065 14.8329 25.7334 14.5621 25.703 14.2517H26.5064C26.5429 14.5012 26.616 14.7112 26.7255 14.8816C26.8351 15.052 26.9781 15.1814 27.1546 15.2696C27.3342 15.3548 27.5426 15.3974 27.78 15.3974C27.9809 15.3974 28.1589 15.3624 28.3141 15.2924C28.4693 15.2225 28.6002 15.122 28.7067 14.9912C28.8132 14.8603 28.8938 14.7021 28.9486 14.5164C29.0064 14.3308 29.0353 14.1223 29.0353 13.891C29.0353 13.6811 29.0064 13.4863 28.9486 13.3067C28.8908 13.1272 28.8041 12.9705 28.6884 12.8366C28.5758 12.7026 28.4373 12.5992 28.273 12.5261C28.1087 12.4501 27.92 12.412 27.707 12.412C27.4239 12.412 27.2094 12.4501 27.0633 12.5261C26.9203 12.6022 26.7727 12.7057 26.6205 12.8366Z" fill="#919EB6" />
              </svg>

            </div>
            <div className='pt-2 flex items-center'>
              <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_1_82" maskUnits="userSpaceOnUse" x="4.79218" y="4.20819" width="16" height="16" fill="black">
                  <rect fill="white" x="4.79218" y="4.20819" width="16" height="16" />
                  <path d="M18.7023 16.2397C19.3508 15.2064 19.7173 14.0124 19.7824 12.7988C19.8482 11.5679 19.5811 10.3339 19.0352 9.22885C18.5083 8.16188 17.703 7.24957 16.7356 6.55402C15.7452 5.84164 14.5807 5.41614 13.3713 5.26268C13.0832 5.22622 12.7927 5.20859 12.5022 5.20819C10.7804 5.2118 9.12046 5.82241 7.80075 6.91462C6.54166 7.95674 5.65149 9.45242 5.34762 11.0511C5.19044 11.8796 5.21225 12.7094 5.21225 13.5468V16.8695C5.21225 17.6236 5.20458 18.378 5.21225 19.1317C5.21225 19.1437 5.21225 19.1557 5.21225 19.1677C5.21225 19.4362 5.44177 19.6641 5.71291 19.6641H11.4992C11.8823 19.6641 12.2658 19.6705 12.6488 19.6625C13.8788 19.6365 15.0975 19.3019 16.1614 18.6885C17.193 18.0939 18.0715 17.2433 18.7019 16.2393L18.7023 16.2397ZM15.4527 17.9445C15.3311 18.009 15.2078 18.0699 15.0826 18.1272C15.049 18.1424 15.0155 18.1576 14.9815 18.1721C14.9767 18.1741 14.9666 18.1785 14.9553 18.1833C14.9371 18.1905 14.9072 18.2029 14.8967 18.2073C14.8579 18.2225 14.8191 18.2378 14.7803 18.2522C14.5189 18.3508 14.251 18.4333 13.979 18.4986C13.8368 18.5331 13.6934 18.5627 13.5495 18.5876C13.4841 18.5988 13.4182 18.6088 13.3523 18.6188C13.3115 18.624 13.2703 18.6288 13.2295 18.6328C12.7616 18.6821 12.2904 18.6709 11.8209 18.6709H6.21476V13.9647C6.21476 13.2848 6.18244 12.5936 6.23456 11.9149C6.24184 11.8199 6.25113 11.725 6.26244 11.6304C6.26406 11.6184 6.26528 11.606 6.26689 11.594C6.26689 11.594 6.26689 11.594 6.26689 11.5936C6.27538 11.5375 6.28386 11.4818 6.29356 11.4257C6.32709 11.2322 6.36872 11.0399 6.41923 10.8499C6.46893 10.662 6.52711 10.4765 6.59338 10.2938C6.62449 10.2073 6.65763 10.1215 6.69279 10.0366C6.69036 10.0422 6.68793 10.0474 6.6847 10.0538C6.69237 10.0374 6.69924 10.0202 6.70652 10.0033C6.72874 9.95285 6.75138 9.90317 6.77441 9.85349C6.93644 9.50731 7.12838 9.17516 7.34738 8.86144C7.3987 8.78772 7.45163 8.7148 7.50618 8.64348C7.50254 8.64789 7.50012 8.65069 7.49568 8.6559C7.51022 8.63867 7.52396 8.62024 7.53811 8.60261C7.56922 8.56375 7.60074 8.52529 7.63266 8.48682C7.75752 8.33777 7.88925 8.19394 8.02663 8.05571C8.16079 7.92108 8.301 7.79167 8.44606 7.66867C8.51273 7.61217 8.58062 7.55768 8.64931 7.50359C8.64325 7.5076 8.6388 7.51121 8.63153 7.51641C8.64163 7.5092 8.65133 7.50159 8.66103 7.49438C8.66345 7.49237 8.66547 7.49077 8.66789 7.48877C8.67436 7.48356 8.68244 7.47795 8.68891 7.47354C8.69174 7.47154 8.69416 7.46954 8.69699 7.46753C8.74063 7.43508 8.78508 7.40303 8.82952 7.37177C9.14308 7.15101 9.47564 6.95669 9.82234 6.79201C9.90194 6.75395 9.98275 6.71829 10.064 6.68303C10.0785 6.67702 10.0935 6.67101 10.108 6.6654C10.1597 6.64497 10.2115 6.62494 10.2636 6.60571C10.447 6.53799 10.6329 6.47829 10.8216 6.42661C11.0123 6.37452 11.2051 6.33045 11.3994 6.29479C11.4928 6.27756 11.5877 6.26755 11.6811 6.24952C11.5138 6.28157 11.6754 6.25072 11.7187 6.24551C11.776 6.2391 11.8334 6.23309 11.8908 6.22828C12.094 6.21025 12.2981 6.20184 12.5022 6.20144C12.7911 6.20224 13.0788 6.22147 13.3657 6.25593C13.3705 6.25673 13.3754 6.25713 13.3802 6.25793C13.4133 6.26274 13.4461 6.26795 13.4788 6.27315C13.5536 6.28517 13.6283 6.2988 13.7027 6.31362C13.8413 6.34087 13.9786 6.37252 14.1152 6.40858C14.3896 6.4807 14.6591 6.57005 14.9221 6.67622C14.9286 6.67903 14.9355 6.68143 14.9424 6.68424C14.9638 6.69345 14.9852 6.70267 15.0066 6.71188C15.0741 6.74153 15.1408 6.77238 15.207 6.80403C15.3311 6.86373 15.4531 6.92704 15.5731 6.99395C15.816 7.12937 16.0503 7.27962 16.2746 7.44389C16.2984 7.46152 16.3223 7.47915 16.3457 7.49678C16.3497 7.49999 16.3538 7.50319 16.3578 7.506C16.4116 7.54807 16.4641 7.59094 16.5166 7.63461C16.6245 7.72476 16.7296 7.81811 16.8318 7.91467C17.0294 8.10138 17.2157 8.29971 17.3894 8.50886C17.4125 8.5369 17.4355 8.56495 17.4581 8.593C17.4622 8.59821 17.4731 8.61183 17.4832 8.62465C17.4945 8.63907 17.5078 8.6567 17.5135 8.66392C17.5353 8.69276 17.5567 8.72201 17.5781 8.75126C17.661 8.86505 17.7402 8.98124 17.8157 9.09984C17.9624 9.33062 18.0953 9.57022 18.2125 9.81662C18.242 9.87873 18.2707 9.94083 18.2982 10.0037C18.299 10.0053 18.2998 10.0069 18.3002 10.0089C18.3144 10.0442 18.3289 10.0787 18.343 10.1139C18.3939 10.2425 18.4408 10.3727 18.4832 10.5042C18.5697 10.7698 18.6388 11.0411 18.6909 11.3155C18.7043 11.3848 18.716 11.4545 18.7273 11.5243C18.7326 11.5571 18.7366 11.59 18.7419 11.6224C18.7144 11.4561 18.7398 11.6084 18.7443 11.6457C18.7613 11.7879 18.7734 11.9309 18.7811 12.074C18.7968 12.3681 18.7936 12.6633 18.771 12.957C18.7657 13.0235 18.7596 13.09 18.7524 13.1566C18.7487 13.1898 18.7451 13.2227 18.7411 13.2559C18.7402 13.2635 18.739 13.2711 18.7382 13.2792C18.7164 13.4186 18.693 13.5576 18.6639 13.6958C18.6053 13.9731 18.5285 14.2464 18.4352 14.5136C18.4137 14.5745 18.3915 14.635 18.3685 14.6951C18.3568 14.7252 18.3451 14.7552 18.3333 14.7849C18.3273 14.7997 18.2978 14.8702 18.2945 14.8786C18.2917 14.8854 18.2889 14.8914 18.2877 14.8942C18.2727 14.9279 18.2578 14.9611 18.2424 14.9944C18.2137 15.0565 18.1838 15.1182 18.1531 15.1795C18.0287 15.4275 17.8889 15.6679 17.7345 15.8987C17.6589 16.0117 17.5797 16.1227 17.4977 16.2308C17.4949 16.2349 17.4917 16.2389 17.4884 16.2429C17.4698 16.2661 17.4516 16.2889 17.4331 16.3122C17.3902 16.3647 17.3466 16.4168 17.3021 16.4684C17.1215 16.6772 16.9276 16.8751 16.7227 17.0602C16.6217 17.1516 16.5182 17.2397 16.412 17.3247C16.3901 17.3423 16.3679 17.3595 16.3457 17.3771C16.3404 17.3812 16.3352 17.3852 16.3304 17.3888C16.2722 17.4324 16.2132 17.4749 16.1534 17.5166C15.9291 17.6732 15.6951 17.8163 15.4531 17.9449L15.4527 17.9445Z" />
                </mask>
                <path d="M18.7023 16.2397C19.3508 15.2064 19.7173 14.0124 19.7824 12.7988C19.8482 11.5679 19.5811 10.3339 19.0352 9.22885C18.5083 8.16188 17.703 7.24957 16.7356 6.55402C15.7452 5.84164 14.5807 5.41614 13.3713 5.26268C13.0832 5.22622 12.7927 5.20859 12.5022 5.20819C10.7804 5.2118 9.12046 5.82241 7.80075 6.91462C6.54166 7.95674 5.65149 9.45242 5.34762 11.0511C5.19044 11.8796 5.21225 12.7094 5.21225 13.5468V16.8695C5.21225 17.6236 5.20458 18.378 5.21225 19.1317C5.21225 19.1437 5.21225 19.1557 5.21225 19.1677C5.21225 19.4362 5.44177 19.6641 5.71291 19.6641H11.4992C11.8823 19.6641 12.2658 19.6705 12.6488 19.6625C13.8788 19.6365 15.0975 19.3019 16.1614 18.6885C17.193 18.0939 18.0715 17.2433 18.7019 16.2393L18.7023 16.2397ZM15.4527 17.9445C15.3311 18.009 15.2078 18.0699 15.0826 18.1272C15.049 18.1424 15.0155 18.1576 14.9815 18.1721C14.9767 18.1741 14.9666 18.1785 14.9553 18.1833C14.9371 18.1905 14.9072 18.2029 14.8967 18.2073C14.8579 18.2225 14.8191 18.2378 14.7803 18.2522C14.5189 18.3508 14.251 18.4333 13.979 18.4986C13.8368 18.5331 13.6934 18.5627 13.5495 18.5876C13.4841 18.5988 13.4182 18.6088 13.3523 18.6188C13.3115 18.624 13.2703 18.6288 13.2295 18.6328C12.7616 18.6821 12.2904 18.6709 11.8209 18.6709H6.21476V13.9647C6.21476 13.2848 6.18244 12.5936 6.23456 11.9149C6.24184 11.8199 6.25113 11.725 6.26244 11.6304C6.26406 11.6184 6.26528 11.606 6.26689 11.594C6.26689 11.594 6.26689 11.594 6.26689 11.5936C6.27538 11.5375 6.28386 11.4818 6.29356 11.4257C6.32709 11.2322 6.36872 11.0399 6.41923 10.8499C6.46893 10.662 6.52711 10.4765 6.59338 10.2938C6.62449 10.2073 6.65763 10.1215 6.69279 10.0366C6.69036 10.0422 6.68793 10.0474 6.6847 10.0538C6.69237 10.0374 6.69924 10.0202 6.70652 10.0033C6.72874 9.95285 6.75138 9.90317 6.77441 9.85349C6.93644 9.50731 7.12838 9.17516 7.34738 8.86144C7.3987 8.78772 7.45163 8.7148 7.50618 8.64348C7.50254 8.64789 7.50012 8.65069 7.49568 8.6559C7.51022 8.63867 7.52396 8.62024 7.53811 8.60261C7.56922 8.56375 7.60074 8.52529 7.63266 8.48682C7.75752 8.33777 7.88925 8.19394 8.02663 8.05571C8.16079 7.92108 8.301 7.79167 8.44606 7.66867C8.51273 7.61217 8.58062 7.55768 8.64931 7.50359C8.64325 7.5076 8.6388 7.51121 8.63153 7.51641C8.64163 7.5092 8.65133 7.50159 8.66103 7.49438C8.66345 7.49237 8.66547 7.49077 8.66789 7.48877C8.67436 7.48356 8.68244 7.47795 8.68891 7.47354C8.69174 7.47154 8.69416 7.46954 8.69699 7.46753C8.74063 7.43508 8.78508 7.40303 8.82952 7.37177C9.14308 7.15101 9.47564 6.95669 9.82234 6.79201C9.90194 6.75395 9.98275 6.71829 10.064 6.68303C10.0785 6.67702 10.0935 6.67101 10.108 6.6654C10.1597 6.64497 10.2115 6.62494 10.2636 6.60571C10.447 6.53799 10.6329 6.47829 10.8216 6.42661C11.0123 6.37452 11.2051 6.33045 11.3994 6.29479C11.4928 6.27756 11.5877 6.26755 11.6811 6.24952C11.5138 6.28157 11.6754 6.25072 11.7187 6.24551C11.776 6.2391 11.8334 6.23309 11.8908 6.22828C12.094 6.21025 12.2981 6.20184 12.5022 6.20144C12.7911 6.20224 13.0788 6.22147 13.3657 6.25593C13.3705 6.25673 13.3754 6.25713 13.3802 6.25793C13.4133 6.26274 13.4461 6.26795 13.4788 6.27315C13.5536 6.28517 13.6283 6.2988 13.7027 6.31362C13.8413 6.34087 13.9786 6.37252 14.1152 6.40858C14.3896 6.4807 14.6591 6.57005 14.9221 6.67622C14.9286 6.67903 14.9355 6.68143 14.9424 6.68424C14.9638 6.69345 14.9852 6.70267 15.0066 6.71188C15.0741 6.74153 15.1408 6.77238 15.207 6.80403C15.3311 6.86373 15.4531 6.92704 15.5731 6.99395C15.816 7.12937 16.0503 7.27962 16.2746 7.44389C16.2984 7.46152 16.3223 7.47915 16.3457 7.49678C16.3497 7.49999 16.3538 7.50319 16.3578 7.506C16.4116 7.54807 16.4641 7.59094 16.5166 7.63461C16.6245 7.72476 16.7296 7.81811 16.8318 7.91467C17.0294 8.10138 17.2157 8.29971 17.3894 8.50886C17.4125 8.5369 17.4355 8.56495 17.4581 8.593C17.4622 8.59821 17.4731 8.61183 17.4832 8.62465C17.4945 8.63907 17.5078 8.6567 17.5135 8.66392C17.5353 8.69276 17.5567 8.72201 17.5781 8.75126C17.661 8.86505 17.7402 8.98124 17.8157 9.09984C17.9624 9.33062 18.0953 9.57022 18.2125 9.81662C18.242 9.87873 18.2707 9.94083 18.2982 10.0037C18.299 10.0053 18.2998 10.0069 18.3002 10.0089C18.3144 10.0442 18.3289 10.0787 18.343 10.1139C18.3939 10.2425 18.4408 10.3727 18.4832 10.5042C18.5697 10.7698 18.6388 11.0411 18.6909 11.3155C18.7043 11.3848 18.716 11.4545 18.7273 11.5243C18.7326 11.5571 18.7366 11.59 18.7419 11.6224C18.7144 11.4561 18.7398 11.6084 18.7443 11.6457C18.7613 11.7879 18.7734 11.9309 18.7811 12.074C18.7968 12.3681 18.7936 12.6633 18.771 12.957C18.7657 13.0235 18.7596 13.09 18.7524 13.1566C18.7487 13.1898 18.7451 13.2227 18.7411 13.2559C18.7402 13.2635 18.739 13.2711 18.7382 13.2792C18.7164 13.4186 18.693 13.5576 18.6639 13.6958C18.6053 13.9731 18.5285 14.2464 18.4352 14.5136C18.4137 14.5745 18.3915 14.635 18.3685 14.6951C18.3568 14.7252 18.3451 14.7552 18.3333 14.7849C18.3273 14.7997 18.2978 14.8702 18.2945 14.8786C18.2917 14.8854 18.2889 14.8914 18.2877 14.8942C18.2727 14.9279 18.2578 14.9611 18.2424 14.9944C18.2137 15.0565 18.1838 15.1182 18.1531 15.1795C18.0287 15.4275 17.8889 15.6679 17.7345 15.8987C17.6589 16.0117 17.5797 16.1227 17.4977 16.2308C17.4949 16.2349 17.4917 16.2389 17.4884 16.2429C17.4698 16.2661 17.4516 16.2889 17.4331 16.3122C17.3902 16.3647 17.3466 16.4168 17.3021 16.4684C17.1215 16.6772 16.9276 16.8751 16.7227 17.0602C16.6217 17.1516 16.5182 17.2397 16.412 17.3247C16.3901 17.3423 16.3679 17.3595 16.3457 17.3771C16.3404 17.3812 16.3352 17.3852 16.3304 17.3888C16.2722 17.4324 16.2132 17.4749 16.1534 17.5166C15.9291 17.6732 15.6951 17.8163 15.4531 17.9449L15.4527 17.9445Z" fill="#AFB9CA" />
                <path d="M18.7023 16.2397C19.3508 15.2064 19.7173 14.0124 19.7824 12.7988C19.8482 11.5679 19.5811 10.3339 19.0352 9.22885C18.5083 8.16188 17.703 7.24957 16.7356 6.55402C15.7452 5.84164 14.5807 5.41614 13.3713 5.26268C13.0832 5.22622 12.7927 5.20859 12.5022 5.20819C10.7804 5.2118 9.12046 5.82241 7.80075 6.91462C6.54166 7.95674 5.65149 9.45242 5.34762 11.0511C5.19044 11.8796 5.21225 12.7094 5.21225 13.5468V16.8695C5.21225 17.6236 5.20458 18.378 5.21225 19.1317C5.21225 19.1437 5.21225 19.1557 5.21225 19.1677C5.21225 19.4362 5.44177 19.6641 5.71291 19.6641H11.4992C11.8823 19.6641 12.2658 19.6705 12.6488 19.6625C13.8788 19.6365 15.0975 19.3019 16.1614 18.6885C17.193 18.0939 18.0715 17.2433 18.7019 16.2393L18.7023 16.2397ZM15.4527 17.9445C15.3311 18.009 15.2078 18.0699 15.0826 18.1272C15.049 18.1424 15.0155 18.1576 14.9815 18.1721C14.9767 18.1741 14.9666 18.1785 14.9553 18.1833C14.9371 18.1905 14.9072 18.2029 14.8967 18.2073C14.8579 18.2225 14.8191 18.2378 14.7803 18.2522C14.5189 18.3508 14.251 18.4333 13.979 18.4986C13.8368 18.5331 13.6934 18.5627 13.5495 18.5876C13.4841 18.5988 13.4182 18.6088 13.3523 18.6188C13.3115 18.624 13.2703 18.6288 13.2295 18.6328C12.7616 18.6821 12.2904 18.6709 11.8209 18.6709H6.21476V13.9647C6.21476 13.2848 6.18244 12.5936 6.23456 11.9149C6.24184 11.8199 6.25113 11.725 6.26244 11.6304C6.26406 11.6184 6.26528 11.606 6.26689 11.594C6.26689 11.594 6.26689 11.594 6.26689 11.5936C6.27538 11.5375 6.28386 11.4818 6.29356 11.4257C6.32709 11.2322 6.36872 11.0399 6.41923 10.8499C6.46893 10.662 6.52711 10.4765 6.59338 10.2938C6.62449 10.2073 6.65763 10.1215 6.69279 10.0366C6.69036 10.0422 6.68793 10.0474 6.6847 10.0538C6.69237 10.0374 6.69924 10.0202 6.70652 10.0033C6.72874 9.95285 6.75138 9.90317 6.77441 9.85349C6.93644 9.50731 7.12838 9.17516 7.34738 8.86144C7.3987 8.78772 7.45163 8.7148 7.50618 8.64348C7.50254 8.64789 7.50012 8.65069 7.49568 8.6559C7.51022 8.63867 7.52396 8.62024 7.53811 8.60261C7.56922 8.56375 7.60074 8.52529 7.63266 8.48682C7.75752 8.33777 7.88925 8.19394 8.02663 8.05571C8.16079 7.92108 8.301 7.79167 8.44606 7.66867C8.51273 7.61217 8.58062 7.55768 8.64931 7.50359C8.64325 7.5076 8.6388 7.51121 8.63153 7.51641C8.64163 7.5092 8.65133 7.50159 8.66103 7.49438C8.66345 7.49237 8.66547 7.49077 8.66789 7.48877C8.67436 7.48356 8.68244 7.47795 8.68891 7.47354C8.69174 7.47154 8.69416 7.46954 8.69699 7.46753C8.74063 7.43508 8.78508 7.40303 8.82952 7.37177C9.14308 7.15101 9.47564 6.95669 9.82234 6.79201C9.90194 6.75395 9.98275 6.71829 10.064 6.68303C10.0785 6.67702 10.0935 6.67101 10.108 6.6654C10.1597 6.64497 10.2115 6.62494 10.2636 6.60571C10.447 6.53799 10.6329 6.47829 10.8216 6.42661C11.0123 6.37452 11.2051 6.33045 11.3994 6.29479C11.4928 6.27756 11.5877 6.26755 11.6811 6.24952C11.5138 6.28157 11.6754 6.25072 11.7187 6.24551C11.776 6.2391 11.8334 6.23309 11.8908 6.22828C12.094 6.21025 12.2981 6.20184 12.5022 6.20144C12.7911 6.20224 13.0788 6.22147 13.3657 6.25593C13.3705 6.25673 13.3754 6.25713 13.3802 6.25793C13.4133 6.26274 13.4461 6.26795 13.4788 6.27315C13.5536 6.28517 13.6283 6.2988 13.7027 6.31362C13.8413 6.34087 13.9786 6.37252 14.1152 6.40858C14.3896 6.4807 14.6591 6.57005 14.9221 6.67622C14.9286 6.67903 14.9355 6.68143 14.9424 6.68424C14.9638 6.69345 14.9852 6.70267 15.0066 6.71188C15.0741 6.74153 15.1408 6.77238 15.207 6.80403C15.3311 6.86373 15.4531 6.92704 15.5731 6.99395C15.816 7.12937 16.0503 7.27962 16.2746 7.44389C16.2984 7.46152 16.3223 7.47915 16.3457 7.49678C16.3497 7.49999 16.3538 7.50319 16.3578 7.506C16.4116 7.54807 16.4641 7.59094 16.5166 7.63461C16.6245 7.72476 16.7296 7.81811 16.8318 7.91467C17.0294 8.10138 17.2157 8.29971 17.3894 8.50886C17.4125 8.5369 17.4355 8.56495 17.4581 8.593C17.4622 8.59821 17.4731 8.61183 17.4832 8.62465C17.4945 8.63907 17.5078 8.6567 17.5135 8.66392C17.5353 8.69276 17.5567 8.72201 17.5781 8.75126C17.661 8.86505 17.7402 8.98124 17.8157 9.09984C17.9624 9.33062 18.0953 9.57022 18.2125 9.81662C18.242 9.87873 18.2707 9.94083 18.2982 10.0037C18.299 10.0053 18.2998 10.0069 18.3002 10.0089C18.3144 10.0442 18.3289 10.0787 18.343 10.1139C18.3939 10.2425 18.4408 10.3727 18.4832 10.5042C18.5697 10.7698 18.6388 11.0411 18.6909 11.3155C18.7043 11.3848 18.716 11.4545 18.7273 11.5243C18.7326 11.5571 18.7366 11.59 18.7419 11.6224C18.7144 11.4561 18.7398 11.6084 18.7443 11.6457C18.7613 11.7879 18.7734 11.9309 18.7811 12.074C18.7968 12.3681 18.7936 12.6633 18.771 12.957C18.7657 13.0235 18.7596 13.09 18.7524 13.1566C18.7487 13.1898 18.7451 13.2227 18.7411 13.2559C18.7402 13.2635 18.739 13.2711 18.7382 13.2792C18.7164 13.4186 18.693 13.5576 18.6639 13.6958C18.6053 13.9731 18.5285 14.2464 18.4352 14.5136C18.4137 14.5745 18.3915 14.635 18.3685 14.6951C18.3568 14.7252 18.3451 14.7552 18.3333 14.7849C18.3273 14.7997 18.2978 14.8702 18.2945 14.8786C18.2917 14.8854 18.2889 14.8914 18.2877 14.8942C18.2727 14.9279 18.2578 14.9611 18.2424 14.9944C18.2137 15.0565 18.1838 15.1182 18.1531 15.1795C18.0287 15.4275 17.8889 15.6679 17.7345 15.8987C17.6589 16.0117 17.5797 16.1227 17.4977 16.2308C17.4949 16.2349 17.4917 16.2389 17.4884 16.2429C17.4698 16.2661 17.4516 16.2889 17.4331 16.3122C17.3902 16.3647 17.3466 16.4168 17.3021 16.4684C17.1215 16.6772 16.9276 16.8751 16.7227 17.0602C16.6217 17.1516 16.5182 17.2397 16.412 17.3247C16.3901 17.3423 16.3679 17.3595 16.3457 17.3771C16.3404 17.3812 16.3352 17.3852 16.3304 17.3888C16.2722 17.4324 16.2132 17.4749 16.1534 17.5166C15.9291 17.6732 15.6951 17.8163 15.4531 17.9449L15.4527 17.9445Z" stroke="#AFB9CA" stroke-width="0.74701" stroke-linejoin="round" mask="url(#path-1-outside-1_1_82)" />
                <path d="M11.699 12.6235C11.5935 12.1805 11.8702 11.7367 12.317 11.6321C12.7638 11.5275 13.2114 11.8019 13.3169 12.2449C13.4223 12.6879 13.1456 13.1318 12.6989 13.2363C12.2521 13.3409 11.8044 13.0665 11.699 12.6235Z" fill="#AFB9CA" />
                <path d="M15.4227 13.1973C14.9986 13.0231 14.7972 12.541 14.9728 12.1205C15.1485 11.7 15.6347 11.5003 16.0588 11.6744C16.4829 11.8486 16.6843 12.3307 16.5086 12.7513C16.333 13.1718 15.8468 13.3715 15.4227 13.1973Z" fill="#AFB9CA" />
                <path d="M9.25335 13.2603C8.7943 13.2603 8.42218 12.8913 8.42218 12.4361C8.42218 11.9809 8.7943 11.6119 9.25335 11.6119C9.7124 11.6119 10.0845 11.9809 10.0845 12.4361C10.0845 12.8913 9.7124 13.2603 9.25335 13.2603Z" fill="#AFB9CA" />
                <path d="M26.6205 12.8366L25.9449 12.6631L26.2782 9.35356H29.6881V10.1342H26.9948L26.794 11.9418C26.9157 11.8718 27.0694 11.8064 27.255 11.7455C27.4437 11.6847 27.6598 11.6543 27.9033 11.6543C28.2106 11.6543 28.486 11.7075 28.7295 11.814C28.973 11.9175 29.1799 12.0666 29.3503 12.2614C29.5238 12.4561 29.6562 12.6905 29.7475 12.9644C29.8388 13.2383 29.8844 13.5441 29.8844 13.8819C29.8844 14.2014 29.8403 14.4951 29.752 14.7629C29.6668 15.0307 29.5375 15.2651 29.364 15.4659C29.1905 15.6637 28.9714 15.8174 28.7067 15.927C28.4449 16.0365 28.1361 16.0913 27.78 16.0913C27.5122 16.0913 27.2581 16.0548 27.0177 15.9817C26.7803 15.9057 26.5673 15.7915 26.3786 15.6394C26.193 15.4842 26.0408 15.2924 25.9221 15.0642C25.8065 14.8329 25.7334 14.5621 25.703 14.2517H26.5064C26.5429 14.5012 26.616 14.7112 26.7255 14.8816C26.8351 15.052 26.9781 15.1814 27.1546 15.2696C27.3342 15.3548 27.5426 15.3974 27.78 15.3974C27.9809 15.3974 28.1589 15.3624 28.3141 15.2924C28.4693 15.2225 28.6002 15.122 28.7067 14.9912C28.8132 14.8603 28.8938 14.7021 28.9486 14.5164C29.0064 14.3308 29.0353 14.1223 29.0353 13.891C29.0353 13.6811 29.0064 13.4863 28.9486 13.3067C28.8908 13.1272 28.8041 12.9705 28.6884 12.8366C28.5758 12.7026 28.4373 12.5992 28.273 12.5261C28.1087 12.4501 27.92 12.412 27.707 12.412C27.4239 12.412 27.2094 12.4501 27.0633 12.5261C26.9203 12.6022 26.7727 12.7057 26.6205 12.8366Z" fill="#919EB6" />
              </svg>
            </div>

          </div>
          <div className='flex justify-between items-center pt-3'>
            <div className='font-bold flex space-x-1 justify-center items-center'>
              <Image src={img1} alt={'image'} /> <span>ㅇㅅㅇ 1일전</span>  <div>
              </div>
              <div className='text-gray-400 text-xs'>1일전</div>
            </div>
            <div className='font-bold text-black-700 justify-center items-center'>
              <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="1.5" r="1.5" fill="#AFB9CA" />
                <circle cx="10.5" cy="1.5" r="1.5" fill="#AFB9CA" />
                <circle cx="1.5" cy="1.5" r="1.5" fill="#AFB9CA" />
              </svg>
            </div>
          </div>
          <div className='desc pl-10 pt-1'>
            오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
            <div><svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5003 6.89943C13.3725 6.00071 14.5872 5.48583 15.8934 5.4857L12.5003 6.89943ZM12.5003 6.89943C11.6279 6.00037 10.4132 5.4857 9.10655 5.4857C6.54389 5.4857 4.44404 7.49875 4.44404 9.99213C4.44404 12.2444 5.82703 14.274 7.45221 15.8871C9.08348 17.5064 10.9986 18.7457 12.1463 19.4185C12.2557 19.4828 12.3782 19.5143 12.5 19.5143C12.6218 19.5143 12.7442 19.4828 12.8535 19.4186L12.5003 6.89943ZM17.5479 15.8873C15.9167 17.5065 14.0015 18.7458 12.8537 19.4185L17.5479 15.8873ZM17.5479 15.8873C19.173 14.2742 20.556 12.2445 20.556 9.99213M17.5479 15.8873L20.556 9.99213M20.556 9.99213C20.556 7.49919 18.4567 5.48597 15.894 5.4857L20.556 9.99213ZM17.086 14.4095L17.2665 14.5729L17.086 14.4095C15.9476 15.6672 14.3689 16.9239 12.5003 18.0562C10.6317 16.9239 9.05317 15.6672 7.91451 14.4095C6.50392 12.8515 5.81864 11.366 5.81864 9.99213C5.81864 8.2563 7.28544 6.82894 9.10655 6.82894C10.2657 6.82894 11.3139 7.39868 11.9161 8.34836L11.9161 8.34839C12.0428 8.54813 12.265 8.66633 12.5003 8.66633C12.7352 8.66633 12.9578 8.54839 13.0844 8.34833C13.6863 7.3987 14.7348 6.82894 15.894 6.82894C17.7151 6.82894 19.1819 8.2563 19.1819 9.99213C19.1819 11.366 18.4964 12.8514 17.086 14.4095Z" fill="#AFB9CA" stroke="#AFB9CA" stroke-width="0.486919" />
              <path d="M26.6205 12.8366L25.9449 12.6631L26.2782 9.35356H29.6881V10.1342H26.9948L26.794 11.9418C26.9157 11.8718 27.0694 11.8064 27.255 11.7455C27.4437 11.6847 27.6598 11.6543 27.9033 11.6543C28.2106 11.6543 28.486 11.7075 28.7295 11.814C28.973 11.9175 29.1799 12.0666 29.3503 12.2614C29.5238 12.4561 29.6562 12.6905 29.7475 12.9644C29.8388 13.2383 29.8844 13.5441 29.8844 13.8819C29.8844 14.2014 29.8403 14.4951 29.752 14.7629C29.6668 15.0307 29.5375 15.2651 29.364 15.4659C29.1905 15.6637 28.9714 15.8174 28.7067 15.927C28.4449 16.0365 28.1361 16.0913 27.78 16.0913C27.5122 16.0913 27.2581 16.0548 27.0177 15.9817C26.7803 15.9057 26.5673 15.7915 26.3786 15.6394C26.193 15.4842 26.0408 15.2924 25.9221 15.0642C25.8065 14.8329 25.7334 14.5621 25.703 14.2517H26.5064C26.5429 14.5012 26.616 14.7112 26.7255 14.8816C26.8351 15.052 26.9781 15.1814 27.1546 15.2696C27.3342 15.3548 27.5426 15.3974 27.78 15.3974C27.9809 15.3974 28.1589 15.3624 28.3141 15.2924C28.4693 15.2225 28.6002 15.122 28.7067 14.9912C28.8132 14.8603 28.8938 14.7021 28.9486 14.5164C29.0064 14.3308 29.0353 14.1223 29.0353 13.891C29.0353 13.6811 29.0064 13.4863 28.9486 13.3067C28.8908 13.1272 28.8041 12.9705 28.6884 12.8366C28.5758 12.7026 28.4373 12.5992 28.273 12.5261C28.1087 12.4501 27.92 12.412 27.707 12.412C27.4239 12.412 27.2094 12.4501 27.0633 12.5261C26.9203 12.6022 26.7727 12.7057 26.6205 12.8366Z" fill="#919EB6" />
            </svg>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center p-2 border-solid border-t-2 border-gray-100'>
          <div className='font-bold flex space-x-1 justify-center items-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1_56" className="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_56)">
                <path d="M5.00162 21.9998C4.16828 21.9998 3.45995 21.7081 2.87662 21.1248C2.29328 20.5415 2.00162 19.8331 2.00162 18.9998V4.99979C2.00162 4.16645 2.29328 3.45812 2.87662 2.87479C3.45995 2.29145 4.16828 1.99979 5.00162 1.99979H19.0016C19.835 1.99979 20.5433 2.29145 21.1266 2.87479C21.71 3.45812 22.0016 4.16645 22.0016 4.99979V18.9998C22.0016 19.8331 21.71 20.5415 21.1266 21.1248C20.5433 21.7081 19.835 21.9998 19.0016 21.9998H5.00162ZM5.00162 19.9998H19.0016C19.285 19.9998 19.5223 19.9038 19.7136 19.7118C19.9056 19.5205 20.0016 19.2831 20.0016 18.9998V4.99979C20.0016 4.71645 19.9056 4.47879 19.7136 4.28679C19.5223 4.09545 19.285 3.99979 19.0016 3.99979H5.00162C4.71828 3.99979 4.48062 4.09545 4.28862 4.28679C4.09728 4.47879 4.00162 4.71645 4.00162 4.99979V18.9998C4.00162 19.2831 4.09728 19.5205 4.28862 19.7118C4.48062 19.9038 4.71828 19.9998 5.00162 19.9998ZM6.00162 17.9998L10.0016 13.9998L11.8016 15.7748L14.0016 12.9998L18.0016 17.9998H6.00162ZM8.00162 9.99979C7.45162 9.99979 6.98095 9.80379 6.58962 9.41179C6.19762 9.02045 6.00162 8.54979 6.00162 7.99979C6.00162 7.44979 6.19762 6.97912 6.58962 6.58779C6.98095 6.19579 7.45162 5.99979 8.00162 5.99979C8.55162 5.99979 9.02262 6.19579 9.41462 6.58779C9.80595 6.97912 10.0016 7.44979 10.0016 7.99979C10.0016 8.54979 9.80595 9.02045 9.41462 9.41179C9.02262 9.80379 8.55162 9.99979 8.00162 9.99979Z" fill="#919EB6" />
              </g>
            </svg>
            <div className='text-gray-400 text-xs items-center'>댓글을 남겨주세요.</div>
          </div>
          <div className='font-bold text-black-700 items-center'>
            <div className='text-gray-400 text-xs'>등록.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail