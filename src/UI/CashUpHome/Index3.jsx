import React from 'react'
import oval from '../../assets/Oval.png'
import oval3 from '../../assets/Oval3.png'
import speaker1 from '../../assets/speaker1.png'

function Index3() {
    const speak1 ={
        image: speaker1,
        title: 'ZX9  SPEAKER',
        desc:'Upgrade to ppremium speakers that are phenominally built to deliver truly remarkable sound'
    }
       
    
  return (
    <div className=' min-h-[400px] w-full bg-[] flex justify-center'>
        <div className=" min-h-[500px] w-[95%] md:w-[90%] lg:w-[80%] bg-btncolor rounded-[15px] grid grid-cols-1 lg:grid-cols-2 gap-2 relative overflow-hidden mt-[40px]">
          
          {/* LARGE SCREEN RESPONSIVE */}
          <div className=" hidden lg:inline-block">
          <div className="h-[500px] bg-[] flex items-end justify-center relative ">
          <div className="h-[300px] w-[300px] bg-[] flex justify-center absolute top-[150px] z-10  ">
                    <div className=" h-[370px] w-[250px] bg-[] ">
                        <img src={speak1.image} alt="" />
                    </div>

                </div>

            </div> 
          </div>
             <div className=" hidden lg:inline-block">
             <div className="h-[500px]  bg-[] flex justify-center items-center">
                <div className=" h-[280px] w-[350px] lg:w-[370px] bg-[] flex flex-col space-y-5">
                   <section className=' text-[40px] font-semibold text-white'>
                   <div className=" w-[150px] ">
                   <h1 >{speak1.title}</h1>
                   </div>
                   </section>

                    <section className=' text-[18px] text-center lg:text-start text-white '>
                    <p className=''>{speak1.desc}</p>
                    </section>

                    <button className=' h-[45px] w-[150px] bg-blackcolor text-white hover:bg-[#FFFFFF] hover:text-blackcolor'>SEE PRODUCT</button>
                </div>

            </div>
             </div>

             <div className=" w-[650px] bg-[] rounded-[50%] absolute top-[-50px] left-[-30px] bottom-[-200px] " style={{border:'1px solid #F1F1F1'}}></div>
             <div className=" h-[400px] w-[400px] rounded-[50%] absolute bottom-[-100px] left-[50px] flex justify-center items-center" style={{border:'1px solid #F1F1F1'}}>
             <div className=" h-[350px] w-[350px]  rounded-[50%] " style={{border:'1px solid #F1F1F1'}}></div>

             </div>



                 {/* MOBILE SIDE OF THE COMPONENT  */}
            <div className=" md:hidden h-[750px] rounded-[20px] mt-[100px] bg-btncolor flex items-center gap-[80px] flex-col  relative">
            
                <div className="h-[300px] w-[300px] bg-[] flex justify-center translate-y-[80px] ">
                    <div className=" h-[240px] w-[200px] bg-[]">
                        <img src={speak1.image} alt="" />
                    </div>

                </div>

                <div className=" h-[300px] w-[350px] lg:w-[370px] bg-[] flex flex-col items-center space-y-5 absolute top-[380px]">
                   <section className=' text-[35px] font-bold text-white '>
                   <div className=" w-[150px] text-center">
                   <h1 >{speak1.title}</h1>
                   </div>
                   {/* <h1 >ZX9 <br /> SPEAKER</h1> */}
                   </section>

                    <section className=' text-[18px] text-center text-white lg:text-start'>
                        <p>{speak1.desc}</p>
                       
                    </section>

                    <button className=' h-[45px] w-[150px] bg-blackcolor text-white hover:bg-[#FFFFFF] hover:text-blackcolor'>SEE PRODUCT</button>
                </div>


                <div className=" h-[400px] w-full bg-[] absolute top-4">
                        <img src={oval3} alt="" />
                        <div className=" h-[350px] w-[320px] bg-[] absolute top-[20px] left-[6%]">
                        <img src={oval3} alt="" />
                </div>

      </div>

            </div>



        {/* TABLET SCREEN RESPONSIVENESS  */}

            <div className=" w-[] hidden md:inline-block lg:hidden">
            <div className="h-[800px] bg-btncolor rounded-[20px] flex justify-center  relative overflow-hidden">


                <div className=" h-[900px] bg-[] rounded-[50%] absolute top-[-200px] left-[-100px] right-[-100px]" style={{border:'1px solid #F1F1F1'}}></div>
                <div className="">
                    <div className=" h-[600px] w-[600px] absolute top-[-120px] bg-[] rounded-[50%] flex justify-center items-center left-[60px]" style={{border:'1.5px solid #F1F1F1'}}>
                        <div className=" h-[500px] w-[500px] bg-[] rounded-[50%] " style={{border:'1px solid #F1F1F1'}}></div>
                    </div>
                </div>

                <div className="h-[300px] w-[300px] bg-[] flex justify-center translate-y-[70px]  ">
                    <div className=" h-[240px] w-[200px] bg-[]">
                        <img src={speak1.image} alt="" />
                    </div>

                </div>

                <div className=" h-[350px] w-[350px] lg:w-[370px] bg-[] flex flex-col items-center space-y-5 absolute top-[400px]">
                   <section className='  font-bold text-white '>
                   <div className=" w-[150px] text-center text-[48px]">
                   <h1 >{speak1.title}</h1>
                   </div>
                   {/* <h1 >ZX9 <br /> SPEAKER</h1> */}
                   </section>

                    <section className=' text-[20px] text-center text-white lg:text-start'>
                        <p>{speak1.desc}</p>
                        
                    </section>

                    <button className=' h-[55px] w-[150px] bg-blackcolor text-white hover:bg-[#FFFFFF] hover:text-blackcolor'>SEE PRODUCT</button>
                </div>
               
            </div>
            </div>

       

        </div>
      
    </div>
  )
}

export default Index3
