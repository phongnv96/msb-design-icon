import fs from 'fs';
import mergePackages from 'merge-packages';

const pkgStr1 = fs.readFileSync('../package-icon-svg.json', 'utf8');
const pkgStr2 = fs.readFileSync('../package-icon-react.json', 'utf8');

// only support string. buffer is not supported
const mergedPkgStr = mergePackages(pkgStr1, pkgStr2);
fs.writeFileSync('./package.json', mergedPkgStr);
