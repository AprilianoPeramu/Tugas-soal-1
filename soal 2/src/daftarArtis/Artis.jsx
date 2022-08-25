import React from 'react';
import { useParams } from 'react-router-dom';



function Artis() {
    let daftarArtis=[
        {name:'pesulap Merah',id:1, detail:'pesulap kang bongkar'},
        {name:'sule prikitiw',id:2, detail:'pelawak old'},
        {name:'WANTIKNOO',id:3 ,detail:'Pengusaha Besi Terkenal GG'},
        {name:'regi Miawaug',id:4,detail:'youtuber ramah'},
        {name:'Kimi Hime',id:5, detail:'pemandangan indah'},
        {name:'Windah Basudara',id:6, detail:'Youtuber kematian tier SSS+'},
        {name:'rrq  lemon',id:7,detail:'gamer ganteng'},
        {name:'diablo',id:8 ,detail:'Orang terkuat'},
        {name:'Johnny sins',id:9, detail:'aktor dengan stamina terbanyak'},
        {name:'febby',id:10 ,detail:'cantik'},
        {name:'garoxx',id:11, detail:'artis komplek'},
        {name:'Zaki',id:12, detail:'artis di kalangan progmamer'},
        {name:'Nyai Nikita',id:13, detail:'artis yang sudah pensi di eranya'},
        {name:'Michle Jackson',id:14,detail:'penari terkenal'},
        {name:'lil Nas',id:15,detail:'penyanyi yang sangat mencintai perempuan'},


    ]
   let Detail = useParams();
    return (
        <div>

            <h2>Detail Artis</h2>
            <p>{daftarArtis.filter((item)=>item.id===Number(Detail.id))[0].detail}</p>


        </div>
    );
}

export default Artis; 