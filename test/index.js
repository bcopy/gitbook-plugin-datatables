var path = require('path');
var tester = require('honkit-tester');
var assert = require('assert');


describe('datatables', function() {
    it('should correctly initialize datatables', function() {
        return tester.builder()
            .withContent('\n<table class="datatable"><tr><th>header</th></tr></table>')
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                console.warn('\n\n'+result.get('index.html').content+'\n\n')
                assert(result.get('index.html').content.includes('data-processed="true"'));
            });
    });
});