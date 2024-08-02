import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/placeholder.svg"
            width="48"
            height="48"
            alt="Barbershop Logo"
            className="rounded-full"
            style={{ aspectRatio: "48/48", objectFit: "cover" }}
          />
          <div className="text-2xl font-bold">Razor's Edge Barbershop</div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Barbers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Gallery
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Welcome to Razor\'s Edge</h1>
              <p className="text-muted-foreground text-lg">
                Experience the finest barbering services in town. Our skilled team of barbers are dedicated to providing
                you with a top-notch grooming experience.
              </p>
              <div className="flex gap-4">
                <Button>Book Appointment</Button>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  Learn More <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Barbershop Interior"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
        </section>
        <section id="barbers" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Meet Our Barbers</h2>
              <p className="text-muted-foreground text-lg">
                Our team of skilled barbers are dedicated to providing you with the perfect haircut.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Barber 1"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <div className="text-xl font-bold">John Doe</div>
                  <div className="text-muted-foreground">Specialty: Classic Cuts</div>
                  <p className="text-muted-foreground">
                    John has been a barber for over 10 years and is known for his precision in classic haircuts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Barber 2"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <div className="text-xl font-bold">Jane Smith</div>
                  <div className="text-muted-foreground">Specialty: Fades and Tapers</div>
                  <p className="text-muted-foreground">
                    Jane is a master of fades and tapers, creating sharp, clean looks for her clients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Barber 3"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <div className="text-xl font-bold">Michael Johnson</div>
                  <div className="text-muted-foreground">Specialty: Beard Trims and Shaves</div>
                  <p className="text-muted-foreground">
                    Michael is an expert in beard grooming, ensuring his clients look their best.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Barber 4"
                  className="rounded-t-xl object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <div className="text-xl font-bold">Emily Davis</div>
                  <div className="text-muted-foreground">Specialty: Precision Cuts</div>
                  <p className="text-muted-foreground">
                    Emily's attention to detail and steady hand make her a master of precision cuts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="gallery" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Gallery</h2>
              <p className="text-muted-foreground text-lg">
                Check out some of our past haircuts and satisfied clients.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Gallery 1"
                className="rounded-xl object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Gallery 2"
                className="rounded-xl object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Gallery 3"
                className="rounded-xl object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Gallery 4"
                className="rounded-xl object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Hear from our satisfied customers about their experience at Razor's Edge.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="text-lg font-bold">"The best barbershop in town!"</div>
                  <p className="text-muted-foreground">
                    "I've been coming to Razor's Edge for years and I\n wouldn't go anywhere else. The barbers are
                    always\n friendly and do an amazing job."
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Client 1"
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-muted-foreground text-sm">Satisfied Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="text-lg font-bold">"The best haircut I've ever had!"</div>
                  <p className="text-muted-foreground">
                    "I was a little hesitant to try a new barbershop, but I'm\n so glad I did. The team at Razor's Edge
                    really knows\n what they're doing."
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Client 2"
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-bold">Jane Smith</div>
                      <div className="text-muted-foreground text-sm">Satisfied Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="text-lg font-bold">"Highly recommended!"</div>
                  <p className="text-muted-foreground">
                    "I've been coming to Razor's Edge for years and I'm\n always impressed with the level of service and
                    attention\n to detail."
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Client 3"
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-bold">Michael Johnson</div>
                      <div className="text-muted-foreground text-sm">Satisfied Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground text-lg">
                Get in touch with us to book your appointment or ask any questions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-6 w-6 text-muted-foreground" />
                  <span>555-555-5555</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-6 w-6 text-muted-foreground" />
                  <span>info@razorsedgebarbershop.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-6 w-6 text-muted-foreground" />
                  <span>123 Main St, Anytown USA</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Razor's Edge Barbershop. All rights reserved.</div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}