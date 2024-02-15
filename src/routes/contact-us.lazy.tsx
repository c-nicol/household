import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/contact-us')({
  component: ContactUs,
})

function ContactUs() {
  return <div className="p-2">Contact Us Page</div>
}