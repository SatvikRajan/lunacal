import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import '../css/sample.css'
import image from '../image.png'
function Sample() {
    return (
        <div className="flex main">
            <div className="flex-1"></div>
            <div className="flex-1 p-8 text-white space-y-8">
                <div className="main-in p-4 rounded-lg">
                    <svg className='svg1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" fill="url(#paint0_linear_2267_3341)"></path><defs><linearGradient id="paint0_linear_2267_3341" x1="19.5" y1="27.5" x2="3.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#4A4E54"></stop><stop offset="1" stop-color="#A3ADBA"></stop></linearGradient></defs></svg>
                    <TabGroup>
                        <TabList className="flex space-x-1 rounded-xl p-1 tab-list">
                            <Tab className={({ selected }) =>
                                selected
                                    ? 'tab tab-active text-white rounded-lg py-2 px-4'
                                    : 'tab rounded-lg py-2 px-4'
                            }>
                                About
                            </Tab>
                            <Tab className={({ selected }) =>
                                selected
                                    ? 'tab tab-active text-white rounded-lg py-2 px-4'
                                    : 'tab rounded-lg py-2 px-4'
                            }>
                                Experiences
                            </Tab>
                            <Tab className={({ selected }) =>
                                selected
                                    ? 'tab tab-active text-white rounded-lg py-2 px-4'
                                    : 'tab rounded-lg py-2 px-4'
                            }>
                                Recommended
                            </Tab>
                        </TabList>
                        <TabPanels className="mt-2">
                            <svg className='svg svg1' width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                                <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                                <rect y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                                <rect x="10.6878" y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                                <rect y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                                <rect x="10.6878" y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                            </svg>
                            <TabPanel className="p-4 rounded-lg detail-text">
                                <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                                    <br />
                                    <br />
                                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM.
                                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM.
                                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM.
                                </p>
                            </TabPanel>
                            <TabPanel className="p-4 rounded-lg detail-text">
                                <p>My experiences...</p>
                            </TabPanel>
                            <TabPanel className="p-4 rounded-lg detail-text">
                                <p>Recommendations...</p>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg gallery">
                    <svg className='svg1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" fill="url(#paint0_linear_2267_3341)"></path><defs><linearGradient id="paint0_linear_2267_3341" x1="19.5" y1="27.5" x2="3.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#4A4E54"></stop><stop offset="1" stop-color="#A3ADBA"></stop></linearGradient></defs></svg>
                    <div className="flex items-center justify-between gallery-1">
                        <div>
                            <h3 className="gallery-name">Gallery</h3>
                        </div>
                        <div className='flex gap-8'>
                            <button className="text-white px-4 py-2 rounded-lg flex items-center add-image">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.95368 10.0807C5.95368 10.2812 6.03333 10.4735 6.17512 10.6153C6.3169 10.7571 6.50921 10.8367 6.70972 10.8367C6.91024 10.8367 7.10254 10.7571 7.24433 10.6153C7.38612 10.4735 7.46577 10.2812 7.46577 10.0807V6.80449H10.742C10.9425 6.80449 11.1348 6.72483 11.2766 6.58305C11.4184 6.44126 11.498 6.24895 11.498 6.04844C11.498 5.84792 11.4184 5.65562 11.2766 5.51383C11.1348 5.37204 10.9425 5.29239 10.742 5.29239H7.46577V2.01618C7.46577 1.81566 7.38612 1.62336 7.24433 1.48157C7.10254 1.33979 6.91024 1.26013 6.70972 1.26013C6.50921 1.26013 6.3169 1.33979 6.17512 1.48157C6.03333 1.62336 5.95368 1.81566 5.95368 2.01618V5.29239H2.67747C2.47695 5.29239 2.28465 5.37204 2.14286 5.51383C2.00107 5.65562 1.92142 5.84792 1.92142 6.04844C1.92142 6.24895 2.00107 6.44126 2.14286 6.58305C2.28465 6.72483 2.47695 6.80449 2.67747 6.80449H5.95368V10.0807Z" fill="white" />
                                </svg>
                                &nbsp;&nbsp;Add Image
                            </button>
                            <div className='flex gap-4 float-right'>
                                <button className='arrows'>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.40222 8.37645H15.5967" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='arrows'>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5968 8.37648L1.40236 8.37648" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.5968 1.37646L15.5968 8.37646L8.5968 15.3765" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                    <svg className='svg svg1 svg2' width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                        <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                        <rect y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                        <rect x="10.6878" y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                        <rect y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                        <rect x="10.6878" y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                    </svg>
                    <div className="flex gap-6 images">
                        <div className="rounded-lg aspect-w-1 aspect-h-1">
                            <img src={image} alt="placeholder" className="object-cover rounded-lg" />
                        </div>
                        <div className="rounded-lg aspect-w-1 aspect-h-1">
                            <img src={image} alt="placeholder" className="object-cover rounded-lg" />
                        </div>
                        <div className="rounded-lg aspect-w-1 aspect-h-1">
                            <img src={image} alt="placeholder" className="object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample


