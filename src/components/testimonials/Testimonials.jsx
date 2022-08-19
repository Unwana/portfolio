import "./testimonials.scss"


export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Joshua Mark",
      title: "CEO legit",
      img:
      "assets/thrift.jpg",
      icon: "assets/youtube.png",
      desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      id: 2,
      name: "Unwana Thomas",
      title: "CEO Eduinfo",
      img:
      "assets/bank.png",
      icon: "assets/linkedin.png",
      desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      featured: true,
    },

    {
      id: 3,
      name: "Divine U.",
      title: "CEO Royal Acessories",
      img:
      "assets/business.jpg",
      icon: "assets/twitter.png",
      desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
     
    },

  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
            <div className="container">
              {data.map((d) =>(
              <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                  <img src="assets/right-arrow.png" className="left" alt="" />
                  <img src={d.img} className="user" alt="" />
                  <img src={d.icon} className="right" alt="" />
                </div>
                <div className="center">
                  {d.desc}
                </div>
                <div className="bottom">
                  <h3>{d.name}</h3>
                  <h4>{d.title}</h4>
                </div>
              </div>
              ))}
            </div>
        </div>
  )
}
