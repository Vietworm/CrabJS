/**
 * @license
 * Copyright (c) 2016 The {life-parser} Project Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://100dayproject.github.io/LICENSE.txt
 * The complete set of authors may be found at http://100dayproject.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://100dayproject.github.io/CONTRIBUTORS.txt
 * Code distributed by 100dayproject as part of the life.
 */

"use strict";

let _module = new __viewRender('default');

 _module.index = function(req, res){
     _module.render(req, res, 'index', {
         title: 'Crab.JS - Easily build web application on Node.js'
     });
 };

module.exports = _module;
