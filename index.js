class Formatter {
  //add static methods here
  static capitalize(string){
    let str = string.split("");
    str[0] = str[0].toUpperCase();
    return str.join('');
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  // static titleize(string){
  //   /*the, a, an, but, of, and, for, at, by, */
  //   let str = string.split("");
  //   const exceptionArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  //   for(let i = 0; i <str.length; i++){
  //     if (!exceptionArr.includes(i)){
  //       str[i][0].split("")[0].toUpperCase();
  //     }
        
  //   }
  //   return str.join('');
  // }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
    // str.map(e => {
    //   if (!exceptionArr.includes(e)){
    //     e.split("")[0].toUpperCase();
    //   }
    // })
  }
