import { StarRating } from './StarRating';

export function TestimonialSlider({ testimonials }) {
  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-8 scrollbar-hide md:gap-6 md:px-6">
        {testimonials.items.map((testimonial, index) => (
          <div key={index} className="relative min-w-[90%] snap-center rounded-2xl bg-white border border-slate-100 p-8 text-center shadow-sm md:min-w-[400px]">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-slate-50"
            />
            <div className="mt-4">
              <StarRating rating={testimonial.rating} />
            </div>
            <p className="mt-4 text-lg italic text-slate-600">"{testimonial.quote}"</p>
            <p className="mt-6 font-bold text-slate-900">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
