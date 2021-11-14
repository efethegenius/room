import React from "react";

const infos = [
  {
    key: 1,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/950e16743fa75a79c95d9498980505b3/1bf6c290",
    title: "About our furniture",
    text: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
    image2:
      "https://dl.airtable.com/.attachmentThumbnails/aa3ef1258cbefcff4ccb3005d97066bc/1cb31966",
  },
];

export const Body = () => {
  return (
    <section>
      {infos.map((info) => {
        const { id, image, image2, title, text } = info;
        return (
          <div key={id} className="body">
            <img src={image} alt="img1" />
            <div className="body-details">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
            <img src={image2} alt="img2" />
          </div>
        );
      })}
    </section>
  );
};
