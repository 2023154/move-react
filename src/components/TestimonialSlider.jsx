import { StarRating } from './StarRating';

export function TestimonialSlider({ testimonials }) {
  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-8 scrollbar-hide md:gap-6 md:px-6">
        {testimonials.items.map((testimonial, index) => (
          <div key={index} className="relative min-w-[90%] snap-center rounded-2xl bg-metallic-dark p-8 text-center shadow-lg md:min-w-[400px]">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-move-green"
            />
            <div className="mt-4">
              <StarRating rating={testimonial.rating} />
            </div>
            <p className="mt-4 text-lg italic text-slate-200">"{testimonial.quote}"</p>
            <p className="mt-6 font-semibold text-white">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
