import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between gap-20 md:gap-32 lg:gap-0">
      <div className="socials lg:w-[30%] flex flex-col gap-20">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-10">Reach out</h1>
        <h3 className="text-4xl md:text-5xl leading-snug">
          Always open to connect and build websites using your designs
        </h3>
        <div className="flex flex-col md:flex-row gap-10 md:items-center justify-between">
          <div className="social flex flex-col gap-2">
            <p className="text-3xl">Mail me at</p>
            <a
              href="mailto:yashrbelsare@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-3xl font-semibold"
            >
              yashrbelsare@gmail.com
            </a>
          </div>
          <div className="social flex flex-col gap-2">
            <p className="text-3xl">Follow me</p>
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/yash-belsare/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://github.com/yashb07"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/yashb__07/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <form
        className="form md:w-full lg:w-[60%] flex flex-col gap-14 bg-[#212121] p-32"
        name="contact"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        {/* // TODO input focus css */}
        <input
          className="text-3xl bg-transparent text-[#f8f8f8] border-b-2 placeholder-[#f8f8f8] font-light"
          placeholder="Your name"
          type="text"
          name="name"
          id="name"
          required
        />

        <input
          className="text-3xl bg-transparent text-[#f8f8f8] border-b-2 placeholder-[#f8f8f8]"
          placeholder="Your email address"
          type="email"
          name="email"
          id="email"
          required
        />

        <input
          className="text-3xl bg-transparent text-[#f8f8f8] border-b-2 placeholder-[#f8f8f8]"
          placeholder="Your budget (optional)"
          type="budget"
          name="budget"
          id="budget"
          required
        />

        <textarea
          className="text-3xl bg-transparent text-[#f8f8f8] border-b-2 placeholder-[#f8f8f8]"
          placeholder="Your project description / Figma file link"
          name="description"
          id="description"
          rows="5"
          required
          resize="none"
        ></textarea>

        <button
          className="text-3xl bg-[#f8f8f8] float-right self-end px-10 py-3"
          type="submit"
          value="Send"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
