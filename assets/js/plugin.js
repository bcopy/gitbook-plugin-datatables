require(["gitbook", "jQuery"], function(gitbook, $) {
    var config = null;
    var datatablesConfig = {}
    var defaultDatatablesConfig = {}

    gitbook.events.bind('start', function(e, bookPluginConfig) {
        // simply retain in parent scope (for subsequent use)
        config = bookPluginConfig['datatables'];

        if (config.defaultConfig) {
            defaultDatatablesConfig = config.defaultConfig;
        }

        // If configured, keep the datatablesConfig available
        if (config.configLocation) {
            // require the module and keep a copy of the map
            datatablesConfig = require(config.configLocation).DATATABLES_CONFIG;
        }

        console.debug('start event ... config: ', config);
      });
    
    // listen for gitbook "page.change" events
    // ... emitted whenever a file.md changes
    gitbook.events.bind("page.change", function(e) {
            $('table[data-dt-process="true"]').each(function(){
                // By default, apply the given default config (provided on book.json for instance)
                var dtConfig = defaultDatatablesConfig;

                var tableElement = $(this);
                
                // Try and match this to any of the CSS selectors in the datables config map
                $.each(datatablesConfig,function(index, selector){
                    if(tableElement.is(selector)){
                        $.extend(dtConfig, datatablesConfig[selector])
                    }
                });

                // Construct the datatable and apply the custom configuration if any
                new DataTable(this,dtConfig);
            });

        
    });
});
