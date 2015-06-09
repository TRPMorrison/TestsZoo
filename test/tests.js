/* global describe, it */

(function() {
    'use strict';

    describe('About Our Zoo', function() {

        beforeEach(function() {
            window.zoo = new Zoo();
        });

        describe('create a new zoo', function() {
            it('should create a new instance of our Zoo', function() {
                expect(zoo instanceof Zoo).to.equal(true);
            });
        });

        describe('the animals in our zoo', function() {
            it('should contain an array of animals', function() {
                expect(zoo.animals).to.be.an('array');
            });
        });

    });


    describe('About Our Animals', function() {

        beforeEach(function() {
            window.tiger = new Animal({
                name: 'Tony',
                species: 'Tiger',
                age: 5,
                status: 'Grrrrreeeaaat'
            });
        });

        describe('creating an animal', function() {
            it('tiger should be an animal', function() {
                expect(tiger instanceof Animal).to.equal(true);
            });
        });

        describe('giving our animals properties', function() {
            it('should have a name', function() {
                expect(tiger.name).to.exist;
                expect(tiger.name).to.be.a('string');
            });
            it('should have other properties', function() {
                expect(tiger.species).to.exist;
                expect(tiger.age).to.exist;
                expect(tiger.status).to.exist;
            });
        });
        describe('aniamls escaping', function() {
            expect(tiger.escape).to.exist;
        });
        it('should alter the status', function() {
            tiger.escape();
            expect(tiger.status).to.equal('escaped');
        });
    });

});

})();
