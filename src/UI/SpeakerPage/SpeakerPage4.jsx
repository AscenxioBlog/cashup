
import React, { useContext, useState } from 'react'
import Index2 from '../CashUpHome/Index2'
import { TbCurrencyNaira } from "react-icons/tb";
import CustomBtn from '../../ReusableComponent/CustonBtn';
import { AppContext } from '../../ContextFolder/MyContext';
import toast, { Toaster } from 'react-hot-toast';

function SpeakerPage4() {

  const { addToCart } = useContext(AppContext);
  const productlist = [/* your product data */
    {
      id:1,
      name:'Jbl Pulse 4 - Bluetooth Speaker With Light Show - White',
      description:'Pulse 4 delivers JBL signature sound in every direction with its ingenious 360 degree speaker Array',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5623352/1.jpg?9035',
      price:'375,000'
    },

    {
      id:2,
      name:'Zealot S67 Portable 60W Wireless Bluetooth Speaker',
      description:'Bluetooth 5.0 stable and fast connection With built-in noise-cancelling microphone, bring clear hands-free calls',
      image:'https://www.jamarahome.com/cdn/shop/files/6F13B01D-1B79-4954-970A-CA5AE4855920.png?v=1723950525&width=800',
      price:'89,000',
      price2:' 95,000'
    },


    {
      id:3,
      name:'Jbl FLIP 6 Waterproof Portable Bluetooth Speaker',
      description:'Bold sound for every adventure',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/2304103/1.jpg?2714',
      price:'167,000'
    },

    {
      id:4,
      name:'Zealot P1 Bluetooth Subwoofer Speaker,FM,8000mAh Big Battery',
      description:'Zealot P1 Bluetooth Subwoofer Speaker,FM,8000mAh Big Battery',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/188289/1.jpg?6879',
      price:'49,999'
    },


    {
      id:5,
      name:'Lenovo Thinkplus K3 Pro Wireless BT Speaker BT5.0 Audio',
      description:'Wireless, on-ear, active noise-cancelling headphones.',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/5024922/1.jpg?1366',
      price:'10,964',
       price2:'22,331'
    },

    {
      id:6,
      name:'Oraimo Colorful Light Thumping Bass SoundFlow Wireless Soundbar',
      description:'Oraimo Colorful Light Thumping Bass SoundFlow Wireless Soundbar',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/458188/1.jpg?4349',
      price:'94,889',
      price2:'113,674'
    },


    {
      id:7,
      name:'Oraimo Rover RGB Lights Bluetooth Portable IPX5 Wireless Speaker',
      description:'Customized dual 50mm full-range drivers and dual 66mm bass radiators deliver superior stereo sound.',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/5026232/1.jpg?9310',
      price:'48,150',
      price2:'50,063'
    },

    {
      id:8,
      name:'Hoop Dynamic Thunder Sound With High Bass Bluetooth Speaker',
      description:'This is a Tyre Shape wireless Bluetooth speaker with high bass and superb sound for outdoor as well as inside your home.',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/045414/1.jpg?4125',
      price:'18,800',
      price2:'45,890'
    },


    {
      id:9,
      name:'Motion Pro Dynamic Thunder Sound Bluetooth Speaker',
      description:'Motion Pro Dynamic Thunder Sound Bluetooth Speaker ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/436901/1.jpg?6108',
      price:'18,650',
      price2:'32,500'
    },

    {
      id:10,
      name:'DISPLAY SOLID Rechargeable Bluetooth Speaker',
      description:'The Bluetooth Wireless Portable Stereo Speaker with Hi-Fi output can be used indoor and outdoor. ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/885289/1.jpg?1530',
      price:'25,600',
      price2:'29,000'
    },

    {
      id:11,
      name:'Multi-Function Bluetooth Speakers With Digital Alarm Clock',
      description:'【Multifunctional and Practical Design】-Bluetooth speaker + digital alarm clock + hands-free calling + mirror LED display',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/8042752/1.jpg?5919',
      price:'11,014',
      price2:'15,397'
    },

    {
      id:12,
      name:'Zealot S55 Portable Wireless Speaker With BT 5.0 Technology',
      description:'Beautiful and fashionable, the colorful light effect flows with the beat of the music, providing a dazzling audio-visual experience.',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/6508372/1.jpg?5226',
      price:'26,566',
      price2:'50,053'

    },


    {
      id:13,
      name:'Zealot S32 Max Portable Wireless Speaker',
      description:'Zealot S32 Max Portable Wireless Speaker   ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/9954163/1.jpg?8707',
      price:'37,643',
      price2:'70,922'

    },

    {
      id:14,
      name:'Jbl XTREME 4 PORTABLE WIRELESS BLUETOOTH SPEAKER',
      description:'Jbl XTREME 4 PORTABLE WIRELESS BLUETOOTH SPEAKER  ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/3000643/1.jpg?3769',
      price:'495,000',
      price2:'540,000'

    },

    {
      id:15,
      name:'Jbl PULSE 5 WIRELESS BLUETOOTH SPEAKER - BLACK',
      description:'Jbl PULSE 5 WIRELESS BLUETOOTH SPEAKER - BLACK ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2498573/1.jpg?5455',
      price:'450,000',
      // price2:'45,000'

    },


    {
      id:16,
      name:'Jbl Clip 4 - Portable Mini Bluetooth Speaker Green',
      description:'blast the party anywhere you go with the red JBL Clip 4 Portable Bluetooth Speaker.  ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/5415373/1.jpg?8094',
      price:'85,000',
      // price2:'39,457'

    },

    {
      id:17,
      name:'Jbl PARTYBOX Ultimate Speaker',
      description:'The JBL PartyBox Ultimate fills as much space as you’ve got with superior Original JBL Pro Sound, boosted with an immersive Dolby Atmos experience over Wi-Fi*.  ',
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/7404883/1.jpg?3107',
      price:'38,800,000',
      // price2:'45,000'

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
          <div key={item.id} className="min-h-[400px] md:h-[540px] bg-slate-200 p-2 relative">
            <div className="min-h-[60px] w-full flex items-center font-bold">
              <p>{item.name}</p>
            </div>
            <div className="h-[200px] md:h-[320px] w-full bg-white">
              <img src={item.image} height="100%" width="100%" alt="" />
            </div>
            <div className="h-[60px] w-full flex items-center">
              <p className="flex items-center font-bold">
                <TbCurrencyNaira />
                {item.price}
              </p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0">
              <div className="btnparent h-[100%] w-full relative">
                <CustomBtn
                 onClick={() =>{
                  toast.success(`${item.name} successfully addded to cart`);
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

export default SpeakerPage4