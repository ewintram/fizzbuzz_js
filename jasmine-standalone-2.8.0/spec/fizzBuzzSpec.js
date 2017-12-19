desribe('javabuzz', function() {
    var javabuzz;

    describe( 'knows when a number is ', function() {
        it( 'divisible 3', function() {
          javabuzz = new JavaBuzz();
          expect(isDivisibleBy(3)).toBe(true);
        });
    });
});
