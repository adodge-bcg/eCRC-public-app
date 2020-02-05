import './Footer.scss';
import React from 'react';

export default function Footer(props) {

  return (
    <footer class="footer">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content/home/disclaimer"
                target="_blank"
                >Disclaimer</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content/home/privacy"
                target="_blank"
                >Privacy</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content/home/accessibility"
                target="_blank"
                >Accessibility</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content/home/copyright"
                target="_blank"
                >Copyright</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content/home/contact-us"
                target="_blank"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}