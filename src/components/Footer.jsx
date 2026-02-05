export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/25 backdrop-blur-lg border-t border-white/10 z-50 pointer-events-auto">
      <div className="flex justify-between items-center w-full px-[18px] py-3 sm:px-6 sm:py-4 box-border">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-white text-xs sm:text-sm">Follow us on Instagram</span>
          <a 
            href="https://www.instagram.com/cougarhacks_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white no-underline transition-all duration-180 p-1.5 sm:p-2 sm:px-3 rounded-lg hover:text-brand hover:scale-110"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
          </a>
        </div>

        <a 
          href="https://shovanraut.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline text-xs sm:text-sm transition-colors duration-180 p-1.5 sm:p-2 sm:px-3 rounded-lg hover:text-brand"
        >
          Developed by Shovan Raut
        </a>
      </div>
    </footer>
  );
}
