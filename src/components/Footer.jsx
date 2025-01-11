const Footer = () => {
    return (
      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Precious Star. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:text-accent">Contact Us</a>
            <a href="#" className="mx-2 hover:text-accent">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  