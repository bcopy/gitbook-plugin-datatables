const cheerio = require('cheerio');
const crypto = require('crypto');

module.exports = {
    book:{
      assets: './assets',
      js: [ 'js/jquery.min.js'
           ,'js/jquery.dataTables.min.js'
           ,'js/dataTables.dataTables.min.js'
           ,'js/colReorder.dataTables.min.js'
           ,'js/dataTables.colReorder.min.js'
           ,'js/fixedColumns.dataTables.min.js'
           ,'js/dataTables.fixedColumns.min.js'
           ,'js/fixedHeader.dataTables.min.js'
           ,'js/dataTables.fixedHeader.min.js'
           ,'js/responsive.dataTables.min.js'
           ,'js/dataTables.responsive.min.js'
           ,'js/rowGroup.dataTables.min.js'
           ,'js/dataTables.rowGroup.min.js'
           ,'js/searchBuilder.dataTables.min.js'
           ,'js/dataTables.searchBuilder.min.js'
           ,'js/select.dataTables.min.js'
           ,'js/dataTables.select.min.js'   
           ,'js/searchPanes.dataTables.min.js'
           ,'js/dataTables.searchPanes.min.js'
          ,'js/plugin.js'],
      css: [ 'css/jquery.dataTables.min.css'
            ,'css/colReorder.dataTables.min.css'
            ,'css/fixedColumns.dataTables.min.css'
            ,'css/fixedHeader.dataTables.min.css'
            ,'css/responsive.dataTables.min.css'
            ,'css/rowGroup.dataTables.min.css'
            ,'css/searchBuilder.dataTables.min.css'
            ,'css/searchPanes.dataTables.min.css'
            ,'css/select.dataTables.min.css'
      ]
    },
    hooks: {
      init: async function () {
        
      },
      "page": function(page) {
        // Inspect page contents and initialize all tables that carry the datatables class
        const $ = cheerio.load(page.content, null, false);

        
        // Iterate around all the tables marked as datatables and collect their element id
        $('table[class=datatable]').each(function( index ) {
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