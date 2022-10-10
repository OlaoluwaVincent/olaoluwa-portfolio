import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import { PageInfo } from '../typings';
type Props = {
	pageInfo: PageInfo;
};

type FieldValues = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
	const { register, handleSubmit } = useForm<FieldValues>();
	const onSubmit: SubmitHandler<FieldValues> = (formData) => {
		emailjs
			.send(
				'service_wo3m9kv',
				'template_74boqsf',
				formData,
				'8-62xwUrd_SYRQMd8'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.3 }}
			className='min-w-full max-h-screen flex flex-col text-center justify-evenly items-center mx-auto md:flex-col md:text-left z-0 px-5 md:max-w-lg space-y-5'
		>
			<h3 className='uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-3xl'>
				Contact
			</h3>
			<div className='flex flex-col space-y-3 justify-evenly items-center'>
				<h4 className='text-lg font-semibold text-center text-[#F7AB0a]/80 animate-bounce'>
					I have got just what you need.{' '}
					<span className='underline decoration-white'>
						Lets Talk
					</span>
				</h4>

				<div className='space-y-3'>
					<div className='flex items-center justify-center space-x-5'>
						<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='tracking-wider text-2xl'>
							{pageInfo.phoneNumber}
						</p>
					</div>

					<div className='flex items-center justify-center space-x-5'>
						<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='tracking-widest text-lg'>
							{pageInfo.email}
						</p>
					</div>

					<div className='flex items-center justify-center space-x-5'>
						<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse flex-shrink-0' />
						<p className='tracking-wider text-sm text-center'>
							{pageInfo.address}
						</p>
					</div>
				</div>

				{/* Form */}
				<form
					className='flex flex-col space-y-2 mx-auto sm:max-w-full max-w-full border-box'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='flex justify-between max-w-full md:flex-row'>
						<input
							{...register('name')}
							className='contactInput w-[48%] h-12'
							type='text'
							placeholder='Name'
						/>
						<input
							{...register('email')}
							className='contactInput w-[48%] h-12 m-0'
							type='email'
							placeholder='Email'
						/>
					</div>
					<input
						{...register('subject')}
						className='contactInput'
						type='text'
						placeholder='Subject'
					/>
					<textarea
						{...register('message')}
						className='contactInput'
						id=''
						placeholder='Message'
					/>
					<button
						type='submit'
						className='bg-[#F7AB0A] px-10 py-3 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0a]/70 '
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default ContactMe;
