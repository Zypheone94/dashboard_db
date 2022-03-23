import React from 'react'

import Card from './Card'

import '../styles/Inventory.scss'

const Inventory = () => {
  return (
    <section id='inventory_content'>
        <section id='inventory_content_top'>
            <div id='content_header'>
                <div id='content_header_title'>
                    <h3>Inventory</h3>
                    <p>List of games availables for your sales.</p>
                </div>
                <div id='add_new_item'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="white"/>
                    </svg>
                    <p>Add new item</p>
                </div>
            </div>
        </section>
        <section id='inventory_content_bottom'>
            <Card title="228" hex="#ABC124" descr="Available games" 
            svg={<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.8333 9.24998H24.6667V6.16665C24.6667 4.47081 23.2792 3.08331 21.5833 3.08331H15.4167C13.7208 3.08331 12.3333 4.47081 12.3333 6.16665V9.24998H6.16667C4.47083 9.24998 3.08333 10.6375 3.08333 12.3333V30.8333C3.08333 32.5291 4.47083 33.9166 6.16667 33.9166H30.8333C32.5292 33.9166 33.9167 32.5291 33.9167 30.8333V12.3333C33.9167 10.6375 32.5292 9.24998 30.8333 9.24998ZM15.4167 6.16665H21.5833V9.24998H15.4167V6.16665ZM30.8333 30.8333H6.16667V12.3333H30.8333V30.8333Z" fill="#01A768"/>
            <path d="M20.0417 15.4166H16.9583V20.0416H12.3333V23.125H16.9583V27.75H20.0417V23.125H24.6667V20.0416H20.0417V15.4166Z" fill="#01A768"/>
            </svg>
            }/>
            <Card title="228" hex="#ABC124" descr="Available games"></Card>
            <Card title="228" hex="#ABC124" descr="Available games"></Card>
            <Card title="228" hex="#ABC124" descr="Available games"></Card>
            <Card title="228" hex="#ABC124" descr="Available games"></Card>
            <Card title="228" hex="#ABC124" descr="Available games"></Card>
            <Card title="228" hex="#ABC124" descr="Available games"></Card>
        </section>
    </section>
  )
}

export default Inventory