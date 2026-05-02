const Footer = () => (
  <footer className="mt-24 pb-8 px-4">
    <div className="max-w-6xl mx-auto glass px-6 py-6 text-center text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">
        <span className="text-gradient">VortixWorld</span> Userscript Tutorial
      </p>
      <p className="mt-1">© {new Date().getFullYear()} VortixWorld. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
