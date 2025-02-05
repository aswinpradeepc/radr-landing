'use client';

import { motion } from "framer-motion";
import { LinkIcon, TicketIcon, PlayCircleIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const services = [
  {
    id: "linkradr",
    title: "LinkRadr",
    icon: LinkIcon,
    description: "Compress complex URLs into memorable links with powerful analytics and tracking capabilities.",
    features: ["URL Shortening", "Click Analytics", "Custom Domains"],
    tagline: "Shrink Links, Expand Possibilities",
    url: "https://link.radr.in"
  },
  {
    id: "ticketradr",
    title: "TicketRadr",
    icon: TicketIcon,
    description: "Event management reimagined with seamless ticket generation and real-time tracking.",
    features: ["QR Ticket Generation", "Ticket Verification Scanner", "Real-time Analytics"],
    tagline: "Your Event, Perfectly Managed",
    url: "https://ticket.radr.in",
    highlight: {
      prefix: "Successfully implemented at ",
      event: "International Conclave on Next-Gen Higher Education 2025"
    },
    highlightLink: "https://keralahighereducation.com/"
  },
  {
    id: "eventsradar",
    title: "EventsRadar",
    icon: PlayCircleIcon,
    description: "Interactive event platform with digital engagement tools for memorable offline experiences.",
    features: ["Digital Human Bingo", "Ice Breaking Games", "Event Analytics"],
    tagline: "Making Events Interactive & Fun",
    url: "https://eventsradar.in",
    highlight: {
      prefix: "Successfully implemented at ",
      event: "Make-A-Ton 7"
    },
    highlightLink: "https://makeaton.in"
  },
  {
    id: "pollflow",
    title: "Poll Flow",
    icon: ChartBarIcon,
    description: "Create engaging polls and visualize responses in real-time with beautiful animated charts, completely free and ad-free.",
    features: ["Real-time Results", "Animated Charts", "Easy Sharing", "Free, No Ads"],
    tagline: "Engage Your Audience Instantly",
    url: "https://polls.radr.in"
  }
];

export default function Services() {
  const handleHighlightClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-dark-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-outfit font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful digital tools designed to enhance your productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark-100 rounded-xl p-8 border border-dark-200 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="h-full">
                <div 
                  onClick={() => window.open(service.url, '_blank', 'noopener,noreferrer')}
                  className="cursor-pointer"
                >
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-primary" />
                    <h3 className="text-2xl font-outfit font-bold ml-4 text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    {service.tagline}
                  </p>
                </div>

                {service.highlight && (
                  <div 
                    className="mt-4 py-2 px-4 bg-emerald-500/10 rounded-lg cursor-pointer"
                    onClick={(e) => service.highlightLink && handleHighlightClick(e, service.highlightLink)}
                  >
                    <p className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
                      {service.highlight.prefix}
                      <span className="underline hover:text-emerald-300 transition-colors">
                        {service.highlight.event}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
