function capitalize(str){
    if(!isNaN(str)) return null;
    if(!str) return null;

    let res=str[0].toUpperCase();
    res=res.concat(str.slice(1));
    return res;
}

export default capitalize;