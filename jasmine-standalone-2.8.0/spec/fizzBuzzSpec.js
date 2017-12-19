describe('javabuzz', function() {

    var javabuzz;

    beforeEach(function() {
      javabuzz = new JavaBuzz();
    });

    describe('when playing, says', function() {
      it('"Java" when a number is divisible by 3', function() {
        expect(javabuzz.says(3)).toEqual("Java");
      });
      it('"Buzz" when a number is divsible by 5', function () {
        expect(javabuzz.says(5)).toEqual("Buzz");
      });
      it('"JavaBuzz" when a number is divisible by 15', function() {
        expect(javabuzz.says(15)).toEqual("JavaBuzz");
      });
      it('number when not divisible by 5 or 3', function() {
        expect(javabuzz.says(4)).toEqual(4);
      });
    });

});
