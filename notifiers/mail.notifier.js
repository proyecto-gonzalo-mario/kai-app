const transporter = require("../configs/nodemailer.config");

module.exports.alert = (user, beaches) => {
  transporter.sendMail({
    from: "Kai <testironhack@gmail.com>",
    to: `${user.email}`,
    subject: "Something cool is coming in your favorite spot",
    html: getHtml(beaches)
  });
};


function getHtml(data) {
  let html = 
  `<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title></title>
  <!--[if (mso 16)]>
  <style type="text/css">
  a {text-decoration: none;}
  </style>
  <![endif]-->
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
</head>

<body>
  <div class="es-wrapper-color">
      <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#f6f6f6"></v:fill>
    </v:background>
  <![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">
          <tbody>
              <tr>
                  <td valign="top" class="esd-email-paddings">
                      <table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure es-p20b es-p20r es-p20l" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-image es-m-txt-c">
                                                                                      <a href="http://viewstripo.email" target="_blank"><img src="https://demo.stripo.email/content/guids/videoImgGuid/images/83131550191713702.png" alt="" width="309" style="display: block;"></a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure es-p20" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-image">
                                                                                      <a target="_blank"> <img class="adapt-img" src="https://demo.stripo.email/content/guids/7c66f9c6-128c-4df5-a1af-fe76a442a84f/images/77141550191829651.jpg" alt="" style="display: block;" width="495"> </a>
                                                                                  </td>
                                                                              </tr>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-spacer es-p20">
                                                                                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td style="border-bottom: 1px solid rgb(255, 255, 255); background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-text es-p15b">
                                                                                      <h2>Hey surfer! Parece que algo chulo se acerca...</h2>
                                                                                  </td>
                                                                              </tr>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-text">
                                                                                      <p>Y los spots que están funcionando para ti son...</p>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-spacer" height="15"> </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="left" class="esd-block-text">
                                                                                      <p>Texto</p>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-block-spacer" height="40" bgcolor="#f6f6f6"> </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure es-p30t es-p20r es-p40l" align="left">
                                                      <!--[if mso]><table width="540"><tr><td width="352" valign="top"><![endif]-->
                                                      <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="352" class="es-m-p0r es-m-p20b esd-container-frame" valign="top" align="center">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                      <!--[if mso]></td><td width="20"></td><td width="168" valign="top"><![endif]-->
                                                      <table cellpadding="0" cellspacing="0" align="right">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="168" align="left" class="esd-container-frame">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-content" align="center">
                          <tbody>
                              <tr>
                                  <td class="esd-stripe" align="center">
                                      <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                          <tbody>
                                              <tr>
                                                  <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                      <table cellpadding="0" cellspacing="0" width="100%">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="esd-block-image es-infoblock" align="center">
                                                                                      <a target="_blank" href="http://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=basic&utm_content=training"> <img src="https://demo.stripo.email/content/guids/videoImgGuid/images/83131550191713702.png" alt="" width="160" style="display: block;"> </a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</body>`

data.forEach(d => {
  html = html + `<td align="center" class="esd-block-text">
  <p>${d.name}</p>
  <p><br></p>
  <table border="1" align="center" cellspacing="1" cellpadding="1" style="width: 500px;">
      <thead>
          <tr>
              <th scope="col"><br></th>
              <th scope="col">${d.days[0].date}</th>
              <th scope="col">${d.days[1].date}</th>
              <th scope="col">${d.days[2].date}</th>
              <th scope="col">${d.days[3].date}</th>
              <th scope="col">${d.days[4].date}</th>
              <th scope="col">${d.days[5].date}</th>
              <th scope="col">${d.days[6].date}</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Wind Speed</td>
              <td>${d.days[0].windSpeed}</td>
              <td>${d.days[1].windSpeed}</td>
              <td>${d.days[2].windSpeed}</td>
              <td>${d.days[3].windSpeed}</td>
              <td>${d.days[4].windSpeed}</td>
              <td>${d.days[5].windSpeed}</td>
              <td>${d.days[6].windSpeed}</td>
          </tr>
          <tr>
              <td>Wind Direction</td>
              <td>${d.days[0].windDir}</td>
              <td>${d.days[1].windDir}</td>
              <td>${d.days[2].windDir}</td>
              <td>${d.days[3].windDir}</td>
              <td>${d.days[4].windDir}</td>
              <td>${d.days[5].windDir}</td>
              <td>${d.days[6].windDir}</td>
          </tr>
          <tr>
              <td>Waves (m)</td>
              <td>${d.days[0].swellHeight}</td>
              <td>${d.days[1].swellHeight}</td>
              <td>${d.days[2].swellHeight}</td>
              <td>${d.days[3].swellHeight}</td>
              <td>${d.days[4].swellHeight}</td>
              <td>${d.days[5].swellHeight}</td>
              <td>${d.days[6].swellHeight}</td>
          </tr>
          <tr>
              <td>Swell Direction</td>
              <td>${d.days[0].swellDir16Point}</td>
              <td>${d.days[1].swellDir16Point}</td>
              <td>${d.days[2].swellDir16Point}</td>
              <td>${d.days[3].swellDir16Point}</td>
              <td>${d.days[4].swellDir16Point}</td>
              <td>${d.days[5].swellDir16Point}</td>
              <td>${d.days[6].swellDir16Point}</td>
          </tr>
          <tr>
              <td>Swell Period</td>
              <td>${d.days[6].swellPeriod_secs}</td>
              <td>${d.days[1].swellPeriod_secs}</td>
              <td>${d.days[2].swellPeriod_secs}</td>
              <td>${d.days[3].swellPeriod_secs}</td>
              <td>${d.days[4].swellPeriod_secs}</td>
              <td>${d.days[5].swellPeriod_secs}</td>
              <td>${d.days[6].swellPeriod_secs}</td>
          </tr>
          <tr>
              <td>Significant Waves (m)</td>
              <td>${d.days[0].significantHeight_m}</td>
              <td>${d.days[1].significantHeight_m}</td>
              <td>${d.days[2].significantHeight_m}</td>
              <td>${d.days[3].significantHeight_m}</td>
              <td>${d.days[4].significantHeight_m}</td>
              <td>${d.days[5].significantHeight_m}</td>
              <td>${d.days[6].significantHeight_m}</td>
          </tr>
          <tr>
              <td>Temperature (ºC)</td>
              <td>${d.days[0].tempC}</td>
              <td>${d.days[1].tempC}</td>
              <td>${d.days[2].tempC}</td>
              <td>${d.days[3].tempC}</td>
              <td>${d.days[4].tempC}</td>
              <td>${d.days[5].tempC}</td>
              <td>${d.days[6].tempC}</td>
          </tr>
          <tr>
              <td>Wind Chill (ºC)</td>
              <td>${d.days[0].feelsLikeC}</td>
              <td>${d.days[1].feelsLikeC}</td>
              <td>${d.days[2].feelsLikeC}</td>
              <td>${d.days[3].feelsLikeC}</td>
              <td>${d.days[4].feelsLikeC}</td>
              <td>${d.days[5].feelsLikeC}</td>
              <td>${d.days[6].feelsLikeC}</td>
          </tr>
          <tr>
              <td>Water Temperature (ºC)</td>
              <td>${d.days[0].waterTemp_C}</td>
              <td>${d.days[1].waterTemp_C}</td>
              <td>${d.days[2].waterTemp_C}</td>
              <td>${d.days[3].waterTemp_C}</td>
              <td>${d.days[4].waterTemp_C}</td>
              <td>${d.days[5].waterTemp_C}</td>
              <td>${d.days[6].waterTemp_C}</td>
          </tr>
          <tr>
              <td>Weather Description</td>
              <td>${d.days[0].weatherDesc}</td>
              <td>${d.days[1].weatherDesc}</td>
              <td>${d.days[2].weatherDesc}</td>
              <td>${d.days[3].weatherDesc}</td>
              <td>${d.days[4].weatherDesc}</td>
              <td>${d.days[5].weatherDesc}</td>
              <td>${d.days[6].weatherDesc}</td>   
          </tr>
      </tbody>
  </table>
  <p><br></p>
</td>`
})
  

  return html
}
