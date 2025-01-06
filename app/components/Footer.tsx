import React from 'react'

type Props = {}

const Footer = (_: Props) => {
  return (
    <footer className="footer bg-base-300 text-base-content">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        <p>
          &copy; {new Date().getFullYear()} Shri Aadinath Dham. All rights reserved.
        </p>
        <p>
          Made with ❤️ by <a target='_blank' rel="noreferrer" href="https://jainprashul.now.sh">Prashul Jain</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer