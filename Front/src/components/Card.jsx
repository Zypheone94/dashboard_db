import React from 'react'

import '../styles/Card.scss'

const Card = ({hex, title, descr}) => {

    function hexToRgbA(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return [(c>>16)&255, (c>>8)&255, c&255].join(',');
        }
        throw new Error('Bad Hex');
    }

    var color = hexToRgbA(hex)

    console.log(color)

  return (
    <div className='card' style={{
        border: '1px solid rgba(' + color + ')'
    }}>
        <h4>{title}</h4>
        <p>{descr}</p>
        <div className='card_footer' style={{
            backgroundColor : 'rgba(' + color + ', 0.7)',
            border: '1px solid ' + color,
        }}>
            <p>View detail</p>
            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.209396 1.22595L2.98702 4.00358L0.209396 6.78121C-0.0697987 7.0604 -0.0697987 7.51141 0.209396 7.7906C0.488591 8.0698 0.939597 8.0698 1.21879 7.7906L4.5047 4.5047C4.78389 4.2255 4.78389 3.7745 4.5047 3.4953L1.21879 0.209396C0.939597 -0.0697985 0.48859 -0.0697985 0.209396 0.209396C-0.0626402 0.488591 -0.069799 0.946756 0.209396 1.22595Z" fill="#1D242E"/>
            <path d="M4.2094 1.22595L6.98702 4.00358L4.2094 6.78121C3.9302 7.0604 3.9302 7.51141 4.2094 7.7906C4.48859 8.0698 4.9396 8.0698 5.21879 7.7906L8.5047 4.5047C8.78389 4.2255 8.78389 3.7745 8.5047 3.4953L5.21879 0.209396C4.9396 -0.0697985 4.48859 -0.0697985 4.2094 0.209396C3.93736 0.488591 3.9302 0.946756 4.2094 1.22595Z" fill="#1D242E"/>
            </svg>
        </div>
    </div>
  )
}

export default Card