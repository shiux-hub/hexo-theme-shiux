/* global shiux */

'use strict';

hexo.extend.helper.register('shiux_toc', function(content) {
  return this.toc(content, {
    class: "markdownIt-TOC",
    list_number: hexo.theme.config.toc.number
  }).replaceAll(/class="markdownIt-TOC-link"/g, '');
});
