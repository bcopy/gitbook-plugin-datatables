const cheerio = require('cheerio');
const crypto = require('crypto');

module.exports = {
    book:{
      assets: './assets',
      js: [ 'js/jquery.min.js','js/jquery.dataTables.min.js', 'js/dataTables.dataTables.min.js','js/plugin.js'],
      css: [ 'css/jquery.dataTables.min.css']
    },
    hooks: {
      init: async function () {
        
      },
      "page": function(page) {
        // Inspect page contents and initialize all tables that carry the datatables class
        const $ = cheerio.load(page.content, null, false);

        
        // Iterate around all the tables marked as datatables and collect their element id
        $('table[class=datatable]').each(function( index ) {
          console.debug("Processing table "+index);
          if (  $(this).attr('id') === undefined ){
            $(this).attr('id',`datatable-${crypto.randomBytes(16).toString('base64').substring(0, 16)}`);
          }
          $(this).attr("data-dt-process", "true");
        });

        page.content = $.html();

        return page;
      },
    }
  };