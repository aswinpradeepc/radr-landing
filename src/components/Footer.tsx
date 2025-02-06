export default function Footer() {
  return (
    <footer className="bg-dark-100 text-white py-12 border-t border-dark-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-outfit font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Radr.in
            </h3>
            <p className="text-gray-400 max-w-md">
              A subsidiary of{' '}
              <a 
                href="https://lamsta.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                Lamsta.com
              </a>
              , powering digital efficiency through innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-outfit font-semibold mb-4 text-white">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://link.radr.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">LinkRadr</a>
                </li>
                <li>
                  <a href="https://ticket.radr.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">TicketRadr</a>
                </li>
                <li>
                  <a href="https://eventsradar.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">EventsRadar</a>
                </li>
                <li>
                  <a href="https://polls.radr.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Poll Flow</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-outfit font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:aswinpradeepc@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-200 mt-8 pt-8 text-center text-gray-500">
          <p> {new Date().getFullYear()} Radr.in. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            Proudly developed at Cochin University of Science and Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
