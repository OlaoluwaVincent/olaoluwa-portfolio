import { Skill as TSkill } from '../typings';
import Skill from './Skill';

type Props = {
	skills: TSkill[];
};

const Skills = ({ skills }: Props) => {
	return (
		<div className='max-h-screen max-w-full flex flex-col text-left justify-evenly items-center mx-auto md:flex-row px-5'>
			<div className='flex flex-col'>
				<div className='text-center my-10'>
					<h3 className='uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-3xl'>
						Skills
					</h3>
					<h3 className='uppercase tracking-[3px] sm:tracking-[3px] text-gray-500 text-sm md:text-md text-center px-3 md:py-2'>
						Hover over a skill for current proficiency
					</h3>
				</div>

				<div className='grid grid-cols-4 gap-5 lg:grid-cols-5'>
					{skills.slice(0, skills.length / 2).map((skill) => (
						<Skill key={skill._id} skill={skill} />
					))}

					{skills
						.slice(skills.length / 2, skills.length)
						.map((skill) => (
							<Skill
								key={skill._id}
								skill={skill}
								directionLeft={true}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
