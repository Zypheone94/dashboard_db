import React from 'react'

import Card from './Card'
import LargCard from './LargCard'

import '../styles/dashboard.scss'

const dashboard = () => {
  return (
    <section id='dashboard_content'>
        <section id='dashboard_content_top'>
            <div id='content_top_header'>
                <div id='content_top_header_title'>
                    <h3>Dashboard</h3>
                    <p>A quick data overview of the inventory.</p>
                </div>
                <div id='content_top_header_download'>
                    <p>Download Report</p>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z" fill="#1D242E"/>
                    </svg>
                </div>
            </div>
            <div id='content_top_body'>
                <Card hex="#f12345" title="Argument" descr="content" 
                svg={<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 9.23456L30.1088 29.2916H6.89125L18.5 9.23456ZM18.5 3.08331L1.54167 32.375H35.4583L18.5 3.08331ZM20.0417 24.6666H16.9583V27.75H20.0417V24.6666ZM20.0417 15.4166H16.9583V21.5833H20.0417V15.4166Z" fill="#F0483E"/>
                </svg>
                }></Card>
                <Card hex="#03A9F5" title="Sell" descr="See my month sells"></Card>
                <Card hex="#FED600" title="Rent" descr="No details yet"></Card>
                <Card hex="#f12345" title="Argument" descr="content"></Card>

            </div>
        </section>

        <section id='dashboard_content_bottom'>
            <LargCard></LargCard>
            <LargCard></LargCard>
            <LargCard></LargCard>
        </section>
    </section>
  )
}

export default dashboard