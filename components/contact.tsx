import Link from "next/link";
import { userData } from "@/lib/data";
import { CiMail } from "react-icons/ci";
import Divider from "./ui/divider";

function Contact() {
  const whatsappLink: string =
    "https://wa.me/7004575424?text=Hi Vishal, Please send your resume to me.";
  return (
    <>
      <section className="my-10">
        {/* contact card */}
        <h1 className="text-2xl md:text-4xl font-semibold pb-5 text-gray-800 dark:text-gray-200">
          Let&apos;s Build Something Together
        </h1>
        <div className=" rounded p-6 my-4 w-full  ring-1 ring-rose-200 dark:ring-rose-500/40  bg-gray-50 dark:bg-zinc-800">
          <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
            Drop your message
          </h5>
          <p className="my-1 text-gray-800 dark:text-gray-200">
            It won&apos;t take more than 10 seconds..
          </p>
          <Link href={whatsappLink} target="_blank">
            <div className="mt-4 px-4 text-center w-full font-bold h-8 hover:bg-green-500 bg-green-400  text-gray-900 py-1 dark:text-zinc-800 rounded">
              Chat on WhatsApp
            </div>
          </Link>
          {/* divider */}
          <Divider margin={8} />
          {/* email */}
          <div>
            <p className="my-1 text-gray-800 dark:text-gray-200">
              Feel free to reach out if you&apos;re loking for a developer, have
              a question or just want to connect. You can also find me on
              <Link
                href={userData.socialLinks.linkedin}
                target="_blank"
                className="text-blue-500  font-bold px-1 hover:underline"
              >
                Linkedin
              </Link>
              .
            </p>
            <div className="flex justify-center py-2">
              <Link href={`mailto:${userData.email}`}>
                <span className="flex items-center gap-2 text-lg font-bold dark:text-gray-200">
                  <CiMail /> {userData.email}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
