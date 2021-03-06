import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import one from '../img/edits/1.jpg'
import two from '../img/edits/2.jpg'
import three from '../img/edits/3.png'
import four from '../img/edits/4.jpg'
import five from '../img/edits/5.jpg'
import six from '../img/edits/6.jpg'
import seven from '../img/edits/7.jpg'
import eight from '../img/edits/8.jpg'
import nine from '../img/edits/9.jpg'
import ten from '../img/edits/10.jpg'
import eleven from '../img/edits/11.png'
import twelve from '../img/edits/12.png'
import thirteen from '../img/edits/13.png'
import fourteen from '../img/edits/14.png'
import fifteen from '../img/edits/15.png'
import sixteen from '../img/edits/16.jpg'
import seventeen from '../img/edits/17.png'
import seventeen2 from '../img/edits/17-2.jpg'
import eighteen from '../img/edits/18.png'
import nineteen from '../img/edits/19.png'
import twenty from '../img/edits/20.png'
import twentyone from '../img/edits/21.jpg'
import twentytwo from '../img/edits/22.jpg'
import twentythree from '../img/edits/23.jpg'
import twentyfour from '../img/edits/24.jpg'
import twentyfive from '../img/edits/25.jpg'
import twentysix from '../img/edits/26.png'
import twentyseven from '../img/edits/27.jpg'
import twentyseven1 from '../img/edits/27-1.jpg'
import twentyseven2 from '../img/edits/27-2.jpg'
import twentyeight from '../img/edits/28.jpg'
import twentynine from '../img/edits/29.jpg'
import thirty from '../img/edits/30.png'
import thirtyone from '../img/edits/31.png'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>
    <h2 className='designer-header'>DESIGNER PROJECTS</h2>
    <div className='gallery'>
    <ImageList
      sx={{ width: 'auto', height: 'auto' }}
      variant="quilted"
      cols={4}
      rowHeight={521}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 2} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy" 
            className='design-photo'
          >
          </img>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </>
  );
}


// export default function WovenImageList() {
//   return (
//     <>
//     <h2 className='designer-header'>Designer Projects</h2>
//     <ImageList sx={{ width: 1500, height: "auto" }} variant="woven" cols={3} gap={8} className="gallery">
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=161&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//             className='creative-img'
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     </>
//   );
// }




const itemData = [
  {
    img: one,
  },
  {
    img: two,
  },
  {
    img: three,
  },
  {
    img: four,
  },
  {
    img: five,
  },
  {
    img: six,
  },
  {
    img: seven,
  },
  {
    img: eight,
  },
  {
    img: nine,
  },
  {
    img: ten,
  },
  {
    img: eleven,
  },
  {
    img: twelve,
  },
  {
    img: thirteen,
  },
  {
    img: fourteen,
  },
  {
    img: fifteen,
  },
  {
    img: sixteen,
  },
  {
    img: seventeen,
  },
  {
    img: seventeen2,
  },
  {
    img: eighteen,
  },
  {
    img: nineteen,
  },
  {
    img: twenty,
  },
  {
    img: twentyone,
  },
  {
    img: twentytwo,
  },
  {
    img: twentythree,
  },
  {
    img: twentyfour,
  },
  {
    img: twentyfive,
  },
  {
    img: twentysix,
  },
  {
    img: twentyseven,
  },
  {
    img: twentyseven1,
  },
  {
    img: twentyseven2,
  },
  {
    img: twentyeight,
  },
  {
    img: twentynine,
  },
  {
    img: thirty,
  },
  {
    img: thirtyone,
  },

  
];




























// export default function CreativeProjects() {
  
//     return (
//       <div>
//           <h1>CREATIVE PROJECTS</h1>
//           <div className="row edits">
//             <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
//                 <img src={one} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={two} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={three} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={four} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={five} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={six} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={seven} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={eight} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={nine} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={ten} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={eleven} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//                 <img src={twelve} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
//             </div>
          
//             <div className="col-lg-4 mb-4 mb-lg-0">
//               <img src={thirteen} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={fourteen} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={fifteen} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={sixteen} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={seventeen} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={seventeen2} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={eighteen} className="w-100 rounded mb-4" alt=""/>
    
//               <img src={nineteen} className="w-100 rounded mb-4" alt=""/>
    
//               <img src={twenty} className="w-100 rounded mb-4" alt=""/>
//             </div>
          
//             <div className="col-lg-4 mb-4 mb-lg-0">
//                 <img src={twentyone} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentytwo} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
          
//               <img src={twentythree} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentyfour} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentyfive} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
              
//               <img src={twentysix} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentyseven} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentyseven1} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentyseven2} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentyeight} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={twentynine} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={thirty} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
    
//               <img src={thirtyone} className="w-100 shadow-1-strong rounded mb-4" alt=""/>
//             </div>
//         </div>
//       </div>
//     );
//   }