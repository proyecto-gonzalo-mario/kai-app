const transporter = require("../configs/nodemailer.config");

module.exports.alert = (user, beaches) => {
  transporter.sendMail({
    from: "Kai <testironhack@gmail.com>",
    to: `${user.email}`,
    subject: "Something cool is coming in your favorite spot",
    html: htmlBuilt
  });
};

//html de layaout
const htmlBuilt = (user, beaches) => {
  const beachesHtml = beaches(beaches)
  return ```
  Hey!
  ${beachesHtml}
  ```;
};

//html maqueta para playa
const beaches = (beaches) => {
  console.log(beaches)
  return beaches
    .map(beach => {
      return ```
    <h1>Hello World</h1>
    ```;
    })
    .join("");
};
