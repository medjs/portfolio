import ContactForm from "./components/contactForm";

export default function Contact(){
    return(
        <div className="w-full h-screen flex-col justify-center items-center">
            <h1 className="text-3xl text-center my-10 font-semibold">This is cotact page</h1>
            <ContactForm/>
        </div>
    )
}