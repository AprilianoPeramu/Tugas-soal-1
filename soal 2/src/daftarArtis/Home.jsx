import React from 'react';
import {Link} from 'react-router-dom';
function Home() {
    let daftarArtis=[
        {name:'pesulap Merah',id:1},
        {name:'sule prikitiw',id:2},
        {name:'WANTIKNOO',id:3},
        {name:'regi Miawaug',id:4},
        {name:'Kimi Hime',id:5},
        {name:'Windah Basudara',id:6},
        {name:'rrq  lemon',id:7},
        {name:'diablo',id:8},
        {name:'Johnny sins',id:9},
        {name:'febby',id:10},
        {name:'garoxx',id:11},
        {name:'Zaki',id:12},
        {name:'Nyai Nikita',id:13},
        {name:'Michle Jackson',id:14},
        {name:'lil Nas g4y',id:15},


    ]
    return (
        <div>
           <h1>Daftar artis</h1> 

   {
    daftarArtis.map((item)=>
    <div><Link to={"/daftarArtis/"+ item.id}>{item.name}</Link></div>)
   }
        </div>
    );
}

export default Home; 