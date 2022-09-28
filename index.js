const cheerio = require('cheerio');
const crypto = require('crypto');

module.exports = {
    hooks: {
      init: async function () {
        console.warn("Starting Datatables plugin...");
      },
      "page": function(page) {
        // Inspect page contents and initialize all tables that carry the datatables class
        const $ = cheerio.load(page.content, null, false);

        var tableIds = []
        
        // Iterate around all the tables marked as datatables and collect their element id
        $('table[class=datatable]').each(function( index ) {
          console.debug("Processing table "+index);
          if (  $(this).attr('id') === undefined ){
            $(this).attr('id',`datatable-${crypto.randomBytes(16).toString('base64').substring(0, 16)}`);
            console.warn("Set table "+index+" id to "+$(this).attr('id'));
          }
          $(this).attr("data-processed", "true");
          tableIds.push($(this).attr('id'));
        });

        page.content = $.html();

        // Wrap all datatables in constructor calls in a script at the bottom of the page
        if(tableIds.length > 0){
          page.content += '\n\n<script type="text/javascript">\n';
          tableIds.forEach(function(value){
            console.warn("constructor for "+value);
            page.content += "new DataTable('#"+value+"',{});\n";
          });
          page.content += '</script>\n\n';
        }

        console.warn("new content : "+page.content);
        return page;
      },
    }
  };