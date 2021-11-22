const interpolate = (value, session = {}, options = {}) => {

    if (!value) {
        console.log("No value param provided!")
        return "";
    }

    if (Object.keys(options).length === 0){
        console.log("No options param provided!!")
        return value
    }

    if (Object.keys(session).length === 0){
        // /\w {\w+}/gm
        let reg_ex = new RegExp('\\w?'+options.leftDelimiter+'\\w+' + options.rightDelimiter,'gm')
        value = value.replace(reg_ex,'')
        return value
    }

    Object.keys(session).forEach((item => {
        let tempItem = "";
        tempItem = options.leftDelimiter + item + options.rightDelimiter
        value = value.split(tempItem).join(session[item])
    }))

    return value

};

interpolate('Hi {firstname}, how are you today?', { }, { leftDelimiter: '{', rightDelimiter: '}' });

module.exports = { interpolate }