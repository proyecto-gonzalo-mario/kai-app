

const transporter = require("../configs/nodemailer.config");

module.exports.alert = (user, beachs) => {
  transporter.sendMail({
    from: "Kai <testironhack@gmail.com>",
    to: `${user.email}`,
    subject: "Something cool is coming in your favorite spot",
    html: beachs(beachs)
  });
}

const html = (user, beachs) => {
  const beatchsHtml = beachs(beachs);
  return ```
  Hey!
  ${beatchsHtml}
  ```;
}

const beachs = (beachs) => {
  return beachs.map(beach => {
    return ```
    <h1>Hello World</h1>
    ```;
  }).join('');
}

const 