require(["gitbook", "jQuery"], function(gitbook, $, dt) {
    var config = null;
    gitbook.events.bind('start', function(e, bookPluginConfig) {
        // simply retain in parent scope (for subsequent use)
        config = bookPluginConfig['datatables'];
        console.debug('start event ... config: ', config);
      });
    
    // listen for gitbook "page.change" events
    // ... emitted whenever a file.md changes
    gitbook.events.bind("page.change", function(e) {
            $('table[data-dt-process="true"]').each(function(){
                new DataTable(this,{select:true, dom: 'Plfrtip'});
            });

        
    });
});
