const argToReply = {
  "--help": `
  Accessible parametres \n
  --help    | prints accessible parametres \n
  --version | prints current version of this application`,
  
  "--version": `
  v.1.0.0
  `,
  
  "default": `
  Use --help parametre to see accessible parametres
  `,
}

const reply = () => {
  let arg = process.argv.slice(2)[0]

  arg = arg || `default`

  console.log(argToReply[arg])
}

module.exports.reply = reply;