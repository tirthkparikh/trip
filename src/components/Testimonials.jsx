const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Travco made our honeymoon absolutely perfect! Every detail was taken care of, and we had the most amazing time in Bali. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "London, UK",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "The best travel agency I've ever used. Their customer service is outstanding, and they found us incredible deals. Will definitely book again!"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "Our family trip to Japan was seamless thanks to Travco. They handled everything from flights to hotels to activities. Truly professional!"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Sydney, Australia",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "I've traveled with many agencies, but Travco stands out. Their attention to detail and personalized service is unmatched. Five stars!"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

