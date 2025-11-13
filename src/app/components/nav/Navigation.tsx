
import Link from "next/link";
import React from "react";




export default function Navigation() {
  return (
    <div className="nav">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about-us">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact-us">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/carts">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}
