import { GoLinkExternal } from "react-icons/go";

function Projects() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-10">Projects</h1>
      <div className="about-cards flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-20">
        <div className="about-card w-full">
          <a
            href="https://github.com/yashb07/Full-Stack-Website-Minor-Project"
            target="_blank"
            className="flex items-center gap-10 cursor-pointer font-semibold text-4xl md:text-5xl"
            rel="noreferrer"
          >
            Pets App - AWS{" "}
            <GoLinkExternal className="text-3xl md:text-4xl"></GoLinkExternal>
          </a>
          <p className="text-3xl">
            Designed and developed a CRUD application using AWS Amplify cloud
            backend, React JS as a frontend and integrated other useful features
            such as Authentication, email verification and a feature to upload
            and play publically available music.
          </p>
        </div>
        <div className="about-card w-full">
          <a
            href="https://github.com/yashb07/Full-Stack-Website-Minor-Project"
            target="_blank"
            className="flex items-center gap-10 cursor-pointer font-semibold text-4xl md:text-5xl"
            rel="noreferrer"
          >
            Vocal - Music Platform{" "}
            <GoLinkExternal className="text-3xl md:text-4xl"></GoLinkExternal>
          </a>
          <p className="text-3xl">
            We, a group of four students are in the process of developing and
            designing a highly complex music streaming web application which
            will combine AI ML, Cloud development and deployment, and Web
            development using Next JS.{" "}
            <e className="text-3xl text-slate-800">Read more...</e>
          </p>
        </div>
        <div className="about-card w-full">
          <a
            href="https://github.com/yashb07/php-bot-detector"
            target="_blank"
            className="flex items-center gap-10 cursor-pointer font-semibold text-4xl md:text-5xl"
            rel="noreferrer"
          >
            PHP - Bot Detector{" "}
            <GoLinkExternal className="text-3xl md:text-4xl"></GoLinkExternal>
          </a>
          <p className="text-3xl">
            Developed a PHP web application to detect bots using several
            different detection techniques. The application also reroutes to a
            static page if the client is a bot.
          </p>
        </div>
        {/* <div className="about-card w-full">
          <a
            href="https://github.com/yashb07/ai-radio"
            target="_blank"
            className="flex items-center gap-10 cursor-pointer font-semibold text-4xl md:text-5xl"
            rel="noreferrer"
          >
            Flutter - AI Radio{" "}
            <GoLinkExternal className="text-3xl md:text-4xl"></GoLinkExternal>
          </a>
          <p className="text-3xl">
            Developed a Flutter mobile application providing voice assistance
            using AlanAI to a music player with a fluid UI, and proper AI query
            responses.
          </p>
        </div>
        <div className="about-card w-full">
          <a
            href="https://github.com/yashb07/Full-Stack-Website-Minor-Project"
            target="_blank"
            className="flex items-center gap-10 cursor-pointer font-semibold text-4xl md:text-5xl"
            rel="noreferrer"
          >
            Social Media Website{" "}
            <GoLinkExternal className="text-3xl md:text-4xl"></GoLinkExternal>
          </a>
          <p className="text-3xl">
            Designed and developed a full-stack social media website with many
            features such as media upload, comments, likes, and more. The web
            application was built using PHP, MySQL.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
