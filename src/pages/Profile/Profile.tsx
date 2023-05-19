import me from "../../assets/me.jpg"
import me2 from "../../assets/me2.jpg"
import Github from "../../components/icons/Github"
import Linkedin from "../../components/icons/Linkedin"

const AVAILABLE = true

export default function Profile() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-end -mt-14 xs:-mt-0">
        <div className="flex-1 z-10">
          <h1 className="mb-6 md:mb-12">
            <span className="highlight md:px-1.5">Profil</span>
          </h1>
          <div>
            <h4 className="flex items-center mb-1 whitespace-nowrap">
              <span className="material-icons mr-2">face</span>
              <span className="text-base">Paul-Emile</span>
              <span className="text-amber-400 font-bold ml-1">MOREAU</span>
            </h4>
            <h4 className="flex items-center mb-1">
              <span className="material-icons mr-2 text-amber-400">
                celebration
              </span>
              <span>23 ans</span>
            </h4>
            <h4 className="flex flex-wrap items-center mb-1">
              <span className="material-icons mr-2">place</span>
              <span className="text-amber-400 font-bold mr-1">Flers,</span>
              <span>Normandie</span>
            </h4>
            <h5 className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1 md:pl-1">
              <div>
                <span
                  className="text-amber-400 font-bold mr-2"
                  title="Drapeau Français"
                >
                  🇫🇷
                </span>
                <span>natif</span>
              </div>

              <div>
                <span
                  className="text-amber-400 font-bold mr-2"
                  title="Drapeau Anglais"
                >
                  🇬🇧
                </span>
                <span>confirmé</span>
              </div>

              <div>
                <span
                  className="text-amber-400 font-bold mr-2"
                  title="Drapeau Russe"
                >
                  🇷🇺
                </span>
                <span>notions</span>
              </div>
            </h5>
          </div>
        </div>

        <div className="relative px-0 py-5 md:py-0 lg:px-8 mt-10 sm:mt-0 -mb-12 md:mb-0">
          <img
            className="rounded-full overflow-hidden"
            src={me}
            alt="A pic of myself"
            style={{ width: "calc(3em + 12vw)", maxWidth: "14rem" }}
          />
          <img
            className="absolute top-5 md:top-0 rounded-full overflow-hidden aspect-square object-cover animate-fade-in"
            src={me2}
            alt="Another pic of myself"
            style={{ width: "calc(3em + 12vw)", maxWidth: "14rem" }}
          />
        </div>
      </div>

      <p className="inline">
        <span
          className={[
            "material-icons mr-2 align-sub",
            AVAILABLE ? "text-lime-400" : "text-rose-600",
          ].join(" ")}
        >
          adjust
        </span>
        {AVAILABLE
          ? "Actuellement disponible pour vos missions en full remote !"
          : "Je suis actuellement déjà pas mal occupé !"}
      </p>

      <p>
        Diplômé d'un
        <span className="text-amber-400 font-bold mx-1">Bac+3</span>
        en informatique, j'exerce le métier de développeur web depuis
        <span className="text-amber-400 font-bold ml-1">5 ans</span>.
        <br />
        <span className="text-amber-400 font-bold mr-1">React JS</span>
        reste mon framework préféré, mais j'ai déjà eu à faire à
        <span className="text-amber-400 font-bold mx-1">
          Angular (JS et 2+)
        </span>
        et
        <span className="text-amber-400 font-bold ml-1">VueJS</span>.
      </p>

      <p>
        Ma stack préférée :
        <span className="text-amber-400 font-bold ml-1">React</span>, ES6+,
        <span className="text-amber-400 font-bold ml-1">Typescript</span>, SCSS,
        Tailwind,
        <span className="text-amber-400 font-bold mx-1">GraphQL</span>ou REST et
        <span className="text-amber-400 font-bold mx-1">Strapi ♥</span>pour le
        back
      </p>

      <div className="flex flex-wrap gap-y-5 gap-x-16">
        <a
          href="htts://github.com/Cobelt"
          target="_blank"
          className="flex text-white hover:text-rose-400 transition-colors"
        >
          <Github className="mr-2" size={30} />
          <span className="underline-on-hover">Cobelt</span>
        </a>
        <a
          href="https://www.linkedin.com/in/paul-emile-moreau/"
          target="_blank"
          className="flex text-white hover:text-rose-400 transition-colors"
        >
          <Linkedin className="mr-2" size={30} />
          <span className="underline-on-hover">Paul-Emile Moreau</span>
        </a>
      </div>
    </div>
  )
}
