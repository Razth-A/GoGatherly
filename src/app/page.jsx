import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Image } from "lucide-react"


export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-200 to-purple-100">
            <div className="sticky top-0 z-50 bg-white">
                <header className="bg-purple-700 text-white px-6 py-2 mx-0 my-0 rounded-l flex items-center justify-between shadow-md h-16">
                {/* Logo + Tagline */}
                <div className="flex items-center space-x-2">
                    <a href="http://localhost:5173/">
                        <img src="src/assets/logo.svg" alt="GoGatherly Logo" className="h-42 w-auto object-contain" />
                    </a>
                </div>

                {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-14 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300 font-sans text-[16px] relative group">
                            About
                            <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-950 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300 font-sans text-[16px] relative group">
                            Events
                            <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-950 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300 font-sans text-[16px] relative group">
                            Fees
                            <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-950 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300 font-sans text-[16px] relative group">
                            About Rareblocks
                            <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-950 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                    </nav>
                    {/* Log In */}
                    <a href="#" className="ml-auto bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">
                        Log in
                    </a>
            </header>
            </div>
            {/* Hero Section */}
            <section className="w-full min-h-screen bg-gradient-to-br from-white via-purple-200 to-purple-100 py-16 px-4 md:px-16 grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-fadeIn text-center md:text-left md:pl-12">
                    <h1 className="font-sans text-black text-5xl font-bold leading-tight text-gray-900 mb-4">
                        Gather Moments.
                    </h1>
                    <h1 className="font-sans text-black text-5xl font-bold leading-tight text-gray-900 mb-4">
                    Create Memorable
                    </h1>
                    <p className="text-gray-600 mb-6 max-w-md text-sm/7">
                        GoGatherly is your creative partner in making events that truly connect people.
                        We’re here to help you plan, build, and celebrate from brainstorm to afterparty.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-purple-500"
                        />
                        <Button className="bg-purple-700 hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[400px]">
                    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="relative w-full h-full">
                            <img
                                src="src/assets/pic6.jpg"
                                alt="Runner with medal"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-800/40 via-purple-500/20 to-transparent transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="relative w-full h-full">
                            <img
                                src="src/assets/ticket2.jpg"
                                alt="Concert crowd"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-800/40 via-purple-500/20 to-transparent transition-opacity duration-300" />
                        </div>
                    </div>

                    <div className="col-span-2 w-full h-full rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="relative w-full h-full">
                            <img
                                src="src/assets/pic3.jpg"
                                alt="Event tickets"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-700/30 via-purple-400/15 to-transparent transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-18 bg-gradient-to-l from-purple-200 to-purple-100 p-8">
                <div className="max-w-7xl mx-auto px-4 md:px-16">
                    <div className="flex justify-center mb-8">
            <span className="px-8 py-2 border-b-2 border-purple-700 text-purple-700 font-medium relative mb-10">
                Events
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-900 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-35 items-center">
                        <div className=" bg-gradient-to-t from-purple-800/30 via-purple-500/15 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                            <img
                                src="public/assets/pic1.jpg"
                                alt="Event tickets"
                                width={1800}
                                height={1000}
                                className="object-cover w-full h-full"
                                />
                        </div>
                        <div className="animate-slideInRight mb-60">
                            <h2 className="text-5xl font-bold text-purple-700 mb-10">
                                Let's be
                                <br />
                                <span className="text-purple-800">GoGatherly</span>
                            </h2>
                            <p className="text-gray-600 mb-3 text-base/8 text-pretty">
                                GoGatherly adalah platform digital untuk pembuatan tiket dan promosi event. Platform ini memudahkan
                                penyelenggara acara untuk menjangkau audiens dan mengelola acara mereka dengan mudah. GoGatherly hadir
                                untuk membantu penyelenggara acara yang sukses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Fees Section */}
            <section className="py-8 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-16">
                    <div className="flex justify-center mb-8">
                        <span className="px-8 py-2 border-b-2 border-purple-700 text-purple-700 font-medium">Fees</span>
                    </div>

                    <div className="text-center mb-12 animate-fadeIn">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Make Your Events</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Jadikan event Anda lebih berkesan dengan GoGatherly. Kami menyediakan solusi lengkap untuk kebutuhan event
                            Anda.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-15">
                        {[
                            {
                                title: "Event Ticket",
                                image: "/assets/ticket.jpg",
                                description: "Create and sell tickets"
                            },
                            {
                                title: "Online Reservation",
                                image: "/assets/book.jpg",
                                description: "Easy booking system"
                            },
                            {
                                title: "Exclusive Party",
                                image: "/assets/pic2.jpg",
                                description: "VIP experiences"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-[300px] opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                                />
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    <h3 className="font-medium">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-white p-1 rounded transform transition-all duration-300 group-hover:scale-110">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-gray-800"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mb-20">
                        <a
                            href="#"
                            className="text-purple-700 flex items-center text-sm group transition-all duration-300 hover:text-purple-900"
                        >
                            View more event types
                            <ChevronRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Make It Section */}
            <section className="py-8 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-16">
                    <div className="flex justify-center mb-15">
                        <span className="px-8 py-2 border-b-2 border-purple-700 text-purple-700 font-medium">Make It</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="animate-slideInLeft">
                            <h2 className="text-3xl font-bold">
                                <span className="text-purple-700">Urutan Pembuatan</span>
                                <br />
                                <span className="text-gray-900">Event</span>
                            </h2>
                            <div className="mt-8 space-y-8">
                                {[
                                    {
                                        number: 1,
                                        title: "Create",
                                        description: "Tambahkan nama/judul dan tentukan tanggal event",
                                    },
                                    {
                                        number: 2,
                                        title: "Customize!",
                                        description: "Tambahkan gambar, video, dan deskripsi di event yang kamu buat",
                                    },
                                    {
                                        number: 3,
                                        title: "Promosi",
                                        description: "Promosikan event kamu melalui media sosial di email list",
                                    },
                                    {
                                        number: 4,
                                        title: "Manage",
                                        description: "Manage event kamu dengan menggunakan dashboard dan fitur survey",
                                    },
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start transform transition-all duration-500 hover:translate-x-2"
                                    >
                                        <div className="bg-purple-100 text-purple-700 font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg mr-4 shadow-md">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
                            <img
                                src="src/assets/pic5.jpg"
                                alt="Event crowd"
                                width={1800}
                                height={1000}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Parent Container */}
            <section className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-300 to-purple-400">
                    <img
                        src="src/assets/pic4.jpg"
                        alt="Event background"
                        width={1200}
                        height={600}
                        className="object-cover w-full h-full scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/85 via-transparent to-transparent" />
                </div>

                {/* CTA Section */}
                <div className="relative z-10 py-5 bg-transparent">
                    <div className="max-w-7xl mx-auto px-4 md:px-16 text-center text-white mb-20">
                        <div className="mt-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-2 font-sans space-y-2 animate-fadeIn">Create Amazing</h2>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2 font-sans space-y-2 animate-fadeIn animation-delay-200">Memories</h2>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans space-y-2 animate-fadeIn animation-delay-400">
                                Out of Your Next Event
                            </h2>
                            <Button className="bg-black text-white-700 hover:bg-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-transparent py-8 px-4 md:px-16 relative z-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="font-bold text-lg flex items-center mb-4 md:mb-0">
                                <img src="src/assets/logo.svg" alt="GoGatherly Logo" className="h-45 w-auto object-contain" />
                            </div>
                            <nav className="flex flex-wrap justify-center gap-x-28 gap-y-2">
                                <a href="#" className="text-white hover:text-black transition-all duration-300">
                                    Product
                                </a>
                                <a href="#" className="text-white hover:text-black transition-all duration-300">
                                    Features
                                </a>
                                <a href="#" className="text-white hover:text-black transition-all duration-300">
                                    Pricing
                                </a>
                                <a href="#" className="text-white hover:text-black transition-all duration-300">
                                    Resources
                                </a>
                                <a href="#" className="text-white hover:text-black transition-all duration-300">
                                    Help
                                </a>
                                <a href="#" className="text-white hover:text-black transition-all duration-300">
                                    Privacy
                                </a>
                            </nav>
                        </div>
                        <div className="flex justify-center space-x-4">
                            {["facebook", "twitter", "instagram", "github"].map((social, index) => (
                                <div
                                    key={index}
                                    className="w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300 hover:bg-purple-300 hover:scale-110 mt-0"
                                >
                                    <img
                                        src={`/assets/${social}.svg`}
                                        alt={`${social} icon`}
                                        className="w-10 h-10"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Copyright Section */}
                        <div className="w-full border-t border-black/20 mt-8 pt-4 text-center">
                            <p className="text-sm text-white/60">© 2025 GoGatherly. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}
