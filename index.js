/*
*
* Envio de email utilziando o host do Gmail,
* com NodeJS e Nodemailer.
*
*/
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
       user : "divvi.co@gmail.com",
       pass: "senha"
   }
});

transporter.sendMail({
    from:"Divvi Company <divvi.co@gmail.com>",
    to: "nome@gmail.com",
    subject: "Seu Cadastro foi realizado com Sucesso!!",
    text: "O seu email foi cadastrado no divvi.company para receber as novidades e atualizações do nosso sistema!!",
    html: "O seu email foi cadastrado no  <a href= 'http://divvi.company/'> divvi.company</a>  para receber as novidades e atualizações do nosso sistema!!"

}).then(message => {
    console.log(message)
}).catch(err =>{
    console.log(err);
})

