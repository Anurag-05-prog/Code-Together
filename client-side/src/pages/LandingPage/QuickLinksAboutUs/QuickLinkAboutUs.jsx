import React from 'react';
import "./QuickLinkAboutUs.css";
import { useNavigate } from 'react-router-dom';

export default function QuickLinkAboutUs() {

    const navigate = useNavigate();
    
    return (
        <div id='quickLinksAboutUsMain'>
            <div style={{ height : '15vh'}}></div>
            {/* --------------QUICK LINKS---------------- */}
            <div id='quickLinksBoxMain'>
                <div onClick={() => navigate("/demoLink")} className='quickLinksBoxContents'>
                    Join our Discord Server
                </div>
                <div onClick={() => navigate("/demoLink")} className='quickLinksBoxContents'>
                    Join CodeForces Group
                </div>
                <div onClick={() => navigate("/notice-board")} className='quickLinksBoxContents'>
                    Visit our Notice Board
                </div>
                <div onClick={() => navigate("/demoLink")} className='quickLinksBoxContents'>
                    Visit our Education Section
                </div>
            </div>
            {/* ------------------END-------------------- */}
            <div style={{ height : '15vh'}}></div>
            {/* --------------ABOUT US---------------- */}
            <div id='aboutUsMain'>
                <div id='aboutUsTitleMain'>
                    About Us
                </div>
                <div id='aboutUsContentMain'>
                Welcome to Code Together! We are a vibrant college coding community dedicated to the pursuit of excellence in the world of technology. At Code Together, we believe that collaboration and mutual support are the cornerstones of growth and innovation. Our mission is to foster an inclusive and supportive environment where students can enhance their coding skills, share knowledge, and build meaningful connections. We regularly conduct sessions and workshops on Data Structures and Algorithms (DSA) and Competitive Programming (CP) to help members sharpen their problem-solving skills. Our focus extends beyond algorithms and competition; we encourage members to work on real-world projects, contribute to open source, and develop applications that solve everyday problems. Experienced members and alumni mentor newcomers, providing guidance on career paths, technical skills, and personal growth. We organize sessions on a wide range of topics, host guest speakers, and arrange social events to strengthen our community bonds. Whether you're a seasoned coder or a beginner, Code Together welcomes you to join us on this exciting journey to explore the endless possibilities in the world of coding. Let's Code Together, Learn Together, and Grow Together!
                </div>
            </div>
            {/* ------------------END-------------------- */}
        </div>
    )
}
