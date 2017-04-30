#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const config = require('./')

fs.writeFileSync(path.join(process.cwd(), '.csscomb.json'), JSON.stringify(config, null, 2))
