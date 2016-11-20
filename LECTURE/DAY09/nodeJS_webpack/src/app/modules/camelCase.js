/*! camelCase.js © yamoo9.net, 2016 */
function camelCase(s) {
  return s.split(' ')
    .map(function(k, i){
      if ( i === 0 ) { return k; }
      return k.replace(/^./, function($1){
          return $1.toUpperCase();
      });
    }).join('');
}

module.exports = camelCase;