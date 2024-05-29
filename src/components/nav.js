import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Blog', href: '/routes/blog', current: false },
	{ name: 'Libary', href: '/routes/libaries', current: false },
	{ name: 'About Me', href: '/routes/aboutme', current: false }
]

const Header = ({ href }) => {
	return (
		<div className=' sticky top-0 z-50 bg-neutral-700 backdrop-filter backdrop-blur-lg bg-opacity-30 '>
			<Disclosure
				as='nav'
				className=' border-b border-neutral-500 lg:pb-1 text-white  lg:pt-1'>
				{({ open }) => (
					<>
						<div className='header-layout max-w-10xl w-full  sm:px-6'>
							<div className='relative flex items-center justify-between h-16'>
								<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
									{/* Mobile menu button */}
									<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white absolute'>
										<span className='sr-only'>Open main menu</span>
										{open
											? (
												<XIcon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											)
											: (
												<MenuIcon
													className='block h-6 w-6 text-[#ff0080]'
													aria-hidden='true'
												/>
											)}
									</Disclosure.Button>
								</div>
								<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
									<div className='flex-shrink-0 flex items-center'>
										<a href='/'>
											<img
												className='block lg:hidden h-8 w-auto '
												src='https://res.cloudinary.com/dr1sm5gnj/image/upload/v1666821240/igutech/logo/logo_jibobs.webp'
												width={30}
												height={30}
												alt='Jagetic'
											/>
											<img
												className='hidden lg:block h-8 w-auto animate-pulse'
												src='https://res.cloudinary.com/dr1sm5gnj/image/upload/v1666821292/igutech/logo/logo-no-background_dbpm3q.svg'
												// src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
												alt='Jagetic'
											/>
										</a>
									</div>
								</div>
								<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 xs:hidden'>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='sm:hidden'>
							<div className='flex flex-col  backdrop-filter backdrop-blur-lg bg-opacity-30  px-2 pt-2 pb-3 space-y-1'>
								{navigation.map((item) => (
									<ActiveLink key={item.name} href={item.href} id={`${item.name}_header_button_m`} data-splitbee-event={`Header clicked ${item.name}_header_button_m`}
									>
										-   {item.name}
									</ActiveLink>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	)
}

export default Header
