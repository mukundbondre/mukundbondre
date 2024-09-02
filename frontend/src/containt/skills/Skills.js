import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div className='skills' id='skills'>
            <div className='heading'>
                <h1>My Skills</h1>
            </div>
            <div>
                <div>
                    <h2>Programing Languages</h2>
                    <p>C, Data-Structure</p>
                </div>
                <div>
                    <h2>Frontend Languages</h2>
                    <p>HTML, CSS, JavaScript, React.js</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Backend Languages</h2>
                    <p>Express, Node.js, PHP</p>
                </div>
                <div>
                    <h2>Database</h2>
                    <p>MongoDB, MySQL</p>
                </div>
            </div>
        </div>
    )
}

export default Skills