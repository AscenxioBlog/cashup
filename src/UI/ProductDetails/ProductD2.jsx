import React from 'react'

function ProductD2() {
  return (
    <div className=' w-full flex justify-center  mt-[100px]'>
        <div className=" min-h-[450px] w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 lg:grid-cols-[50%,40%] justify-between gap-4">
            <div className="min-h-[450px] bg-[] space-y-5 pt-3 ">
                <h1 className=' font-bold text-[25px]'>FEATURES</h1>
                <p className=' md:text-[18px]'>
                    Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                </p>

                <p>
                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                </p>
            </div>
            <div className="h-[450px] bg-[] space-y-8 pt-3">
                <h1 className=' uppercase font-bold'>in the box</h1>

                <div className=" space-y-4">
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> Headphone Unit</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>2X</span> Replacement Earcups</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> User Manual</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> 3.5mm 5m Audio Cable</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> Travel bag</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductD2