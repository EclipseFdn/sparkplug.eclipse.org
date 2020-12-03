#!/bin/bash
# ===========================================================================
# Copyright (c) 2020 Eclipse Foundation and others.
# 
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
# 
# Contributors:
# Eric Poirier (Eclipse Foundation)
# 
# SPDX-License-Identifier: EPL-2.0
# ===========================================================================

touch static/js/testimonials.json
./node_modules/js-yaml/bin/js-yaml.js -c data/testimonials.yml | ./node_modules/json-minify/index.js > static/js/testimonials.json