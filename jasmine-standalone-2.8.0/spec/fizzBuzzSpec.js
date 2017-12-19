describe('javabuzz', function() {

    var javabuzz;

    beforeEach(function() {
      javabuzz = new JavaBuzz();
    });

    describe('knows when a number is', function() {
        it('divisible by 3', function() {
          expect(javabuzz.isDivisibleByThree(12)).toBe(true);
        });
    });

    describe('when playing, says', function() {
      it('"Java" when a number is divisible by 3', function() {
        expect(javabuzz.says(3)).toEqual("Java");
      });
      it('"Buzz" when a number is divsible by 5', function () {
        expect(javabuzz.says(5)).toEqual("Buzz");
      });
    });

});
