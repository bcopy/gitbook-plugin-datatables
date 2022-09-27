module.exports = {
    hooks: {
      init: async function () {
        console.warn("Starting datatabs plugin...")
      },
      "page": function(page) {
        // Inspect page contents and initialize all tables that carry the datatables class
        console.warn("Invoking page hook ... on "+page.content)
        page.content = page.content.replace('class="datatable"','class="datatable" data-processed="true"')
        console.warn("new content : "+page.content)
        return page;
      },
    }
  };