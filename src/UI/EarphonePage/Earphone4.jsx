import React, { useContext, useState } from 'react'
import CustomBtn from '../../ReusableComponent/CustonBtn';
import { TbCurrencyNaira } from "react-icons/tb";
import { AppContext } from '../../ContextFolder/MyContext';
import toast, {Toaster} from 'react-hot-toast'
function Earphone4() {

  const { addToCart } = useContext(AppContext);
    const productlist = [/* your product data */
        {
          id:1,
          name:'JBL E55BT',
          description:'Wireless over-ear headphones',
          image:'https://eu.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwb856560e/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.jpg?sw=626&sh=626&sm=fit&sfrm=png',
          price:'$'
        },
    
        {
          id:2,
          name:'SONY HEADPHONE WIRELESS BLUE CH720N/L',
          description:'Sony’s lightest Wireless Noise-canceling headband ever.',
          image:'https://www.jamarahome.com/cdn/shop/files/6F13B01D-1B79-4954-970A-CA5AE4855920.png?v=1723950525&width=800',
          price:'139,999.00'
        },
    
    
        {
          id:3,
          name:'JBL Tune 510BT',
          description:'Wireless on-ear headphones',
          image:'https://eu.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw322923d2/JBL_TUNE_510BT_Product Image_Hero_White.jpg?sw=626&sh=626&sm=fit&sfrm=png',
          price:'$'
        },
    
        {
          id:4,
          name:'SONY HEADPHONE WIRELESS WHITE WH-CH520/L',
          description:'Wireless on-ear headphones',
          image:'https://www.jamarahome.com/cdn/shop/files/SONY_HEADPHONE_3.jpg?v=1723551163&width=1080',
          price:'75,999.00'
        },
    
    
        {
          id:5,
          name:'JBL Tune 600BTNC',
          description:'Wireless, on-ear, active noise-cancelling headphones.',
          image:'https://eu.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwef302dd1/600BTNC_Hero_Navy-1605x1605px.jpg?sw=626&sh=626&sm=fit&sfrm=png',
          price:'$'
        },
    
        {
          id:6,
          name:'CANYON HEADSET/ BLUETOOTH /BTHS-3/ BEIGE',
          description:'Wireless, on-ear, active noise-cancelling headphones.',
          image:'https://www.jamarahome.com/cdn/shop/files/CANYONHEADSET_BLUETOOTH_BTHS-3_BEIGE_90e6e33e-710d-4978-881e-aae6ecf6bb03.webp?v=1729760693&width=1024',
          price:'22,999.00'
        },
    
    
        {
          id:7,
          name:'JBL Tune 750BTNC',
          description:'Wireless Over-Ear ANC Headphones',
          image:'https://eu.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwaf3b0fbc/JBL_TUNE_750BTNC_Coral_Hero.jpg?sw=626&sh=626&sm=fit&sfrm=png',
          price:'$'
        },
    
        {
          id:8,
          name:'ORAIMO HEADSET BOOM POP BLACK OEB-H89D',
          description:'Headphones form factor: Over Ear',
          image:'https://www.jamarahome.com/cdn/shop/files/ORAIMOHEADSETBOOMPOPBLACKOEB-H89D.jpg?v=1708419600&width=368',
          price:'35,999.00'
        },
    
    
        {
          id:9,
          name:'ANKER HEADSET SPACE Q45 BLACK',
          description:'98% Less Noise for Your Journey: ',
          image:'https://www.jamarahome.com/cdn/shop/files/ANKER8.jpg?v=1724768009&width=1080',
          price:'160,999.00'
        },
    
        {
          id:10,
          name:'JBL HEADSET TUNE 770 BLUE',
          description:'JBL HEADSET TUNE 770 BLUE ',
          image:'https://www.jamarahome.com/cdn/shop/files/JBLHEADSETTUNE770BLUE.jpg?v=1708156963&width=492',
          price:'120,999.00'
        },
    
        {
          id:11,
          name:'SONY HEADPHONE WIRELESS BLUE WH-CH520/E',
          description:'360 Reality Audio compatible so you can fully immerse yourself in sound all around you. ',
          image:'https://www.jamarahome.com/cdn/shop/files/SONY_HEADPHONE_WIRELESS_BLUE_WH-CH520_E.jpg?v=1731338798&width=1080',
          price:'75,999.00'
        },
    
        {
          id:12,
          name:'MS-881A Bluethooth Wireless Headset (Light Blue)',
          description:'MS-881A Headphones with Bluetooth,',
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/7728362/1.jpg?2897',
          price:'13,100',
          price2:'15,000'
    
        },
    
    
        {
          id:13,
          name:'P9 Headphone Wireless Bluetooth Stereo Foldable - Green',
          description:'P9 Wireless Headphone Bluetooth Sport Stereo OverEar Foldable Headset   ',
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/7601553/1.jpg?7128',
          price:'7,390',
          price2:'12,000'
    
        },
    
        {
          id:14,
          name:'P9 Headphone Wireless Bluetooth Stereo Foldable - White',
          description:'P9 Wireless Headphone Bluetooth Sport Stereo OverEar Foldable Headset   ',
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/4957053/1.jpg?5358',
          price:'8,000',
          price2:'15,000'
    
        },
    
        {
          id:15,
          name:'Baseus Encok D02 Pro Wireless Over-Ear Headphones Black',
          description:'Baseus Encok D02 Pro Wireless Over-Ear Headphones Black  ',
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/2990642/1.jpg?4596',
          price:'29,000',
          price2:'45,000'
    
        },
    
    
        {
          id:16,
          name:'Zealot B38 Wireless BT Headphones Over Ear Noise Canceling',
          description:'Zealot B38 Wireless BT Headphones Over Ear Noise Canceling  ',
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/6508372/1.jpg?1655',
          price:'20,942',
          price2:'39,457'
    
        },
    
        {
          id:17,
          name:'Baseus Encok D02 Pro Wireless Over-Ear Headphones Black',
          description:'Baseus Encok D02 Pro Wireless Over-Ear Headphones Black  ',
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/2990642/1.jpg?4596',
          price:'29,000',
          price2:'45,000'
    
        }
      ];
    
      // Pagination state
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 12;
    
      // Calculate total pages
      const totalPages = Math.ceil(productlist.length / itemsPerPage);
    
      // Get current page items
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = productlist.slice(indexOfFirstItem, indexOfLastItem);
    
      const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
  return (
    <div>
 {/* Product Grid */}
 <div className="min-h-[500px] w-full grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {currentItems.map((item) => (
          <div key={item.id} className="min-h-[400px] md:h-[520px] bg-slate-200 p-2 relative">
            <div className="min-h-[60px] w-full flex items-center font-bold">
              <p>{item.name}</p>
            </div>
            <div className="h-[200px] md:h-[320px] w-full bg-[green]">
              <img src={item.image} height="100%" width="100%" alt="" />
            </div>
            <div className="h-[60px] w-full flex items-center">
              <p className="flex items-center font-bold">
                <TbCurrencyNaira />
                {item.price}
               
                <span className=' ml-2 text-slate-400 flex items-center'> <TbCurrencyNaira /> <del >{item.price2}</del></span>
               
              </p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0">
              <div className="btnparent h-[100%] w-full relative">
                <CustomBtn
                 onClick={() => {
                  toast.success(`${item.name} successfuly added to cart`);
                  addToCart(item)
                 }}
                  label="ADD TO CART"
                  className="btn1 h-[50px] w-[80%] md:w-[60%] bg-btncolor hover:bg-btnactive rounded-[40px] translate-x-4 md:translate-x-[40%]"
                />
                <Toaster/>
                <CustomBtn
                  label="VIEW DETAILS"
                  className="btn2 h-[50px] w-[80%] md:w-[60%] bg-blackcolor hover:bg-slate-200 hover:text-black text-white rounded-[40px] translate-x-4 md:translate-x-[40%]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    
    </div>
  )
}

export default Earphone4