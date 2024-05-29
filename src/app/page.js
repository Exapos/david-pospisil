"use client"
import React from "react";
import ParticlesComponent from "../components/particles";
import Banner from "@/components/banner";
import Accent from "@/components/accent";
import { TypeAnimation } from 'react-type-animation'
import Image from "next/image";

const imageStyle = {
	borderRadius: '10%',
	border: '0.5px solid #fff',
  }

export default function Home() {
  return (
			<div className='bg-gradient-to-b from-neutral-900  to-[#c01818] '>
				<ParticlesComponent />
				<div className='flex flex-row text-slate-200 md:px-10 px-5 h-screen items-center justify-center'>
			        <div className='w-1/3 p-2 sm:hidden lg:block'>
						<Image src='/viking.png' alt='David' width={1000} height={1000} style={imageStyle}/>
			        </div>
			        
			        <div className='w-1/3 text-center p-2'>
						<div className=' text-2xl xs:text-xl lg:text-5xl  font-bold mb-2'>
								Zdravím!
								<br />
								<h1 className='text-2xl sm:text-2xl lg:text-5xl '>
									Mé jméno je{' '}
									<Accent>
										<TypeAnimation
											sequence={[
												3000,
												'David', 
												3000, 
												'Pospíšil',
												() => {
													// console.log('Done typing!')
												}
											]}
											wrapper='Accent'
											cursor={true}
											speed={25}
											repeat={10000}
											className='break-words'
											style={{ fontSize: '1em' }}
										/>
									</Accent>
								</h1>
						</div>
						<div className='lg:mt-5'>
							<p className='font-bold mb-1 lg:hidden text-md xs:text-md'>
				                Jsem certifikovaný trenér, který do vašeho tréningu přidá i špetku zábavy, posilovaní by nemělo být jenom o tvrdým režimu, je důležité
				                aby vás to hlavně bavilo.
							</p>
							<p className='font-bold mb-1 hidden lg:block text-md'>
				                Jsem certifikovaný trenér, který do vašeho tréningu přidá i špetku zábavy, posilovaní by nemělo být jenom o tvrdým režimu, je důležité
				                aby vás to hlavně bavilo
							</p>
						</div>
			        </div>
			        
			        <div className='w-1/3 p-2 sm:hidden lg:block'>
						<Image src='/viking.png' alt='David' width={1000} height={1000} style={imageStyle}/>
			        </div>
			      </div>
			</div>
  );
}
