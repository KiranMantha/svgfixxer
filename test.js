const SVGFixer = require('oslllo-svg-fixer');
SVGFixer('./actual', './fix').fix().then(() => { console.log('done') });