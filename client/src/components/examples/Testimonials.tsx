import Testimonials from '../Testimonials';
import avatar1 from '@assets/stock_images/professional_woman_b_6a146a95.jpg';
import avatar2 from '@assets/stock_images/professional_woman_b_a9d298b8.jpg';
import avatar3 from '@assets/stock_images/professional_woman_b_1d5d74b5.jpg';

export default function TestimonialsExample() {
  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      image: avatar1,
      initials: 'SJ',
      text: 'The quality of these products is amazing! My lipstick lasted all day without touch-ups.',
    },
    {
      id: '2',
      name: 'Chioma Eze',
      image: avatar2,
      initials: 'CE',
      text: 'Fast delivery and excellent customer service. The eyeshadow palette is my new favorite!',
    },
    {
      id: '3',
      name: 'Amara Okafor',
      image: avatar3,
      initials: 'AO',
      text: 'Beautiful packaging and premium quality. Worth every naira!',
    },
  ];

  return <Testimonials testimonials={testimonials} />;
}
