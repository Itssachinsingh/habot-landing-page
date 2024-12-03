import React, { useState } from 'react';
import './Home.css';
import logo from '../images/logo.png'
import bg from '../images/bg.png'
import business from '../images/business.png'
import contact from '../images/contact.png'
import requirements from '../images/reuirements.png'
import review from '../images/review.png'
import signup from '../images/sign_up.png'
import suppliers from '../images/suppliers.png'
import footer_logo from '../images/logo_footer.png'
import { Link } from 'react-router-dom';


export const Home = () => {
    const [selectedOption, setSelectedOption] = useState("Buyer");

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className=''>
            {/* header */}
            <header className="flex justify-between items-center md:px-[1rem] lg:px-[3.8rem] py-[1.1rem] px-[1rem] relative">

                <div className="sm:pl-[2.9rem] md:pl-[1rem] pl-0">
                    <img src={logo} alt="Logo" className="max-w-[11rem]" />
                </div>

                {/* Mobile Icons */}
                <div className="flex gap-4 justify-center items-center">
                    <i className="sm:hidden block fa-xl fa-solid fa-user cursor-pointer"></i>
                    <i
                        className="sm:hidden block fa-xl fa-solid fa-bars-staggered cursor-pointer"
                        onClick={toggleMenu}
                    ></i>
                </div>

                {/* Hidden Menu */}
                <div
                    className={` flex justify-between fixed top-0 right-0 h-full bg-white w-[75%] shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        } sm:hidden`}
                >
                    <div className="flex flex-col items-start p-8 gap-8">
                        <div>
                            <p className='px-2'>Find Suppliers</p>
                        </div>
                        <div>
                            <select className="focus:outline-none px-1">
                                <option selected>Find Service Tags</option>
                                <option value="example 1">Example 1</option>
                                <option value="example 1">Example 1</option>
                                <option value="example 1">Example 1</option>
                            </select>
                        </div>
                        <div>
                            <button className="border border-1 border-[#00732f] rounded-md px-4 py-2 font-bold text-[#00732f] hover:bg-[#00732f] hover:text-white">
                                Login / Sign Up
                            </button>
                        </div>
                    </div>
                    <i class="fa-xl fa-solid fa-x p-12 " onClick={toggleMenu} ></i>
                </div>

                {/* Desktop Menu */}
                <div className="sm:flex justify-around items-center xl:gap-12 sm:gap-4 hidden">
                    <div>
                        <p>Find Suppliers</p>
                    </div>
                    <div>
                        <select className="focus:outline-none px-1">
                            <option selected>Find Service Tags</option>
                            <option value="example 1">Example 1</option>
                            <option value="example 1">Example 1</option>
                            <option value="example 1">Example 1</option>
                        </select>
                    </div>
                    <div>
                        <button className="border border-1 border-[#00732f] rounded-md px-12 py-3 font-bold text-[#00732f] hover:bg-[#00732f] hover:text-white">
                            Login / Sign Up
                        </button>
                    </div>
                </div>
            </header>


            {/* hero search section starts here */}
            <div className="bg-cover bg-center h-[600px] sm:h-[550px] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
                <div className='text-white text-center'>
                    <h1 className='sm:text-[60px] text-[30px]' > <span className='font-bold'>Are You a Supplier?</span> <br />
                        Explore Matching Opportunities.</h1>
                </div>
                <div className="sm:flex flex-col gap-2 justify-center items-center sm:flex-row sm:gap-3 my-8">
                    <div className='border border-1 rounded-lg bg-white sm:px-4  px-1 text-[15.13px] flex justify-center items-center '><i class="text-[#e7760d] fa-lg fa-solid fa-briefcase"></i><input type="text" className='px-4 py-3 w-[22rem] md:w-[15rem] xl:w-[22rem] text-lg focus:outline-none focus:ring-0 ' placeholder='Search your required service here' /></div>
                    <div className='border border-1 rounded-lg bg-white sm:px-4 px-1 text-[15.13px] sm:my-0 my-4 flex justify-center items-center '><i class="text-[#e7760d] fa-lg fa-solid fa-location-dot"></i><input type="text" className='px-4 py-3 w-[22rem] md:w-[15rem] xl:w-[22rem] text-lg focus:outline-none focus:ring-0' placeholder='Search your desired location here' /></div>
                    <button className='text-white rounded-lg h-[54px] w-[117px] font-bold text-[15.13px] bg-[#00732f] hover:bg-[#387542] '>Search</button>
                </div>
                <p className='font-bold text-white text-[21px]'>Are you a buyer? <span className=' ml-2 font-normal underline cursor-pointer'>Click here if you are looking to post a requirements</span></p>
            </div>
            {/* hero search section ends here  */}

            {/* hero sign up section starts here */}
            <div className="flex flex-col sm:flex-row justify-center items-center md:gap-16 lg:gap-24 xl:gap-36  px-[1rem] sm:px-[3rem] md:px-[2rem] lg:px-[6.7rem] py-24">
                <div className='w-[100%]'>
                    <h1 className='lg:text-[41.34px] md:text-[30px] text-[27px] text-center sm:text-start font-bold'>Ready to dive into <span className='text-[#271555]'> HABOT?</span></h1>
                    <p className='lg:text-[19.16px] md:text-[15px] my-8 text-center sm:text-start'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <button className='bg-[#00732f] text-white w-[280px] h-[55px] lg:w-[320px]  rounded-md text-[20px] font-bold flex justify-center items-center hover:gap-8 transition ease-in-out duration-1000'><p>Sign up Today ! </p><i class="fa-solid fa-arrow-right-long ml-8"></i></button>
                </div>
                <div className='w-[100%] flex text-[20px] font-semibold gap-6 justify-end mt-12 sm:my-0'>
                    <div className='flex flex-col gap-6'>
                        <div className='border-1  border-[#e7760d] h-[65px] w-[170px] md:w-[220px] lg:w-[250px]  xl:w-[317px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#072f57] hover:text-white '>Abu Dhabi</div>
                        <div className='border-1 border-[#e7760d] h-[65px] w-[170px] md:w-[220px] lg:w-[250px]  xl:w-[317px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#072f57] hover:text-white '>Sharjah & Ajman</div>
                        <div className='border-1 border-[#e7760d] h-[65px] w-[170px] md:w-[220px] lg:w-[250px]  xl:w-[317px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#072f57] hover:text-white '>Ras Al Khaimah</div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='border-1 border-[#e7760d] h-[65px] w-[170px] md:w-[220px] lg:w-[250px]  xl:w-[317px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#072f57] hover:text-white '>Dubai</div>
                        <div className='border-1 border-[#e7760d] h-[65px] w-[170px] md:w-[220px] lg:w-[250px]  xl:w-[317px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#072f57] hover:text-white '>Fujairah</div>
                        <div className='border-1 border-[#e7760d] h-[65px] w-[170px] md:w-[220px] lg:w-[250px]  xl:w-[317px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#072f57] hover:text-white '>Umm Al Quwain</div>
                    </div>
                </div>
            </div>
            {/* hero sign up section ends here */}


            {/* hero youtube section starts here */}
            <div className='xl:h-[635px] mx-[1rem] sm:mx-[6.7rem] bg-[#072f57] rounded-md xl:flex gap-8 px-[1rem] py-[2rem] sm:py-[5rem] sm:px-[5rem] xl:py-[9rem] lg:pt-[3rem] '>
                <div className=''>
                    <iframe className='rounded-md w-full h-[230px] sm:w-[400px] sm:h-[300px] md:w-[660px]  md:h-[350px] lg:w-[680px] xl:w-[480px] lg:mb-6 '
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
                <div>
                    <div className="p-0 sm:p-6 text-white sm:w-[516px] w-full ">
                        {/* Options */}
                        <div className="flex justify-around text-lg font-semibold mb-4">
                            <button
                                className={`px-4 sm:px-10 py-3 font-bold text-[30px] ${selectedOption === "Buyer"
                                    ? "text-orange-500 border-b-4 border-orange-500"
                                    : "text-white"
                                    }`}
                                onClick={() => setSelectedOption("Buyer")}
                            >
                                Buyer
                            </button>
                            <button
                                className={`px-10 py-3 font-bold text-[30px] ${selectedOption === "Supplier"
                                    ? "text-orange-500 border-b-4 border-orange-500"
                                    : "text-white"
                                    }`}
                                onClick={() => setSelectedOption("Supplier")}
                            >
                                Supplier
                            </button>
                        </div>
                        {/* Content */}
                        <div className=" py-6 px-3 rounded-md">
                            {selectedOption === "Buyer" && (
                                <div className="list-disc space-y-2 pl-5">
                                    <div className='text-[18.75px] flex justify-start items-start'><i class="fa-lg text-[#32ba7c]  fa-solid fa-circle-check mr-3 mt-3"></i><p>Post your requirements.</p></div>
                                    <div className='text-[18.75px] flex justify-start items-start'><i class="fa-lg text-[#32ba7c]  fa-solid fa-circle-check mr-3 mt-3"></i><p>Sit back for multiple suppliers to contact you.</p></div>
                                    <div className='text-[18.75px] flex justify-start items-start'><i class="fa-lg text-[#32ba7c]  fa-solid fa-circle-check mr-3 mt-3"></i><p>Choose among the suppliers based on the ratings and reviews.</p></div>
                                </div>
                            )}
                            {selectedOption === "Supplier" && (
                                <div className="list-disc space-y-2 pl-5">
                                    <div className='text-[18.75px] flex justify-start items-start'><i class="fa-lg text-[#32ba7c]  fa-solid fa-circle-check mr-3 mt-3"></i><p> Alternate text</p></div>
                                    <div className='text-[18.75px] flex justify-start items-start'><i class="fa-lg text-[#32ba7c]  fa-solid fa-circle-check mr-3 mt-3"></i><p>Alternate text</p></div>
                                    <div className='text-[18.75px] flex justify-start items-start'><i class="fa-lg text-[#32ba7c]  fa-solid fa-circle-check mr-3 mt-3"></i><p>Alternate text</p></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* hero youtube section ends here */}

            <div className='h-[254px] bg-[#e8fbff] my-[2rem] sm:my-[10rem] flex justify-between items-center  md:px-48'>
                <h1 className='text-[20px] sm:text-[40px] font-bold'>Let Suppliers  <span className='border-b-4 border-[#eb7150]'>Find You</span></h1>
                <button className='bg-[#eb7150] text-white px-4 sm:px-12 py-[12px] rounded-md text-md sm:text-2xl font-semibold cursor-pointer hover:bg-[#072f57] '>Get Verified</button>
            </div>

            {/* How it works section starts here */}
            <div className='lg:px-40  sm:px-4 px-6 md:px-28'>
                <h1 className='text-center text-[2.8rem] font-bold'>How it works?</h1>
                <p className='px-[1rem] sm:px-[10rem] text-center text-[21px] mt-4 mb-20'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                <div>
                    <div className='flex flex-wrap sm:flex-nowrap '>
                        <div className='bg-[#e8fbff] w-[170px] h-[170px]  sm:w-[270px]  sm:h-[210px] lg:w-[320px] lg:h-[260px] xl:w-[400px] xl:h-[254px] mb-2 sm:mb-0 flex flex-col justify-center items-center' >
                            <img src={signup} alt="" className='xl:w-[7.5rem] lg:w-[5.5rem] w-[3.5rem]'/>
                            <p className='font-semibold xl:text-2xl lg:text-xl text-center my-3 w-[140px] sm:w-[200px]  lg:w-[320px]'>Select Your Role and Sign up</p>
                        </div>
                        <div className='w-[170px] h-[170px] sm:w-[270px]  lg:w-[320px] lg:h-[260px] xl:w-[400px] xl:h-[254px] mb-2 sm:mb-0 flex flex-col justify-center items-center'>
                            <img src={requirements} alt="" className='xl:w-[7.5rem] lg:w-[5.5rem] w-[3.5rem]'/>
                            <p className='font-semibold xl:text-2xl lg:text-xl text-center my-3 w-[140px] sm:w-[200px]  lg:w-[320px]'>Buyers Post Your  Requirements</p>
                        </div>
                        <div className='bg-[#e8fbff] w-[170px] h-[170px] sm:w-[270px]  lg:w-[320px] lg:h-[260px] xl:w-[400px] xl:h-[254px] mb-2 sm:mb-0 flex flex-col justify-center items-center'>
                            <img src={review} alt="" className='xl:w-[7.5rem] lg:w-[5.5rem] w-[3.5rem]'/>
                            <p className='font-semibold xl:text-2xl lg:text-xl text-center my-3 w-[140px] sm:w-[200px]  lg:w-[320px]'>Review, Select, and Contact the Best Suppliers</p>
                        </div>
                    {/* </div>
                    <div className='flex'> */}
                        <div className=' w-[170px] h-[170px] sm:w-[270px]  lg:w-[320px] lg:h-[260px] xl:w-[400px] xl:h-[254px] mb-2 sm:mb-0 flex flex-col justify-center items-center'>
                            <img src={suppliers} alt="" className='xl:w-[7.5rem] lg:w-[5.5rem] w-[3.5rem]'/>
                            <p className='font-semibold xl:text-2xl lg:text-xl text-center my-3 w-[140px] sm:w-[200px]  lg:w-[320px]'>Suppliers Complete your  Profile and get notified for opportunties</p>
                        </div>
                        <div className='bg-[#e8fbff] w-[170px] h-[170px] sm:w-[270px]  lg:w-[320px] lg:h-[260px] xl:w-[400px] xl:h-[254px] mb-2 sm:mb-0 flex flex-col justify-center items-center'>
                            <img src={contact} alt="" className='xl:w-[7.5rem] lg:w-[5.5rem] w-[3.5rem]'/>
                            <p className='font-semibold xl:text-2xl lg:text-xl text-center my-3 w-[140px] sm:w-[200px]  lg:w-[320px]'>Contact to Buyers and Share your Quote for the service</p>
                        </div>
                        <div className=' w-[170px] h-[170px] sm:w-[270px] lg:w-[320px] lg:h-[260px] xl:w-[400px] xl:h-[254px] mb-2 sm:mb-0 flex flex-col justify-center items-center'>
                            <img src={business} alt="" className='xl:w-[7.5rem] lg:w-[5.5rem] w-[3.5rem]'/>
                            <p className='font-semibold xl:text-2xl lg:text-xl text-center my-3 w-[140px] sm:w-[200px]  lg:w-[320px]' >Both the Parties can Connect and Make Business Leave a Feedback</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it works section ends here */}

            {/* Footer  section starts here */}
            <div className=' sm:h-[255px] bg-[#123557] mt-[13rem] xl:px-44 lg:px-8 px-2 sm:py-12 py-0 ' >
                <div className=' border-t-[1px] border-b-[1px] border-gray-400 flex flex-col sm:flex-row justify-between sm:items-center py-2'>
                    <div className='flex flex-col sm:flex-row  gap-12 pl-8'>
                        <div className='text-white sm:p-3 pt-5'>
                            <img src={footer_logo} alt="" />
                            <p>© R Singhania</p>
                        </div>
                        <div className='flex flex-col text-white gap-1'>
                            <h2 className='font-bold my-3'>Company</h2>
                            <Link href="#">About</Link>
                            <Link href="#">FAQ</Link>
                        </div>
                        <div className='flex flex-col text-white gap-1'>
                            <h2 className='font-bold my-3'>Terms</h2>
                            <Link href="#">Data privacy</Link>
                            <Link href="#">Terms</Link>
                            <Link href="#">Accessibility</Link>
                        </div>
                        <div className='flex flex-col text-white gap-1'>
                            <h2 className='font-bold my-3'>Related</h2>
                            <Link href="#">Fins Buyer</Link>
                            <Link href="#">Feedback</Link>
                        </div>
                    </div>
                    <div className='flex gap-2 sm:mt-0 mt-4 sm:justify-start sm:items-start justify-center items-center py-4 sm:py-0'>
                        <div className='border rounded-full px-3 py-3 text-lg text-white flex justify-center items-center cursor-pointer hover:bg-[#7ca4cc] hover:text-black'><i class="fa-brands fa-linkedin-in"></i></div>
                        <div className='border rounded-full px-3 py-3 text-lg text-white flex justify-center items-center cursor-pointer hover:bg-[#7ca4cc] hover:text-black'><i class="fa-brands fa-twitter"></i></div>
                        <div className='border rounded-full px-3 py-3 text-lg text-white flex justify-center items-center cursor-pointer hover:bg-[#7ca4cc] hover:text-black'><i class="fa-brands fa-facebook-f"></i></div>
                        <div className='border rounded-full px-3 py-3 text-lg text-white flex justify-center items-center cursor-pointer hover:bg-[#7ca4cc] hover:text-black'><i class="fa-brands fa-instagram"></i></div>
                    </div>
                </div>
            </div>
            {/*  Footer section ends here */}


















        </div>
    )
}
