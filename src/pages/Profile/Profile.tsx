import { useTranslation } from "react-i18next"
import me2 from "../../assets/me2.jpg"
import FranceFlag from "../../components/icons/FranceFlag"
import Github from "../../components/icons/Github"
import GreatBritainFlag from "../../components/icons/GreatBritainFlag"
import Linkedin from "../../components/icons/Linkedin"
import RussiaFlag from "../../components/icons/RussiaFlag"

const AVAILABLE = true

export default function Profile() {
  const [t] = useTranslation()

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-end -mt-14 xs:-mt-0">
        <div className="flex-1 z-10">
          <h1 className="mb-6 md:mb-12">
            <span className="highlight md:px-1.5">{t("tab.profile")}</span>
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
              <span>{t("profile.info.age")}</span>
            </h4>
            <h4 className="flex flex-wrap items-center mb-1">
              <span className="material-icons mr-2">place</span>
              <span className="text-amber-400 font-bold mr-1">
                {t("profile.info.address.0")},
              </span>
              <span>{t("profile.info.address.1")}</span>
            </h4>
            <h5 className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1 md:pl-1">
              <div className="flex">
                <span
                  className="text-amber-400 font-bold mr-2"
                  title="Drapeau Français"
                >
                  <FranceFlag className="rounded-lg" />
                </span>
                <span>{t("profile.langs.fr")}</span>
              </div>

              <div className="flex">
                <span
                  className="text-amber-400 font-bold mr-2"
                  title="Drapeau Anglais"
                >
                  <GreatBritainFlag className="rounded-lg" />
                </span>
                <span>{t("profile.langs.en")}</span>
              </div>

              <div className="flex">
                <span
                  className="text-amber-400 font-bold mr-2"
                  title="Drapeau Russe"
                >
                  <RussiaFlag className="rounded-lg" />
                </span>
                <span>{t("profile.langs.ru")}</span>
              </div>
            </h5>
          </div>
        </div>

        <div className="self-end px-0 py-5 md:py-0 lg:px-8 mt-10 sm:mt-0 -mb-10 md:mb-0">
          <img
            className="rounded-full overflow-hidden aspect-square object-cover"
            src={me2}
            alt="That's me !"
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
        {AVAILABLE ? t("profile.available.true") : t("profile.available.false")}
      </p>

      <p>
        {t("profile.digest.xp.0")}
        <span className="text-amber-400 font-bold mx-1">
          {t("profile.digest.xp.1")}
        </span>
        {t("profile.digest.xp.2")}
        <span className="text-amber-400 font-bold ml-1">
          {t("profile.digest.xp.3")}
        </span>
        .
        <br />
        <span className="text-amber-400 font-bold mr-1">React JS</span>
        {t("profile.favFramework.0")}
        <span className="text-amber-400 font-bold mx-1">
          Angular (JS et 2+)
        </span>
        {t("common.and")}
        <span className="text-amber-400 font-bold ml-1">VueJS</span>.
      </p>

      <p>
        {t("profile.favStack.0")}
        <span className="text-amber-400 font-bold ml-1">React</span>, ES6+,
        <span className="text-amber-400 font-bold ml-1">Typescript</span>, SCSS,
        Tailwind,
        <span className="text-amber-400 font-bold mx-1">GraphQL</span>
        {t("common.or")} API REST {t("common.and")}
        <span className="text-amber-400 font-bold mx-1">Strapi ♥</span>
      </p>

      <div className="flex flex-wrap gap-y-5 gap-x-16">
        <a
          href="https://github.com/Cobelt"
          target="_blank"
          className="flex text-white hover:text-rose-400 transition-colors"
        >
          <Github className="mr-2" size={30} />
          <span className="underline-on-hover">Cobelt</span>
        </a>
        <a
          href="https://github.com/mue-js"
          target="_blank"
          className="flex text-white hover:text-rose-400 transition-colors"
        >
          <Github className="mr-2" size={30} />
          <span className="underline-on-hover">MueJS</span>
        </a>
        <a
          href="https://www.linkedin.com/in/paul-emile-moreau/"
          target="_blank"
          className="flex text-white hover:text-rose-400 transition-colors"
        >
          <Linkedin className="mr-2" size={30} />
          <span className="underline-on-hover">Linkedin</span>
        </a>
      </div>
    </div>
  )
}
