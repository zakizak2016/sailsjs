var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('what?', function() {
    it('fails, as expected', function(done) {
        chai.request('http://chaijs.com/guide/styles/#expect')
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });
});
