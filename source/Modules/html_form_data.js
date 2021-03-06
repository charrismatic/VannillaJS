var form_data = (() => {

  function parse_node_properties ( node, property ) {
    var result = [];
    var attr = node[property];
    // var entries = Object.entries( attr );
    // var keys = Object.keys( attr );
    var values = Object.values( attr );
    result.push( node.tagName.trim() );
    for (var value of values ) {
      result.push( value.name.trim() +'='+ value.value.trim() );
    }
    return '' + result.join(' ').trim() + '\n';
  }

  function get_site_form_data() {
    var forms = this.document.querySelectorAll('form');
    var form_result = [];
    var result = [];
    result.push('\n---\n');
    for (var form of forms){
      form_result = parse_node_properties( form, 'attributes' );
      result.push(form_result.trim());
      var inputs = form.querySelectorAll('input');
      var input_results = ['  '];
      for (var input of inputs ){
        var input_row = parse_node_properties( input , 'attributes');
        input_results.push( '  ' + input_row );
      }
      result.push( input_results.join('\n') );
      result.push('---\n');
    }
    var header = '### SITE FORMS \n\n';
    return (header + result.join('\n').trim());
  }
  console.log( get_site_form_data());
})();
