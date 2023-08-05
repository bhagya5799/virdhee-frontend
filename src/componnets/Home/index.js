import React from 'react'
import { FaUserGraduate, FaUserFriends, FaUserTie, FaHouseUser } from 'react-icons/fa'
import { BiSolidInstitution } from 'react-icons/bi'
import './index.css'
import ChildComponent from '../ChildComponent'


const staticSecondPage = [
    {
        icon: FaUserGraduate,
        title: 'Learner',
        description: "Do not learn alone, socialize yourself",
    },
    {
        icon: FaUserFriends,
        title: 'Parent',
        description: "Most trustworthy & engaging multilingual digital content for Free",
    },
    {
        icon: FaUserTie,
        title: 'Teacher',
        description: "Build your own campus with LMS, content, question bank & e - books for free",
    },
    {
        icon: FaHouseUser,
        title: 'Program Buddies',
        description: "Get new dimension & earning from online education with zero effort or investment",
    },
    {
        icon: BiSolidInstitution,
        title: 'Institutions',
        description: "Transform to a complete IT enable institution with ERP, LMS and free digital content",
    },

]

const Home = () => {
    return (
        <div className='home'>
            {/* <img src='https://img.freepik.com/premium-photo/asian-cute-girl-with-glasses-holding-book-while-sitting-pile-books-with-city-blue-sky_9083-3228.jpg?w=2000' /> */}
            <div className='first-page'>
                <div className='img-card'>
                    <img src='https://img.freepik.com/premium-photo/asian-cute-girl-with-glasses-holding-book-while-sitting-pile-books-with-city-blue-sky_9083-3228.jpg?w=2000'
                        height="100%" width='100%' className='bg-img' alt='bg-img' />
                </div>
                <div className='dot-container'>
                    <span className='dot'>.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
                    <span className='dot'>.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
                    <span className='dot'>.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
                    <span className='dot'>.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
                    <span className='dot'>.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
                    <span className='dot'>.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</span>
                </div>
                <div className='companey-profile'>
                    {/* <span className='companey-title'>Virdhee</span> */}
                    <img src='https://vridhee.com/img/log_footer.PNG' className='companey-title' alt='logo' />
                    <span className='be-better'>Be a Better you</span>
                    <p className='companey-tagline'>A social learning platform <br />
                        A place where learning ≠ boredom
                    </p>

                    <span className='companey-description'>
                        <span className='ticks'>“</span>
                        Vridhee is the 1st social learning platform
                        bringing all the teachers and learners together
                        for a seamless knowledge sharing experience
                        through community driven learning with
                        multilingual curriculum using curated websourced contents to enable #educationforall
                        <span className='greaterthen-icon'>“</span>
                    </span>
                </div>

            </div>
           
            <ChildComponent staticSecondPage={staticSecondPage} />
        </div>
    )
}
export default Home