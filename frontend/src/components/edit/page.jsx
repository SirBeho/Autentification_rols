import React from 'react'
import NavBar from '@/components/navBar'
import Link from 'next/link'

function page() {
  return (
    <div className='bg-white'>
      <div className="flex flex-col px-6 pt-6 gap-3">
        <NavBar/> 

        <Link href="./" className="pt-8">
          <div className="flex flex-raw">
            <img src="../flechIzq.svg" alt="" />
            <span>Back</span>
          </div>
        </Link>

        <div className="flex flex-col w-full justify-center items-center pt-3 ">
          <div className="flex flex-col gap-6 md:w-4/6 md:border md:rounded-lg md:p-6">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-normal">Change Info</div>
              <div className="text-[#828282] text-sm font-medium">
                Change will be reflected to every services
              </div>
            </div>
            <form action="subirimg.php" method="post" encType="multipart/form-data" className="flex flex-col gap-3">
              <label htmlFor="img" className="p-3 flex flex-raw items-center cursor-pointer gap-7">
                <div className="relative w-14 h-13  rounded-lg justify-center items-center">
                  <img src="../camara.svg" alt="" className="absolute top-4 left-4"/>
                    <img src="../fotovacia.jpg" alt="" className="object-cover"/>
                </div>
                <p className="text-[#BDBDBD] text-sm">CHANGE PHOTO</p>
                <input type="file" name="img" id="img" className="hidden invisible" accept="image/png, .jpeg, .jpg, image/gif"/>
              </label>
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name..." className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="bio">Bio</label>
                <input type="text" id="bio" name="bio" placeholder="Enter your bio..." className="border border-stone-400 rounded-lg h-20 p-1 w-3/5"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Phone</label>
                <input type="numeric" id="phone" name="phone" placeholder="Enter your phone..." className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required="" name="email" placeholder="Enter your email..." className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="pasword">Password</label>
                <input type="password" id="pasword" required="" name="pasword" placeholder="Enter your password..." className="border border-stone-400 rounded-lg h-9 p-1 w-3/5"/>
              </div>
              <input type="submit" defaultValue="Save" className="bg-blue-600 cursor-pointer rounded-lg text-white h-9 w-24"/>
            </form>
          </div>
          <div className="flex flex-row justify-between font-normal text-sm w-full text-[#BDBDBD] py-4">
            <div>Milton Procel</div>
            <div>devchallenges.io</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page