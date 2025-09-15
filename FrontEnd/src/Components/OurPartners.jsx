
import { useTranslation } from "react-i18next"


const partners = [
  { logo: "https://static.tildacdn.com/stor6561-3764-4431-b331-653133333835/44124735.svg", link: "https://ru.childrenmustlive.com/" },
    { logo: "https://optim.tildacdn.com/stor6636-3736-4233-b534-663764326434/-/contain/273x180/center/center/-/format/webp/80101931.png.webp", link: "https://childrenmustlive.com/" },
  { logo: "https://static.tildacdn.com/stor6530-3330-4539-a439-353064643561/45155937.svg", link: "https://fond-zhizn-odna.ru/" },
  { logo: "https://optim.tildacdn.com/stor3335-6332-4162-a564-633932373934/-/contain/258x273/center//-/format/webp/25343419.png.webp", link: "https://heha.school/" },
  { logo: "https://static.tildacdn.com/stor6361-6239-4332-b636-386662376666/72767092.svg", link: "https://tabor.school/" },
  { logo: "https://optim.tildacdn.com/stor3831-3037-4439-a166-383938636566/-/contain/200x273/center/center/-/format/webp/22957104.png.webp", link: "https://kilicenter.com/" },
  { logo: "https://optim.tildacdn.com/stor3938-6239-4665-b134-616563356433/-/contain/219x273/center/center/-/format/webp/51091058.jpg.webp", link: "https://www.linkedin.com/company/hope-for-a-better-future-burundi/?originalSubdomain=bi" },
  { logo: "https://optim.tildacdn.com/stor3732-3635-4531-b034-666164326661/-/contain/273x240/center/center/-/format/webp/96863038.jpg.webp", link: "https://web.facebook.com/Littlechildrenofuganda/?_rdc=1&_rdr#" },
  { logo: "https://optim.tildacdn.com/stor6265-3963-4039-b933-613261616633/-/contain/273x159/center/center/-/format/webp/99013042.jpg.webp", link: "https://fondrb.ru/" },
  { logo: "https://optim.tildacdn.com/stor3030-3431-4135-a538-336363333132/-/contain/238x369/center/center/-/format/webp/34888338.png.webp", link: "https://deti-priut.ru/" },
  { logo: "https://optim.tildacdn.com/stor3738-6538-4239-a263-623335386236/-/contain/156x154/center/center/-/format/webp/87051090.png.webp", link: "https://nash-priut.ru/" },
  { logo: "https://static.tildacdn.com/stor3230-6164-4139-a663-316562356338/25021731.svg", link: "https://luchnadejdy.ru/" },
  { logo: "https://static.tildacdn.com/stor3537-3864-4162-b834-376136666337/88184291.svg", link: "https://priut-dom.ru/" },
  { logo: "https://static.tildacdn.com/stor3564-6235-4033-b165-643035366464/72988856.svg", link: "https://priutdetyam.ru/" },
  { logo: "https://optim.tildacdn.com/stor3430-3062-4466-b834-376333333931/-/contain/360x360/center/center/-/format/webp/19143886.jpg.webp", link: "" },
  { logo: "https://optim.tildacdn.com/stor6630-6533-4664-b463-663063666537/-/contain/369x147/center/center/-/format/webp/21507526.png.webp", link: "https://blagovestt.ru/" },
  { logo: "https://optim.tildacdn.com/stor6238-3637-4138-a332-386439303765/-/contain/369x344/center/center/-/format/webp/79813390.png.webp", link: "https://fond-providenie.ru/" },
  { logo: "https://optim.tildacdn.com/stor6338-6663-4739-b830-343639343933/-/contain/369x115/center/center/-/format/webp/54951265.png.webp", link: "https://xn----7sbbrcp2afgypmh4exf.xn--p1ai/" },
  { logo: "https://optim.tildacdn.com/stor3932-3037-4163-b032-613037323637/-/contain/363x369/center/center/-/format/webp/37530445.jpg.webp", link: "" },
  { logo: "https://optim.tildacdn.com/stor3464-6639-4266-b733-636336343161/-/contain/369x346/center/center/-/format/webp/54319265.jpg.webp", link: "" },
  { logo: "https://optim.tildacdn.com/stor3731-3938-4232-b262-653465376437/-/contain/273x273/center/center/-/format/webp/47236220.jpg.webp", link: "" },

]


const OurPartners = () => {
    const { t } = useTranslation();  

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white  pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">{t("Our_partners_T")}</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 justify-items-center py-6">
          {partners.map((partner, index) => (
            <div key={index}>
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo}
                    alt={`Partner ${index + 1}`}
                    className="h-16 w-auto object-contain hover:grayscale grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  />
                </a>
              ) : (
                <img
                  src={partner.logo}
                  alt={`Partner ${index + 1}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurPartners