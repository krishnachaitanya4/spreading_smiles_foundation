import ContactItem from "./contact_sub/ContactItem";
import { IonIcon } from "@ionic/react";
import { locationSharp, mail, call,logoInstagram, logoFacebook, logoLinkedin, logoWhatsapp } from "ionicons/icons";
export default function Contact() {
  const contact = [
    { icon: locationSharp, value: "Peddapuram, Andhra Pradesh, India." },
    { icon: mail, value: "spreadingsmilesmainteam@gmail.com" },
    { icon: call, value: "+91 93916 57971" },
  ];
  const ic = contact.map((data) => (
    <ContactItem icon={data.icon} value={data.value} key={data.icon} />
  ));
  return (
    <div className="bg-violet-50 py-4">
      <div className="container mx-auto my-3 md:my-[80px]">
        <div className="md:grid grid-cols-2">
          <div>
            <div className="h-full flex items-center p-3 md:p-4 max-w-[600px] mx-auto">
              <div>
                <h2
                  className={`md:text-3xl mt-3 text-xl font-bold text-violet-700`}
                >
                  Contact Us
                </h2>
                <p className="text-sm text-gray-600 my-3">
                  We value your connection with Spreading Smiles Foundation.
                  Whether you have inquiries, suggestions, or simply want to
                  reach out, we're here to listen. Feel free to get in touch
                  with us using the provided contact options below. Your
                  messages matter, and we look forward to hearing from you.
                </p>
                {ic}
                <div className="flex text-violet-700 font-semibold">
                    <IonIcon icon={logoInstagram} className="m-2 text-xl text-pink-800"/>
                    <IonIcon icon={logoFacebook} className="m-2 text-xl text-blue-600"/>
                    <IonIcon icon={logoLinkedin} className="m-2 text-xl text-blue-800"/>
                    <IonIcon icon={logoWhatsapp} className="m-2 text-xl text-green-700"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15255.499994438876!2d82.12625716556276!3d17.07876600163947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37817ad2918e1b%3A0x3c057fdac27e89c5!2sPeddapuram%2C%20Andhra%20Pradesh%20533437!5e0!3m2!1sen!2sin!4v1696504388929!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              className="shadow-lg rounded-lg border-[20px] overflow-hidden border-violet-300"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
