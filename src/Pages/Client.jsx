import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Client = () => {
  const clients = [
    { id: 1, name: 'Client A', imageUrl: '/images/client-a.jpg', description: 'Description for Client A', link: '/client-a' },
    { id: 2, name: 'Client B', imageUrl: '/images/client-b.jpg', description: 'Description for Client B', link: '/client-b' },
    { id: 3, name: 'Client C', imageUrl: '/images/client-c.jpg', description: 'Description for Client C', link: '/client-c' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable default arrows
    appendDots: dots => (
      <ul className="m-0 p-0 flex justify-center gap-7 space-x-6">
        {dots.map((dot, index) => (
          <li key={index} className="inline-block mx-4 gap-10 bg-black h-9 text-black">{dot}</li> // Increase the margin for more separation
        ))}
      </ul>
    ),
    customPaging: i => (
      <div className="w-8 h-1 bg-gray-300 rounded"></div>
    )
  };

  return (
    <div id="client" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
      <Slider {...settings}>
        {clients.map(client => (
          <a key={client.id} href={client.link} className="focus:outline-none">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src={client.imageUrl} alt={client.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                <p className="text-gray-700">{client.description}</p>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
