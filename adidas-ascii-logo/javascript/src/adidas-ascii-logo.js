/* eslint-disable linebreak-style */
/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function(width) {
  if (width < 2) {
    throw new TypeError('Error, minimum width is 2');
  }

  const specs = { minHeight: Math.round(Math.sqrt(width)),
    stripesNumber: 3,
    spacesBetweenStripes: Math.round(Math.sqrt(width)) };
  let maxLineWidth = width * specs.stripesNumber;
  let adidasLogoOutput = '';

  Array.from({ length: specs.stripesNumber }, (_, stripeNumber) => {
    Array.from({ length: specs.minHeight }, () => {
      let atsPrintedInStripe = 0;
      let columnOffset = maxLineWidth - ((stripeNumber + 1) * width) - (stripeNumber * specs.spacesBetweenStripes);

      adidasLogoOutput = adidasLogoOutput.concat(Array(maxLineWidth).fill().map((__, currentColumn) => {
        if (currentColumn === columnOffset && atsPrintedInStripe < width) {
          atsPrintedInStripe++;
          columnOffset++;

          return '@';
        }
        if (atsPrintedInStripe >= width) {
          atsPrintedInStripe = 0;
          columnOffset = columnOffset + specs.spacesBetweenStripes;
        }

        return ' ';
      }).toString().replace(/,/g, '').concat('\n'));
      maxLineWidth++;
    });
  });

  return `${ adidasLogoOutput.replace(/\n+$/, '') }`;
};
