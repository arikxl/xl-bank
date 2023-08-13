import { team } from "@/data/data"
import Image from "next/image"
import Link from "next/link";

const TeamMember = ({ member, idx }) => {

    const { name, position, img, funFacts, email } = member;

    return (
        <div className='w-[60%] py-2 flex  member rounded-lg border-2  hover:border-cyan-400 '>
            <div className={`flex gap-2  ${idx % 2 === 0 && 'flex-row-reverse'} p-2`}>
                <div className=' min-w-[100px] h-[100px] border-cyan-400 border-[6px] rounded-full overflow-hidden '>
                    <Image alt={name} src={img} width={500} height={500} className='' />
                </div>
                <div>
                    <div className='flex justify-center items-end font-bold'>
                        <h3 className='text-2xl text-cyan-400 '>{name}</h3>
                        &nbsp;  &nbsp;
                        <h3>{position}</h3>
                    </div>
                    <div className='text-center'>
                        <i className=' text-center'>{funFacts}</i>
                    </div>
                    <Link href="mailto:arikxl@gmail.com" className='underline text-center block '>
                        <code>
                            {email}
                        </code>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const HomeTeamSection = () => {
    return (
        <section className='bg-slate-800 text-white'>
            <div className='w-4/5 h-full mx-auto py-10'>
                <h2 className='text-cyan-400 font-bold text-lg text-center '>Meet the <del>Team</del> Family</h2>
                <div className='flex flex-col gap-6 my-6'>

                    {team.map((i, idx) => (
                        <TeamMember key={i.id} member={i} idx={idx} />
                    ))}
                </div>
                <Link href="/about">
                    <h3 className='member-link font-bold text-3xl text-center hover:underline transition duration-400'>Contact Us</h3>
                </Link>

            </div>
        </section>
    )
}

export default HomeTeamSection