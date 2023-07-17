import { readFileSync } from 'fs';
import { parallel, series } from 'gulp';
import { resolve } from 'path';
import { twotoneStringify } from './plugins/svg2Definition/stringify';
import {
  adjustViewBox,
  assignAttrsAtTag,
  setDefaultColorAtPathTag
} from './plugins/svg2Definition/transforms';
import { generalConfig, remainFillConfig } from './plugins/svgo/presets';
import {
  clean,
  generateEntry,
  // copy,
  generateIcons,
  generateInline
} from './tasks/creators';
import { ExtractRegExp } from './tasks/creators/generateInline';
import { IconDefinition } from './templates/types';
import { getIdentifier } from './utils';

const iconTemplate = readFileSync(resolve(__dirname, './templates/icon.ts.ejs'), 'utf8');

const strReplace = ['fillRule', 'clip-path'];

function snakeToCamel(str) {
  const newStr = str;
  return newStr.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
}

function convertToCamelCase(content: any, strReplace: string[]) {
  strReplace.forEach((str) => {
    const strCamel = snakeToCamel(str);
    content.replace(str, strCamel);
  });
  return content;
}

export default series(
  // 1. clean
  clean(['inline-svg', 'inline-namespaced-svg', 'es', 'lib']),

  parallel(
    // 2.1 copy helpers.ts, types.ts
    // copy({
    //   from: ['templates/*.ts'],
    //   toDir: 'src'
    // }),

    // 2.2 generate abstract node with the theme "filled"
    generateIcons({
      theme: 'filled',
      from: ['vendors/svg/filled/*.svg'],
      toDir: 'vendors/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [assignAttrsAtTag('svg', { focusable: 'false' }), adjustViewBox],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Filled' }),
        content: content
          .replace('fillRule', 'fillRule')
          .replace('clip-path', 'clipPath')
          .replace('stroke-linecap', 'strokeLinecap')
          .replace('stroke-width', 'strokeWidth')
          .replace('clip-rule', 'clipRule')
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Filled' })
    }),

    // 2.2 generate abstract node with the theme "outlined"
    generateIcons({
      theme: 'outlined',
      from: ['vendors/svg/outlined/*.svg'],
      toDir: 'vendors/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [assignAttrsAtTag('svg', { focusable: 'false' }), adjustViewBox],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Outlined' }),
        content: content
          .replace('fillRule', 'fillRule')
          .replace('clip-path', 'clipPath')
          .replace('stroke-linecap', 'strokeLinecap')
          .replace('stroke-width', 'strokeWidth')
          .replace('clip-rule', 'clipRule')
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Outlined' })
    }),

    // 2.3 generate abstract node with the theme "outlined"
    generateIcons({
      theme: 'twotone',
      from: ['vendors/svg/twotone/*.svg'],
      toDir: 'vendors/asn',
      svgoConfig: remainFillConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' }),
        adjustViewBox,
        setDefaultColorAtPathTag('#333')
      ],
      stringify: twotoneStringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'TwoTone' }),
        content: content
          .replace('fillRule', 'fillRule')
          .replace('clip-path', 'clipPath')
          .replace('stroke-linecap', 'strokeLinecap')
          .replace('stroke-width', 'strokeWidth')
          .replace('clip-rule', 'clipRule')
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'TwoTone' })
    })
  ),
  parallel(
    // 3.1 generate entry file: src/index.ts
    generateEntry({
      entryName: 'index.ts',
      from: ['vendors/asn/*.ts'],
      toDir: 'vendors/asn',
      banner: '// This index.ts file is generated automatically.\n',
      template: `export { default as <%= identifier %> } from '<%= path %>';`,
      mapToInterpolate: ({ name: identifier }) => ({
        identifier,
        path: `./${identifier}`
      })
    }),

    // 3.2 generate inline SVG files
    generateInline({
      from: ['vendors/asn/*.ts'],
      toDir: ({ _meta }) => `inline-svg/${_meta && _meta.theme}`,
      getIconDefinitionFromSource: (content: string): IconDefinition => {
        const extract = ExtractRegExp.exec(content);
        if (extract === null || !extract[1]) {
          throw new Error('Failed to parse raw icon definition: ' + content);
        }
        return new Function(`return ${extract[1]}`)() as IconDefinition;
      }
    }),
    // 3.3 generate inline SVG files with namespace
    generateInline({
      from: ['vendors/asn/*.ts'],
      toDir: ({ _meta }) => `inline-namespaced-svg/${_meta && _meta.theme}`,
      getIconDefinitionFromSource: (content: string): IconDefinition => {
        const extract = ExtractRegExp.exec(content);
        if (extract === null || !extract[1]) {
          throw new Error('Failed to parse raw icon definition: ' + content);
        }
        return new Function(`return ${extract[1]}`)() as IconDefinition;
      },
      renderOptions: {
        extraSVGAttrs: { xmlns: 'http://www.w3.org/2000/svg' }
      }
    })
  )
);
