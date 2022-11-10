require(["gitbook", "jQuery"], function(gitbook, $) {
    var config = null;
    var datatablesConfig = {}
    var defaultDatatablesConfig = {}

    gitbook.events.bind('start', function(e, bookPluginConfig) {
        config = bookPluginConfig['datatables'];

        if (config["default-config"]) {
            defaultDatatablesConfig = eval(config["default-config"]);
        }

        // If configured and valid JSON, initialize the datatablesConfig
        if (config["config-url"]) {
            $.ajax({ url: config["config-url"]
                   , contentType: 'application/json; charset=UTF-8'
                   , async: false
                   , success: function( data ){
                        datatablesConfig = eval(data);
                    }
                    , error: function(errorData){
                        console.log("Datatables Config ajax call failed - invalid JSON or mime type ?", errorData);
                    }
                }); 
        }
      });
    
    // listen for gitbook "page.change" events
    // ... emitted whenever a file.md changes
    gitbook.events.bind("page.change", function(e) {
            $('table[data-dt-process="true"]').each(function(){
                // By default, apply the given default config (provided on book.json for instance)
                var dtConfig = defaultDatatablesConfig;

                var tableElement = $(this);
                
                // Try and match this to any of the CSS selectors in the datables config map
                $.each(datatablesConfig,function(selector){
                    if(tableElement.is(selector)){
                        $.extend(dtConfig, datatablesConfig[selector]);
                    }
                });

                // Construct the datatable and apply the custom configuration if any
                new DataTable(this,dtConfig);
            });
    });
});
