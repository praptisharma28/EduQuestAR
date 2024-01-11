import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import video1 from '../assets/video1-heart.mp4';
import video2 from '../assets/video1-heart.mp4';
import video3 from '../assets/video1-heart.mp4';

const VideoCarousel = () => {
  return (
    <div>
      <h1 className='text-center mb-20 text-6xl font-extrabold'>How IT Looks</h1>
     

      <Carousel>
        <div>
          <ReactPlayer
            url={video1}
            volume={1}
            muted
            width='100%'
            playing={true}
          />
        </div>
        <div>
          <ReactPlayer
            url={video2}
            volume={1}
            muted
            width='100%'
            playing={true}
          />
        </div>
        <div>
          <ReactPlayer
            url={video3}
            volume={1}
            muted
            width='100%'
            playing={true}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
