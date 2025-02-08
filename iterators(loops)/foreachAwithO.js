const languages = [
    {   languageName:'javascript',
        languageFileName : '.js'
    },
    {   languageName:'c Plus Plus',
        languageFileName : '.cpp'
    },
    {   languageName:'c',
        languageFileName : '.c'
    }
]

languages.forEach((item)=>{
    console.log(`the first Language with name ${item.languageName} , and file extention ${item.languageFileName}`)
})